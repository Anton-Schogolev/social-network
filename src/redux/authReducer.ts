import {AuthActionsType, AuthPropsType} from "../types/entities";

const initialState: AuthPropsType  = {
    id: -1,
    email: null,
    login: "",
    isAuth: false
}

export const authReducer = (state: AuthPropsType = initialState, action: AuthActionsType): AuthPropsType => {
    switch (action.type) {
        case "SET_AUTH": {
            return {...state, ...action.data, isAuth: true}
        }
        default:
            return state
    }
}
export const setAuth = (id: number, email: string, login: string) => {
    return {
        type: "SET_AUTH",
        data: {id, email, login}
    } as const
}