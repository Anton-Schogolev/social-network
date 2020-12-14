import React, {KeyboardEvent, ChangeEvent, useState} from "react";
import s from "./NewMessage.module.css";
import {ActionsTypes, addMessageAC} from "../../../redux/State";

type PropsType = {
    dispatch: (action: ActionsTypes) => void
}

export function NewMessage(props: PropsType) {
    const [text, setText] = useState<string>("")
    const onTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => setText(e.currentTarget.value)
    const onEnterText = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey && text.trim() !== "") {
            props.dispatch(addMessageAC(text))
            setText('')
            e.preventDefault()
        } else if (e.key === "Enter" && !e.shiftKey) {
            setText('')
            e.preventDefault()
        }
    }

    return (
        <div className={s.container}>
            {/*<div className={s.space}>
                <div className={s.ava}/>
            </div>*/}
            <textarea
                autoFocus
                className={s.text}
                value={text}
                onChange={onTextareaChange}
                onKeyPress={onEnterText}
            />
        </div>
    )
}