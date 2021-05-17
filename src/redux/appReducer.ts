import {ActionsTypes, AppStateType} from "../types/entities";
import {ThunkAction} from "redux-thunk";
import {StateType} from "./reduxStore"
import {FormAction} from "redux-form";
import {setAuth} from "./authReducer";
import {Action} from "redux";

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
type ThunkType<T extends Action = ActionsTypes | FormAction> = ThunkAction<void, StateType, unknown, T>;
// type ThunkDispatchType = ThunkDispatch<StateType, unknown, ActionsTypes | FormAction>;

export const initialize = (): ThunkType => async (dispatch) => {
    await dispatch(setAuth())
    dispatch(setInitializedSuccess())
}

// const useSelector = (selector) => {
//     const store = useReduxContext()
//     return selector(store.getState())
// }