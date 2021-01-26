import {ActionsTypes, AuthActionsType, AuthLoginType, AuthPropsType} from "../types/entities";
import {AuthAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {StateType} from "./reduxStore"
import {FormAction, stopSubmit} from "redux-form";

const initialState: AuthPropsType = {
    id: -1,
    email: null,
    login: "",
    isAuth: false
}

export const authReducer = (state: AuthPropsType = initialState, action: AuthActionsType): AuthPropsType => {
    switch (action.type) {
        case "SET_AUTH": {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}
export const setAuthAC = (id: number, email: string, login: string, isAuth: boolean) => {
    return {
        type: "SET_AUTH",
        payload: {id, email, login, isAuth}
    } as const
}
type ThunkType = ThunkAction<void, StateType, unknown, ActionsTypes | FormAction>;
type ThunkDispatchType = ThunkDispatch<StateType, unknown, ActionsTypes | FormAction>;
export const setAuth = (): ThunkAction<Promise<void>, StateType, unknown, ActionsTypes | FormAction> => (dispatch) => {
    return AuthAPI.getAuth().then(data => {
        if (data.resultCode === 0)
            dispatch(setAuthAC(data.data.id, data.data.email, data.data.login, true))
        else
            dispatch(setAuthAC(-1, "", "", false))
    })
}
export const login = (loginData: AuthLoginType): ThunkType => (dispatch: ThunkDispatchType) => {
    AuthAPI.login(loginData).then(response => {
        if(response.data.resultCode === 0)
            dispatch(setAuth())
        else
            dispatch(stopSubmit("login", {_error: response.data.messages[0]}))
    })
}
export const logout = (): ThunkType => (dispatch: ThunkDispatchType) => {
    AuthAPI.logout().then(response => {
        if(response.data.resultCode === 0)
            dispatch(setAuth())
    })
}