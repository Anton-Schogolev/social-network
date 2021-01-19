import React from "react";
import s from "./NewPost.module.css"
import {addPostAC} from "../../../../redux/profileReducer";
import {ActionsTypes} from "../../../../types/entities";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";

type MapDispatchToPropsType = {
    addPost: (text: string) => void
}

const NewPostTextarea = reduxForm<{newPost: string}>({form: 'newPost'})((props) => {
    return <form onSubmit={(e)=>{props.handleSubmit(e); props.reset()}}>
        <div>
            <Field name={"newPost"}
                   placeholder={"Enter new post"}
                   component={"textarea"} rows={5} className={s.text}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>;
})

function NewPost({addPost}: MapDispatchToPropsType) {
    const onSubmit = ({newPost}: {newPost: string}) => {
        addPost(newPost)
    }
    return (
        <div>
            <NewPostTextarea onSubmit={onSubmit}/>
        </div>
    )
}


const mapStateToProps = () => ({})
const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void): MapDispatchToPropsType => ({
    addPost: (text: string) => dispatch(addPostAC(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)