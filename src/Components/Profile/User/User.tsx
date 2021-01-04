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
                {/*{userProfile.contacts.facebook && <p>facebook:
                    <a href={userProfile.contacts.facebook}> {userProfile.contacts.facebook}</a>
                </p>}
                {userProfile.contacts.website && <p>website:
                    <a href={userProfile.contacts.website}> {userProfile.contacts.website}</a></p>}
                {userProfile.contacts.vk && <p>vk:
                    <a href={userProfile.contacts.vk}> {userProfile.contacts.vk}</a></p>}
                {userProfile.contacts.twitter && <p>twitter:
                    <a href={userProfile.contacts.twitter}> {userProfile.contacts.twitter}</a></p>}
                {userProfile.contacts.instagram && <p>instagram:
                    <a href={userProfile.contacts.instagram}> {userProfile.contacts.instagram}</a></p>}
                {userProfile.contacts.youtube && <p>youtube:
                    <a href={userProfile.contacts.youtube}> {userProfile.contacts.youtube}</a></p>}
                {userProfile.contacts.github && <p>github:
                    <a href={userProfile.contacts.github}> {userProfile.contacts.github}</a></p>}
                {userProfile.contacts.mainLink && <p>mainLink:
                    <a href={userProfile.contacts.mainLink}> {userProfile.contacts.mainLink}</a></p>}*/}
            </div>
        </div>
    </div>;
}