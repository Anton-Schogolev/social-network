import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {postsReducer} from "./postsReducer";
import {navReducer} from "./navReducer";

const reducers = combineReducers({
    dialogs: dialogsReducer,
    posts: postsReducer,
    nav: navReducer
})

export const store = createStore(reducers)