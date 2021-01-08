import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {navReducer} from "./navReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";

const reducers = combineReducers({
    dialogs: dialogsReducer,
    posts: profileReducer,
    nav: navReducer,
    users: usersReducer,
    auth: authReducer
})

export type StateType = ReturnType<typeof reducers>

export const store = createStore(reducers)
//export type StoreType = typeof store