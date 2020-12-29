import {postsReducer} from "./postsReducer";
import {navReducer} from "./navReducer";
import {dialogsReducer} from "./dialogsReducer";
import {ActionsTypes} from "../types/entities";
import {StateType} from "./reduxStore";

const ava = "https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg"


export type StoreType = {
    _state: any
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}


export const store: StoreType = {
    _state: {
        dialogs: {
            dialogsProps: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Den"},
                {id: 3, name: "Alex"},
                {id: 4, name: "Margo"},
                {id: 5, name: "Anton"},
                {id: 6, name: "John"}
            ],
            messageProps: [
                {id: 1, message: "Hi!", userId: 5},
                {id: 2, message: "How are you?", userId: 5},
                {id: 3, message: "How is your typeScript?", userId: 5},
                {id: 3, message: "Hi! It's good", userId: 3}
            ],
            newMessage: ""
        },
        posts: {
            postsArray: [
                {id: 0, ava: ava, text: "Hey! How are you?", amountOfLikes: 26},
                {id: 1, ava: ava, text: "It's my first post.", amountOfLikes: 14}
            ],
            newPost: ""
        },
        nav: {
            friends: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Den"},
                {id: 3, name: "Alex"}
            ]
        }
    },
    _callSubscriber: () => {
        console.log("subscriber called")
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.posts = postsReducer(this._state.posts, action)
        this._state.dialogs = dialogsReducer(this._state.dialogs, action)
        this._state.nav = navReducer(this._state.nav, action)
        this._callSubscriber()
    }
}

