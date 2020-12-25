import {ActionsTypes, DialogsPropsType} from "../types/entities";

const initialState: DialogsPropsType = {
    dialogsProps: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Den"},
        {id: 3, name: "Alex"},
        {id: 4, name: "Margo"},
        {id: 5, name: "Anton"},
        {id: 6, name: "John"}
    ],
    messageProps: [
        {id: 1, message: "Hi!", userId: 5},
        {id: 2, message: "How are you?", userId: 5},
        {id: 3, message: "How is your typeScript?", userId: 5},
        {id: 3, message: "Hi! It's good", userId: 3}
    ],
    newMessage: ""
}

export const dialogsReducer = (state: DialogsPropsType = initialState, action: ActionsTypes) => {
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