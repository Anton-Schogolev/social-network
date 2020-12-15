import React, {KeyboardEvent, ChangeEvent} from "react";
import s from "./NewMessage.module.css";
import {ActionsTypes} from "../../../redux/Store";
import {addMessageAC, changeNewMessageAC} from "../../../redux/dialogsReducer";

type PropsType = {
    value: string
    dispatch: (action: ActionsTypes) => void
}

export function NewMessage({value, dispatch}: PropsType) {
    const onTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(changeNewMessageAC(e.currentTarget.value))
    }
    const onEnterText = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey && value.trim() !== "") {
            dispatch(addMessageAC())
            dispatch(changeNewMessageAC(""))
            e.preventDefault()
        } else if (e.key === "Enter" && !e.shiftKey) {
            dispatch(changeNewMessageAC(""))
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
                value={value}
                onChange={onTextareaChange}
                onKeyPress={onEnterText}
            />
        </div>
    )
}