import s from "./UserProfile.module.css";
import React, {useState} from "react";
import {ProfileUserType} from "../../../types/entities";

type PropsType = {
    userProfile: ProfileUserType,
    status: string,
    isHisProfile: boolean,
    changeStatus: (status:string) => void
}

export function UserProfile({userProfile, isHisProfile, ...restProps}: PropsType) {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(restProps.status)

    const onBlurZhdun = () => {
        setEditMode(false)
        restProps.changeStatus(status)
    }

    return <div className={s.user}>
        <img
            src={userProfile.photos.large ? userProfile.photos.large : "https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg"}
            className={s.ava} alt={""}/>
        <div>
            <b>{userProfile.fullName}</b>
            <p>Status: {isHisProfile ?(
                editMode ?
                    <input
                        onChange={event => setStatus(event.currentTarget.value)}
                        autoFocus onBlur={onBlurZhdun} value={status}/> :
                    <span onDoubleClick={() => setEditMode(true)}>{restProps.status || "enter status with help of double click, pls"}</span>) :
                `${restProps.status}`}
            </p>
            {userProfile.lookingForAJob && <p>looking for a job: {userProfile.lookingForAJobDescription}</p>}
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