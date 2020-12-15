import {ActionsTypes, DialogsPropsType} from "./State";

export const dialogsReducer = (state: DialogsPropsType, action: ActionsTypes) => {
    if (action.type === "ADD-MESSAGE") {
        state.messageProps.push({
            id: state.messageProps.length,
            message: state.newMessage,
            userId: 5
        })
    }else if (action.type === "CHANGE-NEW-MESSAGE") {
        state.newMessage = action.text
    }
    return state
}