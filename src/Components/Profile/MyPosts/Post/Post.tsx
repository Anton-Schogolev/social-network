import React from "react";
import s from "./Post.module.css"
import {PostType} from "../../../../types/entities";


export function Post(props: PostType) {
    return (
        <div className={s.container}>
            <img src={props.ava} className={s.ava} alt={""}/>
            <div className={s.postText}>
                <pre className={s.preText}>{props.text}</pre>
            </div>
            <p className={s.likes}>Like {props.amountOfLikes}</p>
        </div>
    )
}