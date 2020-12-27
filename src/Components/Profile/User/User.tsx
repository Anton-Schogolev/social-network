import s from "./User.module.css";
import React from "react";

export function User() {

    return <div className={s.user}>
        <img src={"https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg"} className={s.ava} alt={""}/>
        <div>
            <b>name</b>
            <p>description</p>

        </div>
    </div>;
}