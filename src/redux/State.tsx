/*let rerenderFullTree = (state: AppPropsType) => {
    console.log("rerender error")
}*/

export type PostType = {
    id: number
    text: string
    ava: string
    amountOfLikes: number
}
export type PostsPropsType = {
    postsArray: Array<PostType>
    newPost: string
}
const ava = "https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg"


export type DialogsDataType = {
    id: number
    name: string
}
export type MessageDataType = {
    id: number
    message: string
    userId: number
}
export type DialogsPropsType = {
    dialogsProps: Array<DialogsDataType>
    messageProps: Array<MessageDataType>
    newMessage: string
}


export type NavType = {
    friends: Array<DialogsDataType>
}


export type StateType = {
    dialogs: DialogsPropsType
    posts: PostsPropsType
    nav: NavType
}

export type ActionsTypes =
    ReturnType<typeof addMessageAC> |
    ReturnType<typeof changeNewMessageAC> |
    ReturnType<typeof addPostAC> |
    ReturnType<typeof changeNewPostAC>

export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    _addMessage: () => void
    _changeNewMessage: (text: string) => void
    _addPost: () => void
    _changeNewPost: (text: string) => void
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

    _addMessage() {
        this._state.dialogs.messageProps.push({
            id: this._state.dialogs.messageProps.length,
            message: this._state.dialogs.newMessage,
            userId: 5
        })
        this._callSubscriber()
    },
    _changeNewMessage(text) {
        this._state.dialogs.newMessage = text
        this._callSubscriber()
    },
    _addPost() {
        this._state.posts.postsArray.unshift({
            id: this._state.posts.postsArray.length,
            text: this._state.posts.newPost,
            ava: ava,
            amountOfLikes: 0
        })
        this._callSubscriber()
    },
    _changeNewPost(text) {
        this._state.posts.newPost = text
        this._callSubscriber()
    },
    dispatch(action) {
        if (action.type === "ADD-MESSAGE") {
            this._addMessage()
        }else if (action.type === "CHANGE-NEW-MESSAGE") {
            this._changeNewMessage(action.text)
        } else if (action.type === "ADD-POST") {
            this._addPost()
        } else if (action.type === "CHANGE-NEW-POST") {
            this._changeNewPost(action.text)
        }
    }
}

export const addPostAC = () => {
    return {
        type: "ADD-POST",
    } as const
}
export const changeNewPostAC = (text: string) => {
    return {
        type: "CHANGE-NEW-POST",
        text: text
    } as const
}
export const addMessageAC = () => {
    return {
        type: "ADD-MESSAGE"
    } as const
}
export const changeNewMessageAC = (text: string) => {
    return {
        type: "CHANGE-NEW-MESSAGE",
        text: text
    } as const
}