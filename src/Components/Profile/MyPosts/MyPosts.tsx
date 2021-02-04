import React from "react";
import {Post} from "./Post/Post";
import NewPost from "./NewPost/NewPost";
import {PostType} from "../../../types/entities";
import {StateType} from "../../../redux/reduxStore";
import {useSelector} from "react-redux";


const MyPosts: React.FC = () => {
    const posts = useSelector<StateType, Array<PostType>>(state => state.posts.postsArray)
    const postDataMap = (x: PostType): JSX.Element => {
        return (
            <Post key={x.id} text={x.text} ava={x.ava} amountOfLikes={x.amountOfLikes} id={x.id}/>
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