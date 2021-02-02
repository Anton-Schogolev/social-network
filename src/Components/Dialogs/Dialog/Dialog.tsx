import {NavLink} from "react-router-dom";
import React from "react";
import {DialogsDataType} from "../../../types/entities";
import s from "./Dialog.module.css";

export const Dialog = React.memo((props: DialogsDataType) => (
    <div className={s.dialog}>
        <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>
            {props.name}
        </NavLink>
    </div>
));