import {addMessageAC, changeNewMessageAC} from "../redux/dialogsReducer";
import {addPostAC, changeNewPostAC} from "../redux/postsReducer";

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