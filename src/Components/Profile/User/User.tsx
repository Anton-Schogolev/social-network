import s from "./User.module.css";
import React from "react";
import {ProfileUserType} from "../../../types/entities";

export function  User(props: ProfileUserType) {

    return <div className={s.user}>
        <img
            src={props.photos.large ? props.photos.large : "https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg"}
            className={s.ava} alt={""}/>
        <div>
            <b>{props.fullName}</b>
            {props.lookingForAJob && <p>{props.lookingForAJobDescription}</p>}
            <p>{props.aboutMe}</p>
            <div>
                <h5>Contacts</h5>
                {Boolean(props.contacts.facebook) && <p>facebook: {props.contacts.facebook}</p>}
                {Boolean(props.contacts.website) && <p>website: {props.contacts.website}</p>}
                {Boolean(props.contacts.vk) && <p>vk: {props.contacts.vk}</p>}
                {Boolean(props.contacts.twitter) && <p>twitter: {props.contacts.twitter}</p>}
                {Boolean(props.contacts.instagram) && <p>instagram: {props.contacts.instagram}</p>}
                {Boolean(props.contacts.youtube) && <p>youtube: {props.contacts.youtube}</p>}
                {Boolean(props.contacts.github) && <p>github: {props.contacts.github}</p>}
                {Boolean(props.contacts.mainLink) && <p>mainLink: {props.contacts.mainLink}</p>}
            </div>
        </div>
    </div>;
}