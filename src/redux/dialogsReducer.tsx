import {ActionsTypes, DialogsPropsType} from "./Store";

export const dialogsReducer = (state: DialogsPropsType, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-MESSAGE": {
            state.messageProps.push({
                id: state.messageProps.length,
                message: state.newMessage,
                userId: 5
            })
            return state
        }
        case "CHANGE-NEW-MESSAGE": {
            state.newMessage = action.text
            return state
        }
        default:
            return state
    }
}
export const addMessageAC = () => {
    return {
        type: "ADD-MESSAGE"
    } as const
}
export const changeNewMessageAC = (text: string) => {
    return {
        type: "CHANGE-NEW-MESSAGE",
        text: text
    } as const
}