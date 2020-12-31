import React from "react";
import {StateType} from "../../redux/reduxStore";
import {ActionsTypes, UserType} from "../../types/entities";
import {connect} from "react-redux";
import {User} from "./User/User";
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import axios from "axios";

type MapStateToPropsType = { users: UserType[] }
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
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

function Users(props: MapStateToPropsType & MapDispatchToPropsType) {
    const getUsers = () => {
        axios.get<AxiosGetType>("https://social-network.samuraijs.com/api/1.0/users").then(state => props.setUsers(state.data.items.map(it => ({
            id:it.id,
            name: it.name,
            status: it.status,
            ava: it.photos.small ? it.photos.small : "https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg",
            followed: it.followed,
            address: {country: "Belarus"}
        }))))
    }
    return <>
        <button onClick={getUsers}>Get Users</button>
        {props.users.map(us => <User key={us.id} user={us} follow={props.follow} unfollow={props.unfollow}/>)}
    </>
}

const mapStateToProps = (state: StateType): MapStateToPropsType => ({users: state.users.users})
const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void): MapDispatchToPropsType => ({
    follow: userId => dispatch(followAC(userId)),
    unfollow: userId => dispatch(unfollowAC(userId)),
    setUsers: users => dispatch(setUsersAC(users))
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)