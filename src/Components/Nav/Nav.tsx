import React from "react";
import s from "./Nav.module.css"
import {NavLink} from "react-router-dom";
import {DialogsDataType} from "../../redux/Store";

type PropsType = {
    friends: Array<DialogsDataType>
}

export function Nav({friends}: PropsType) {
    const friendsRender = friends.map(fr => {
        return (
            <div key={fr.id} className={s.friend}>

                <NavLink to={`/dialogs/${fr.id}`} activeClassName={s.active}>
                    <div className={s.ava}/>
                </NavLink>
                <div className={s.item}><NavLink to={`/dialogs/${fr.id}`} activeClassName={s.active}>{fr.name}</NavLink>
                </div>

            </div>
        )
    })
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink exact to={"/"} activeClassName={s.active}>Profile</NavLink></div>
            <div className={s.item}><NavLink to={"/dialogs"} activeClassName={s.active}>Messages</NavLink></div>
            <div className={s.item}><NavLink to={"/news"} activeClassName={s.active}>News</NavLink></div>
            <div className={s.item}><NavLink to={"/music"} activeClassName={s.active}>Music</NavLink></div>
            <div className={s.item}><NavLink to={"/settings"} activeClassName={s.active}>Settings</NavLink></div>
            <div className={s.cont}>
                {friendsRender}
            </div>
        </nav>
    )
}