import React from "react";
import {Post} from "./Post/Post";
import {NewPost} from "./NewPost/NewPost";
import {PostsPropsType} from "../../../redux/State";

type PropsType={
    state: PostsPropsType
    addPost: (text:string) => void
}

export const MyPosts:React.FC<PropsType>=({state, addPost})=> {

    const postDataMap=state.postsArray.map(x=>{return(
        <Post key={x.id} text={x.text} ava={x.ava} amountOfLikes={x.amountOfLikes} id={x.id}/>
    )})
    return (
        <div>
            <h4>My posts</h4>
            <NewPost addNewPost={addPost}/>
            {postDataMap}
        </div>
    )
}

