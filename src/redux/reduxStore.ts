import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {postsReducer} from "./postsReducer";
import {navReducer} from "./navReducer";

const reducers = combineReducers({
    dialogs: dialogsReducer,
    posts: postsReducer,
    nav: navReducer
})

export type StateType = ReturnType<typeof reducers>

export const store = createStore(reducers)
//export type StoreType = typeof store