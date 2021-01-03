import s from "./User.module.css";
import React from "react";
import {ProfileUserType} from "../../../types/entities";
import {Preloader} from "../../common/Preloader";

type PropsType = { userProfile:ProfileUserType}

export function  User({userProfile}: PropsType) {
    if(userProfile)
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
                {Boolean(userProfile.contacts.facebook) && <p>facebook: {userProfile.contacts.facebook}</p>}
                {Boolean(userProfile.contacts.website) && <p>website: {userProfile.contacts.website}</p>}
                {Boolean(userProfile.contacts.vk) && <p>vk: {userProfile.contacts.vk}</p>}
                {Boolean(userProfile.contacts.twitter) && <p>twitter: {userProfile.contacts.twitter}</p>}
                {Boolean(userProfile.contacts.instagram) && <p>instagram: {userProfile.contacts.instagram}</p>}
                {Boolean(userProfile.contacts.youtube) && <p>youtube: {userProfile.contacts.youtube}</p>}
                {Boolean(userProfile.contacts.github) && <p>github: {userProfile.contacts.github}</p>}
                {Boolean(userProfile.contacts.mainLink) && <p>mainLink: {userProfile.contacts.mainLink}</p>}
            </div>
        </div>
    </div>;
    else
        return <Preloader/>
}