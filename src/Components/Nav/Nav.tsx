import React from "react";
import s from "./Nav.module.css"
import {NavLink} from "react-router-dom";
import {DialogsDataType} from "../../types/entities";
import {connect} from "react-redux";
import {StateType} from "../../redux/reduxStore";

type MapStateToPropsType = {
    friends: Array<DialogsDataType>
}

function Nav({friends}: MapStateToPropsType) {
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
            <div className={s.item}><NavLink to={"/users"} activeClassName={s.active}>Users</NavLink></div>
            <div className={s.cont}>
                {friendsRender}
            </div>
        </nav>
    )
}

const mapStateToProps = (state: StateType):MapStateToPropsType => ({friends: state.nav.friends})

export default connect(mapStateToProps,{})(Nav)