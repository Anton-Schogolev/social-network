import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {navReducer} from "./navReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {appReducer} from "./appReducer";

const reducers = combineReducers({
    app: appReducer,
    dialogs: dialogsReducer,
    posts: profileReducer,
    nav: navReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer
})

export type StateType = ReturnType<typeof reducers>

export const store = createStore(reducers, applyMiddleware(thunk))
//export type StoreType = typeof store

