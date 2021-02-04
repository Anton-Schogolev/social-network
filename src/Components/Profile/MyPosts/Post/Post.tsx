import React, {useCallback} from "react";
import s from "./Post.module.css"
import {PostType} from "../../../../types/entities";
import {deletePostAC} from "../../../../redux/profileReducer";
import {useDispatch} from "react-redux";

type PropsType = PostType & {}

export const Post = React.memo((props: PropsType) => {
    const dispatch = useDispatch()

    const deletePost = useCallback(() => dispatch(deletePostAC(props.id)),[props.id, dispatch])
    return (
        <div className={s.container}>
            <img src={props.ava} className={s.ava} alt={""}/>
            <div className={s.postText}>
                <pre className={s.preText}>{props.text}</pre>
                <button onClick={deletePost} className={s.delete}>x</button>
            </div>
            <p className={s.likes}>Like {props.amountOfLikes}</p>
        </div>
    )
})