import React from "react";
import s from "./Header.module.css"

type PropsType = {
    id: number
    email: null | string
    login: string
    isAuth: boolean
}

export function Header(props: PropsType) {
    return (
        <header className={s.header}>
            <h5>Here has to be logo</h5>
            {
                props.isAuth ? <span className={s.login}>{props.login}</span>
                    : <span className={s.login}>login</span>
            }
        </header>
    )
}