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
    const numbersOfPages: number[] = []
    for (let i = props.currentPage - 4; i < props.currentPage + 4 && i <= props.numberOfPages; i++) {
        if (i < 1)
            i = 1
        numbersOfPages.push(i)
    }
    const Span = ({value, Class}: { value: number; Class?: boolean }) => <span
        className={Class ? s.activePage : ""}
        onClick={() => {
            props.changePage(value)
        }}>{value} </span>
    const pages = <div>{numbersOfPages[0] >= 2 ?
        <Span value={1}/> : ""}{numbersOfPages[0] <= 2 ? numbersOfPages.map(value =>
        <Span value={value} Class={props.currentPage === value}/>) : (<>... {numbersOfPages.map(value =>
        <Span value={value}
              Class={props.currentPage === value}/>)}</>)} {numbersOfPages[numbersOfPages.length - 1] === props.numberOfPages ? "" : (
        <>{numbersOfPages[numbersOfPages.length - 1] === props.numberOfPages-1 ? "" : "..."} <Span
            value={props.numberOfPages}/></>
    )}</div>;
    return <>
        {pages}
        {props.users.map(us => <User key={us.id} user={us} follow={props.follow}
                                     unfollow={props.unfollow}/>)}
    </>
}