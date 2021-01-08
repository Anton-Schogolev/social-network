import React from "react";
import {StateType} from "../../redux/reduxStore";
import {UsersPropsType, UserType} from "../../types/entities";
import {connect} from "react-redux";
import {
    changePage,
    follow,
    setIsFetching,
    setTotalNumber,
    setUsers,
    unfollow
} from "../../redux/usersReducer";
import axios from "axios";
import {Users} from "./User/Users";
import {Preloader} from "../common/Preloader";

type MapStateToPropsType = UsersPropsType
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    changePage: (newPage: number) => void
    setTotalNumber: (totalNumber: number) => void
    setIsFetching: (isFetching: boolean) => void
}
type AxiosGetType = {
    "items": Array<{
        "name": string
        "id": number
        "photos": {
            "small": string | null
            "large": string | null
        },
        "status": string
        "followed": boolean
    }>

    "totalCount": number
    "error": null
}

class UsersContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {
    numberOfPages = 1

    componentDidMount() {
        this.changePage(1)
    }

    changePage = (page: number) => {
        this.props.changePage(page)
        this.props.setIsFetching(true)
        axios.get<AxiosGetType>(
            `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`,
            {withCredentials: true}
        ).then(response => {
            this.props.setIsFetching(false)
            this.numberOfPages = Math.ceil(response.data.totalCount / this.props.pageSize)
            this.props.setTotalNumber(response.data.totalCount)
            this.props.setUsers(response.data.items.map(it => ({
                id: it.id,
                name: it.name,
                status: it.status,
                photos: {
                    small: it.photos.small ? it.photos.small : "https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg",
                    large: it.photos.large
                },
                followed: it.followed,
                address: {country: "Belarus"}
            })))
        })
    }

    render() {
        if (this.props.isFetching)
            return <Preloader/>
        else
            return <Users
                users={this.props.users}
                numberOfPages={this.numberOfPages}
                currentPage={this.props.currentPage}
                changePage={this.changePage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
    }
}

const mapStateToProps = (state: StateType): MapStateToPropsType => ({
    users: state.users.users,
    totalNumber: state.users.totalNumber,
    currentPage: state.users.currentPage,
    pageSize: state.users.pageSize,
    isFetching: state.users.isFetching
})

export default connect<MapStateToPropsType, MapDispatchToPropsType,{}, StateType>(mapStateToProps, {
    follow, unfollow, setUsers, changePage, setTotalNumber, setIsFetching})(UsersContainer)