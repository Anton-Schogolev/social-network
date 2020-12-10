import React, {ChangeEvent, useState} from "react";
import s from "./NewPost.module.css"

type NewPostType = {
    addNewPost: (text:string) => void
}

export function NewPost(props:NewPostType) {
    const [textarea,setTextarea]=useState<string>("")
    const onTextareaChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        setTextarea(e.currentTarget.value)
    }
    const onAddPostClick = () =>{
        props.addNewPost(textarea)
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