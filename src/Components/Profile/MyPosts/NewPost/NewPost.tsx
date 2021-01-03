import React, {ChangeEvent} from "react";
import s from "./NewPost.module.css"
import {addPostAC, changeNewPostAC} from "../../../../redux/profileReducer";
import {ActionsTypes} from "../../../../types/entities";
import {connect} from "react-redux";
import {StateType} from "../../../../redux/reduxStore";

type MapStateToPropsType = { value: string }
type MapDispatchToPropsType = {
    changeNewPost: (text: string) => void
    addPost: () => void
}

function NewPost({value, addPost, changeNewPost}: MapStateToPropsType & MapDispatchToPropsType) {
    const onTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeNewPost(e.currentTarget.value)
    }
    const onAddPostClick = () => {
        addPost()
        changeNewPost("")
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


const mapStateToProps = (state: StateType): MapStateToPropsType => ({value: state.posts.newPost})
const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void): MapDispatchToPropsType => ({
    changeNewPost: (text: string) => dispatch(changeNewPostAC(text)),
    addPost: () => dispatch(addPostAC())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)