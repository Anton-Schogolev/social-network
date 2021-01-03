import React from "react";
import {User} from "./User/User";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileUserType} from "../../types/entities";

type PropsType = { userProfile: ProfileUserType}

export function Profile(props: PropsType) {
    return (
        <div>
            <div>
                <img width={"100%"} src={"http://www.cashadvance6online.com/data/archive/img/751556980.png"} alt={""}/>
            </div>
            <User userProfile={props.userProfile}/>
            <MyPosts/>
        </div>
    )
}