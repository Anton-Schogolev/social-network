import React, {ChangeEvent} from "react";
import s from "./NewPost.module.css"
import {ActionsTypes, addPostAC, changeNewPostAC} from "../../../../redux/State";

type NewPostType = {
    value: string
    dispatch: (action: ActionsTypes) => void
}

export function NewPost({value, dispatch}: NewPostType) {
    const onTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(changeNewPostAC(e.currentTarget.value))
    }
    const onAddPostClick = () => {
        dispatch(addPostAC())
        dispatch(changeNewPostAC(""))
    }
    return (
        <div>
            <div>
                <textarea value={value} onChange={onTextareaChange} rows={5} className={s.text}/>
            </div>
            <div>
                <button onClick={onAddPostClick}>Add post</button>
            </div>
        </div>
    )
}