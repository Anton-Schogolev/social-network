import React, {KeyboardEvent} from "react";
import s from "./NewMessage.module.css";
import {connect} from "react-redux";
import {addMessageAC} from "../../../redux/dialogsReducer";
import {ActionsTypes} from "../../../types/entities";
import {reduxForm, Field} from "redux-form";
import {Dispatch} from "redux";

type MapDispatchToPropsType = {
    addMessage: (text: string) => void
}

const TextareaForm = reduxForm<{message: string},MapDispatchToPropsType>({form:'messageText'})((props) => {
    const onEnterText = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey && e.currentTarget.value.trim() !== "") {
            props.handleSubmit(e)
            props.reset()
            e.preventDefault()
        } else if (e.key === "Enter" && !e.shiftKey) {
            props.reset()
            e.preventDefault()
        }
    }
    return <Field autoFocus className={s.text} placeholder={"Enter your message"}
        onKeyPress={onEnterText} name={"message"} component={"textarea"}/>
})

const NewMessage: React.FC<MapDispatchToPropsType> = ({addMessage}) => {
    const onSubmit = ({message}: {message: string}) => {
        addMessage(message)
    }
    return (

        <div className={s.container}>
            <TextareaForm
                addMessage={addMessage}
                onSubmit={onSubmit}
            />
        </div>
    )
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>) => ({
    addMessage: (text: string) => dispatch(addMessageAC(text))
})

export default connect(()=>{}, mapDispatchToProps)(NewMessage)