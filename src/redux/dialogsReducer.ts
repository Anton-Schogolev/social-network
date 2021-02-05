import {DialogsActionsType, DialogsPropsType} from "../types/entities";

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
        {id: 4, message: "Hi! It's good", userId: 3}
    ]
}

export const dialogsReducer = (state: DialogsPropsType = initialState, action: DialogsActionsType) => {
    switch (action.type) {
        case "ADD-MESSAGE": {
            const newMessage = {
                id: state.messageProps.length,
                message: action.text,
                userId: 5
            }
            state.messageProps = [...state.messageProps, newMessage]
            return {...state}
        }
        default:
            return state
    }
}
export const addMessageAC = (text: string) => {
    return {
        type: "ADD-MESSAGE",
        text: text
    } as const
}