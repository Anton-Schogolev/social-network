import React from "react";
// import s from "./Profile.module.css"
import {User} from "./User/User";
import {MyPosts} from "./MyPosts/MyPosts";
import {PostsPropsType} from "../../redux/State";

type PropsType={
    state: PostsPropsType
}

export function Profile(props: PropsType) {
    return (
        <>
            <div>
                <img width={"100%"} src={"http://www.cashadvance6online.com/data/archive/img/751556980.png"} alt={""}/>
            </div>
            <User/>
            <MyPosts state={props.state}/>
        </>
    )
}