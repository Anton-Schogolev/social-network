import {ActionsTypes, AuthActionsType, AuthLoginType, AuthPropsType} from "../types/entities";
import {AuthAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {StateType} from "./reduxStore"

const initialState: AuthPropsType = {
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
export const setAuthAC = (id: number, email: string, login: string) => {
    return {
        type: "SET_AUTH",
        data: {id, email, login}
    } as const
}
type ThunkType = ThunkAction<void, StateType, unknown, ActionsTypes>;
type ThunkDispatchType = ThunkDispatch<StateType, unknown, ActionsTypes>;
export const setAuth = (): ThunkType => (dispatch: ThunkDispatchType) => {
    AuthAPI.getAuth().then(data => {
        if (data.resultCode === 0)
            dispatch(setAuthAC(data.data.id, data.data.email, data.data.login))
    })
}
export const login = (loginData: AuthLoginType): ThunkType => (dispatch: ThunkDispatchType) => {
    AuthAPI.login(loginData).then(response => {
        if(response.data.resultCode === 0)
            dispatch(setAuth())
    })
}