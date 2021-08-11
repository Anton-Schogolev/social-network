import React from "react";
import {UserProfile} from "./UserProfile/UserProfile";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileUserType} from "../../types/entities";

type PropsType = {
    userProfile: ProfileUserType,
    userStatus: string,
    isHisProfile: boolean
    putUserProfileStatus: (status: string) => void
}

export const Profile = (props: PropsType) => {
    return <div>
        <UserProfile
            userProfile={props.userProfile}
            status={props.userStatus}
            isHisProfile={props.isHisProfile}
            changeStatus={props.putUserProfileStatus}
        />
        <MyPosts/>
    </div>
}
