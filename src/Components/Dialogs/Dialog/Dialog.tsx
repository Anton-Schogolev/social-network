import s from "./Dialog.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogsDataType} from "../../../types/entities";


export function Dialog(props: DialogsDataType) {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>
                {props.name}
            </NavLink>
        </div>
    )
}