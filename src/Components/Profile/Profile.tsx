import React from "react";
// import s from "./Profile.module.css"
import {User} from "./User/User";
import {MyPosts} from "./MyPosts/MyPosts";
import {ActionsTypes, PostsPropsType} from "../../types/entities";

type PropsType = {
    state: PostsPropsType
    dispatch: (action: ActionsTypes) => void
}

export function Profile({state, dispatch}: PropsType) {
    return (
        <>
            <div>
                <img width={"100%"} src={"http://www.cashadvance6online.com/data/archive/img/751556980.png"} alt={""}/>
            </div>
            <User/>
            <MyPosts state={state} dispatch={dispatch}/>
        </>
    )
}