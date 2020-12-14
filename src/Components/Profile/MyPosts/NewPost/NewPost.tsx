import React, {ChangeEvent, useState} from "react";
import s from "./NewPost.module.css"
import {ActionsTypes, addPostAC} from "../../../../redux/State";

type NewPostType = {
    dispatch: (action: ActionsTypes) => void
}

export function NewPost(props: NewPostType) {
    const [textarea, setTextarea] = useState<string>("")
    const onTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTextarea(e.currentTarget.value)
    }
    const onAddPostClick = () => {
        props.dispatch(addPostAC(textarea))
        setTextarea("")
    }
    return (
        <div>
            <div>
                <textarea value={textarea} onChange={onTextareaChange} rows={5} className={s.text}/>
            </div>
            <div>
                <button onClick={onAddPostClick}>Add post</button>
            </div>
        </div>
    )
}