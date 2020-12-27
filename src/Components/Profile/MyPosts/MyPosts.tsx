import React from "react";
import {Post} from "./Post/Post";
import NewPost from "./NewPost/NewPost";
import {PostType} from "../../../types/entities";
import {StateType} from "../../../redux/reduxStore";
import {connect} from "react-redux";

type MapStateToProps = { posts: Array<PostType> }

const MyPosts: React.FC<MapStateToProps> = ({posts}) => {

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


const mapStateToProps = (state: StateType): MapStateToProps => ({posts: state.posts.postsArray})

export default connect(mapStateToProps, {})(MyPosts)