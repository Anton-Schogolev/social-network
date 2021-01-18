import React from "react";
import {UserProfile} from "./UserProfile/UserProfile";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileUserType} from "../../types/entities";

type PropsType = {
    userProfile: ProfileUserType,
    userStatus: string,
    isHisProfile: boolean
    putUserProfileStatus: (status:string) => void
}

export function Profile(props: PropsType) {
    return (
        <div>
            <div>
                <img width={"100%"} src={"http://www.cashadvance6online.com/data/archive/img/751556980.png"} alt={""}/>
            </div>
            <UserProfile
                userProfile={props.userProfile}
                status={props.userStatus}
                isHisProfile={props.isHisProfile}
                changeStatus={props.putUserProfileStatus}
            />
            <MyPosts/>
        </div>
    )
}