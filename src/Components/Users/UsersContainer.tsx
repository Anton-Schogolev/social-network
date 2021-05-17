import React from "react";
import {StateType} from "../../redux/reduxStore";
import {UsersPropsType, UserType} from "../../types/entities";
import {connect} from "react-redux";
import {
    changePage, follow, getUsers,
    setIsFetching,
    setTotalNumber,
    setUsers, unfollow
} from "../../redux/usersReducer";
import {Users} from "./User/Users";
import {Preloader} from "../common/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStateToPropsType = UsersPropsType & { isAuth: boolean }
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    changePage: (newPage: number) => void
    setTotalNumber: (totalNumber: number) => void
    setIsFetching: (isFetching: boolean) => void
    getUsers: (page: number, pageSize: number) => void
}


class UsersContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {

    componentDidMount() {
        this.changePage(1)
    }

    changePage = (page: number) => {
        this.props.getUsers(page, this.props.pageSize)
    }

    render() {
        if (this.props.isFetching)
            return <Preloader/>
        else
            return <Users
                users={this.props.users}
                numberOfPages={this.props.numberOfPages}
                currentPage={this.props.currentPage}
                changePage={this.changePage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                buttonsDisabled={this.props.buttonsDisabled}
            />
    }
}

const mapStateToProps = (state: StateType): MapStateToPropsType => ({
    ...state.users,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(mapStateToProps, {
    follow, unfollow, setUsers, changePage, setTotalNumber, setIsFetching, getUsers}),
    withAuthRedirect)(UsersContainer)