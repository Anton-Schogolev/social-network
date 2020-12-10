let rerenderFullTree = (state: AppPropsType) => {
    console.log("rerender error")
}

export type PostType = {
    id: number
    text: string
    ava: string
    amountOfLikes: number
}
export type PostsPropsType = {
    postsArray: Array<PostType>
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
}


export type NavType = {
    friends: Array<DialogsDataType>
}


export type AppPropsType = {
    dialogs: DialogsPropsType
    posts: PostsPropsType
    nav: NavType
}
export type StoreType = {
    _state: AppPropsType
    _callSubscriber: () => void
    addMessage: (text: string) => void
    addPost: (text: string) => void
    subscribe: (observer: () => void) => void
}


const addPost = (text: string) => {
    state.posts.postsArray.unshift({
        id: state.posts.postsArray.length,
        text: text,
        ava: ava,
        amountOfLikes: 0
    })
    rerenderFullTree(state)
}
const addMessage = (text: string) => {
    state.dialogs.messageProps.push({
        id: state.dialogs.messageProps.length,
        message: text,
        userId: 5
    })
    rerenderFullTree(state)
}


/*const dialogsData: Array<DialogsDataType> = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Den"},
    {id: 3, name: "Alex"},
    {id: 4, name: "Margo"},
    {id: 5, name: "Anton"},
    {id: 6, name: "John"}
]*/
/*const messageData: Array<MessageDataType> = [
    {id: 1, message: "Hi!", userId: 5},
    {id: 2, message: "How are you?", userId: 5},
    {id: 3, message: "How is your typeScript?", userId: 5},
    {id: 3, message: "Hi! It's good", userId: 3}
]*/
/*const postData: PostsPropsType = {
    postsArray: [
        {id: 0, ava: ava, text: "Hey! How are you?", amountOfLikes: 26},
        {id: 1, ava: ava, text: "It's my first post.", amountOfLikes: 14}
    ],
    callback: addPost
}*/
// let id = [1, 2, 3]
// let friends = dialogsData.filter((fr) => id.includes(fr.id))
/*const friendProps: NavType = {
    friends: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Den"},
        {id: 3, name: "Alex"}
    ]
}*/
/*const dialogProps: DialogsPropsType = {
    dialogsProps: dialogsData,
    messageProps: messageData,
    addMessage: addMessage
}*/
/*const state: AppPropsType = {
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
        addMessage: addMessage
    },
    posts: {
        postsArray: [
            {id: 0, ava: ava, text: "Hey! How are you?", amountOfLikes: 26},
            {id: 1, ava: ava, text: "It's my first post.", amountOfLikes: 14}
        ],
        callback: addPost
    },
    nav: {
        friends: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Den"},
            {id: 3, name: "Alex"}
        ]
    }
}*/
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
            ]
        },
        posts: {
            postsArray: [
                {id: 0, ava: ava, text: "Hey! How are you?", amountOfLikes: 26},
                {id: 1, ava: ava, text: "It's my first post.", amountOfLikes: 14}
            ]
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
    addMessage: (text) => {
        this._state.dialogs.messageProps.push({
            id: this._state.dialogs.messageProps.length,
            message: text,
            userId: 5
        })
        this._callSubscriber()
    },
    addPost: (text) => {
        this._state.posts.postsArray.unshift({
            id: this._state.posts.postsArray.length,
            text: text,
            ava: ava,
            amountOfLikes: 0
        })
        this._callSubscriber()
    },
    subscribe: (observer) => {
        this._callSubscriber=observer
    }
}
export const subscribe = (observer: (state: AppPropsType) => void) => {
    rerenderFullTree = observer
}
