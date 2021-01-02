import s from "../Users.module.css";
import {User} from "./User";
import React from "react";
import {UserType} from "../../../types/entities";

type PropsType = {
    numberOfPages: number
    currentPage: number
    changePage: (page: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    users: UserType[]
}

export const Users = (props: PropsType) => {
    const pages: number[] = []
    if (!pages[0])
        for (let i = 1; i <= props.numberOfPages; i++)
            pages.push(i)
    return <>
        {pages.map(
            value =>
                <span
                    className={props.currentPage === value ? s.activePage : ""}
                    onClick={() => {
                        props.changePage(value)
                    }}>{value} </span>)}
        {props.users.map(us => <User key={us.id} user={us} follow={props.follow}
                                     unfollow={props.unfollow}/>)}
        {props.numberOfPages}
    </>
}