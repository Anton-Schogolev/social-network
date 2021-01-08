import {UserType} from "../../../types/entities";
import React from "react";
import s from "./User.module.css"
import {NavLink} from "react-router-dom";
import {UsersAPI} from "../../../api/api";

type PropsType = {
    user: UserType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export function User(props: PropsType) {
    const buttonFollowHandler = () => {
        if (props.user.followed)
            UsersAPI.unfollow(props.user.id).then(response => {
                if(response.status === 200)
                    props.unfollow(props.user.id)
            })
        else
            UsersAPI.follow(props.user.id).then(response => {
                if(response.status === 200)
                    props.follow(props.user.id)
            })
    }
    return <div className={s.container}>
        <div className={s.avaContainer}>
            <NavLink to={"/profile/" + props.user.id}>
                <img className={s.ava} width={"65px"} src={props.user.photos.small} alt={"ava"}/>
            </NavLink>
            <button onClick={buttonFollowHandler}>
                {props.user.followed ? "unfollow" : "follow"}
            </button>
        </div>
        <div className={s.data}>
            <div className={s.name}>{props.user.name}</div>
            <div className={s.status}>{props.user.status}</div>
            <div className={s.location}>
                <div>{props.user.address.country},</div>
                <div>{props.user.address.city}</div>
            </div>
        </div>
    </div>
}
