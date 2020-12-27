import React, {KeyboardEvent, ChangeEvent} from "react";
import s from "./NewMessage.module.css";
import {connect} from "react-redux";
import {addMessageAC, changeNewMessageAC} from "../../../redux/dialogsReducer";
import {ActionsTypes} from "../../../types/entities";
import {StateType} from "../../../redux/reduxStore";

type MapStateToPropsType = { value: string }
type MapDispatchToPropsType = {
    changeNewMessage: (text: string) => void
    addMessage: () => void
}

const NewMessage: React.FC<MapStateToPropsType & MapDispatchToPropsType> = (
    {
        value,
        addMessage,
        changeNewMessage
    }) => {
    const onTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeNewMessage(e.currentTarget.value)
    }
    const onEnterText = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey && value.trim() !== "") {
            addMessage()
            changeNewMessage("")
            e.preventDefault()
        } else if (e.key === "Enter" && !e.shiftKey) {
            changeNewMessage("")
            e.preventDefault()
        }
    }

    return (
        <div className={s.container}>
            <textarea
                autoFocus
                className={s.text}
                value={value}
                onChange={onTextareaChange}
                onKeyPress={onEnterText}
            />
        </div>
    )
}

const mapStateToProps = (state: StateType): MapStateToPropsType => ({value: state.dialogs.newMessage})
const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => ({
    changeNewMessage: (text: string) => dispatch(changeNewMessageAC(text)),
    addMessage: () => dispatch(addMessageAC())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewMessage)