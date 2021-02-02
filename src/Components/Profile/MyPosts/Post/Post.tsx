import React from "react";
import s from "./Post.module.css"
import {PostType} from "../../../../types/entities";

type PropsType = PostType & {
    deletePost: () => void
}

export const Post = React.memo((props: PropsType) => {
    return (
        <div className={s.container}>
            <img src={props.ava} className={s.ava} alt={""}/>
            <div className={s.postText}>
                <pre className={s.preText}>{props.text}</pre>
                <button onClick={props.deletePost} className={s.delete}>x</button>
            </div>
            <p className={s.likes}>Like {props.amountOfLikes}</p>
        </div>
    )
})