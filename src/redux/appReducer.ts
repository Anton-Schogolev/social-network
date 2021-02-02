import {ActionsTypes, AppStateType} from "../types/entities";
import {ThunkAction} from "redux-thunk";
import {StateType} from "./reduxStore"
import {FormAction} from "redux-form";
import {setAuth} from "./authReducer";

const initialState: AppStateType = {
    initialized: false
}
export type AppActionType = ReturnType<typeof setInitializedSuccess>

export const appReducer = (state = initialState, action: AppActionType): AppStateType => {
    switch (action.type) {
        case "INITIALIZED": {
            return {...state, initialized: true}
        }
        default:
            return state
    }
}
export const setInitializedSuccess = () => {
    return {
        type: "INITIALIZED"
    } as const
}
type ThunkType = ThunkAction<void, StateType, unknown, ActionsTypes | FormAction>;
// type ThunkDispatchType = ThunkDispatch<StateType, unknown, ActionsTypes | FormAction>;

export const initialize = (): ThunkType => (dispatch) => {
    dispatch(setAuth())
        .then(()=>dispatch(setInitializedSuccess()))
}
