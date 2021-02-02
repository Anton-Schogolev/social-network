import React, {useCallback} from "react";
import {Post} from "./Post/Post";
import NewPost from "./NewPost/NewPost";
import {PostType} from "../../../types/entities";
import {StateType} from "../../../redux/reduxStore";
import {useDispatch, useSelector} from "react-redux";
import {deletePostAC} from "../../../redux/profileReducer";



const MyPosts: React.FC = () => {
    const posts = useSelector<StateType, Array<PostType>>(state => state.posts.postsArray)
    const dispatch = useDispatch()
    const postDataMap = (x: PostType): JSX.Element => {
        const deletePost = useCallback(() => dispatch(deletePostAC(x.id)),[x.id, dispatch])
        return (
            <Post key={x.id} text={x.text} ava={x.ava} amountOfLikes={x.amountOfLikes} id={x.id} deletePost={deletePost}/>
        )
    }
    return (
        <div>
            <h4>My posts</h4>
            <NewPost/>
            {posts.map(postDataMap)}
        </div>
    )
}



export default MyPosts