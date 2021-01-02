import React from "react";
import {StateType} from "../../redux/reduxStore";
import {ActionsTypes, UsersPropsType, UserType} from "../../types/entities";
import {connect} from "react-redux";
import {changePageAC, followAC, setTotalNumberAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import axios from "axios";
import {Users} from "./User/Users";

type MapStateToPropsType = UsersPropsType
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    changePage: (newPage: number) => void
    setTotalNumber: (totalNumber: number) => void
}
type AxiosGetType = {
    "items": Array<{
        "name": string
        "id": number
        "photos": {
            "small": string
            "large": string
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
        /*axios.get<AxiosGetType>(
            `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
        ).then(state => {
            this.numberOfPages = Math.ceil(state.data.totalCount / 5)
            this.props.setTotalNumber(state.data.totalCount)
            this.props.setUsers(state.data.items.map(it => ({
                id: it.id,
                name: it.name,
                status: it.status,
                ava: it.photos.small ? it.photos.small : "https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg",
                followed: it.followed,
                address: {country: "Belarus"}
            })))
        })*/
        this.changePage(1)
    }

    changePage = (page: number) => {
        this.props.changePage(page)
        axios.get<AxiosGetType>(
            `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`
        ).then(state => {
            this.numberOfPages = Math.ceil(state.data.totalCount / 5)
            this.props.setTotalNumber(state.data.totalCount)
            this.props.setUsers(state.data.items.map(it => ({
                id: it.id,
                name: it.name,
                status: it.status,
                ava: it.photos.small ? it.photos.small : "https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg",
                followed: it.followed,
                address: {country: "Belarus"}
            })))
        })
    }

    render() {
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
    pageSize: state.users.pageSize
})
const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void): MapDispatchToPropsType => ({
    follow: userId => dispatch(followAC(userId)),
    unfollow: userId => dispatch(unfollowAC(userId)),
    setUsers: users => dispatch(setUsersAC(users)),
    changePage: newPage => dispatch(changePageAC(newPage)),
    setTotalNumber: totalNumber => dispatch(setTotalNumberAC(totalNumber)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)