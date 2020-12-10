import React, {KeyboardEvent, ChangeEvent, useState} from "react";
import s from "./NewMessage.module.css";

type PropsType = {
    addMess: (text: string) => void
}

export function NewMessage(props: PropsType) {
    const [text, setText] = useState<string>("")
    const onTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => setText(e.currentTarget.value)
    const onEnterText = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey && text.trim() !== "") {
            props.addMess(text)
            setText('')
            e.preventDefault()
        }
        else if (e.key === "Enter" && !e.shiftKey) {
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