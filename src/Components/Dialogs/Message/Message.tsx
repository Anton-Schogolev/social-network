import s from "./Message.module.css";
import React from "react";

type PropsType = {
    id: number
    message: string
    name: string
    userID: number
}

export function Message(props: PropsType) {
    const message=props.message.split('\n').map(
        (x,i,arr)=>arr.length!==i+1?<>{x}<br/></>:x
    )
    const isU=props.userID===5
    return (
        <div className={isU?s.messRight:s.messLeft}>
            <div>
                <div className={s.ava}/>
                <div className={s.name}>{props.name}</div>
            </div>
            <div key={props.id} className={`${s.message} ${isU?s.messageR:s.messageL}`}>{message}</div>
        </div>
    )
}