import {UserType} from "../../../types/entities";
import React from "react";
import s from "./User.module.css"

type PropsType = {
    user: UserType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export function User(props: PropsType) {
    const buttonFollowHandler = () => {
        if(props.user.followed)
            props.unfollow(props.user.id)
        else
            props.follow(props.user.id)
    }
    return <div className={s.container}>
        <div className={s.avaContainer}>
            <img className={s.ava} width={"65px"} src={props.user.ava} alt={"ava"}/>
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
