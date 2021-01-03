import React from "react";
import {User} from "./User/User";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileUserType} from "../../types/entities";

export function Profile(props: ProfileUserType) {
    return (
        <div>
            <div>
                <img width={"100%"} src={"http://www.cashadvance6online.com/data/archive/img/751556980.png"} alt={""}/>
            </div>
            <User {...props}/>
            <MyPosts/>
        </div>
    )
}