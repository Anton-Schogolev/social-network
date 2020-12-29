import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {postsReducer} from "./postsReducer";
import {navReducer} from "./navReducer";
import {usersReducer} from "./usersReducer";

const reducers = combineReducers({
    dialogs: dialogsReducer,
    posts: postsReducer,
    nav: navReducer,
    users: usersReducer
})

export type StateType = ReturnType<typeof reducers>

export const store = createStore(reducers)
//export type StoreType = typeof store