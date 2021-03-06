import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

type PropsType = {
    id: number
    email: null | string
    login: string
    isAuth: boolean
    logout: () => void
}

export const Header = React.memo((props: PropsType) => (
    <header className={s.header}>
        <h5>Here has to be logo</h5>
        {
            props.isAuth ? <span className={s.login}>
                        <NavLink to={`/profile/${props.id}`} className={s.hyper} activeClassName={s.active}>
                            {props.login}
                        </NavLink> <button onClick={props.logout}>logout</button>
                    {/*<NavLink onClick={props.logout} to={`/login`} className={s.hyper} activeClassName={s.active}>
                            logout
                        </NavLink>*/}
                </span>
                : <NavLink to={`/login`} className={s.hyper} activeClassName={s.active}>login</NavLink>
        }
    </header>
));