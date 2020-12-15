import React from "react";
import s from "./Dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import {ActionsTypes, DialogsPropsType} from "../../redux/Store";
import {Message} from "./Message/Message";
import {NewMessage} from "./NewMessage/NewMessage";

type PropsType = {
    state: DialogsPropsType
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs: React.FC<PropsType> = ({state, dispatch}) => {

    const dialogMap = state.dialogsProps.map(x => {
        return <Dialog key={x.id} id={x.id} name={x.name}/>
    })
    const messageMap = state.messageProps.map(x => {
        const name = state.dialogsProps.find(y => y.id === x.userId)
        if (name !== undefined)
            return (
                <Message id={x.id} name={name.name} message={x.message} userID={x.userId}/>)
        else return undefined
    })
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogMap}
            </div>
            <div className={s.messages}>
                <div className={s.allMassages}>{messageMap}</div>
                <NewMessage value={state.newMessage} dispatch={dispatch}/>

            </div>
        </div>
    )
}
