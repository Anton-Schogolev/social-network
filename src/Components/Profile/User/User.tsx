import s from "./User.module.css";
import React from "react";
import {ProfileUserType} from "../../../types/entities";

type PropsType = { userProfile:ProfileUserType}

export function  User({userProfile}: PropsType) {
    return <div className={s.user}>
        <img
            src={userProfile.photos.large ? userProfile.photos.large : "https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg"}
            className={s.ava} alt={""}/>
        <div>
            <b>{userProfile.fullName}</b>
            {userProfile.lookingForAJob && <p>{userProfile.lookingForAJobDescription}</p>}
            <p>{userProfile.aboutMe}</p>
            <div>
                <h5>Contacts</h5>
                {Object.entries(userProfile.contacts).map(((value) => {
                    return value[1] && <p>{value[0]}: <a href={value[1]}>{value[1]}</a></p>
                }))}
            </div>
        </div>
    </div>;
}