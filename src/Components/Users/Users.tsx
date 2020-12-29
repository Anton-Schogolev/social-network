import React from "react";
import {StateType} from "../../redux/reduxStore";
import {ActionsTypes, UserType} from "../../types/entities";
import {connect} from "react-redux";
import {User} from "./User/User";
import {followAC, unfollowAC} from "../../redux/usersReducer";

type MapStateToPropsType = { users: UserType[] }
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

function Users(props: MapStateToPropsType & MapDispatchToPropsType) {
    console.log("follow")
    return <>
        {props.users.map(us => <User key={us.id} user={us} follow={props.follow} unfollow={props.unfollow}/>)}
    </>
}

const mapStateToProps = (state: StateType): MapStateToPropsType => ({users: state.users.users})
const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void): MapDispatchToPropsType => ({
    follow: userId => dispatch(followAC(userId)),
    unfollow: userId => dispatch(unfollowAC(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)