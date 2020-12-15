import React from "react";
import {Post} from "./Post/Post";
import {NewPost} from "./NewPost/NewPost";
import {ActionsTypes, PostsPropsType} from "../../../redux/State";

type PropsType = {
    state: PostsPropsType
    dispatch: (action: ActionsTypes) => void
}

export const MyPosts: React.FC<PropsType> = ({state, dispatch}) => {

    const postDataMap = state.postsArray.map(x => {
        return (
            <Post key={x.id} text={x.text} ava={x.ava} amountOfLikes={x.amountOfLikes} id={x.id}/>
        )
    })
    return (
        <div>
            <h4>My posts</h4>
            <NewPost value={state.newPost} dispatch={dispatch}/>
            {postDataMap}
        </div>
    )
}

