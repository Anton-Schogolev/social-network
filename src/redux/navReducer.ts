import {ActionsTypes, NavType} from "../types/entities";

const initialState: NavType = {
    friends: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Den"},
        {id: 3, name: "Alex"}
    ]
}

export const navReducer = (state: NavType = initialState, action: ActionsTypes) => {
    return state
}