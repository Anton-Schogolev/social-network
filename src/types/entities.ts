import {addMessageAC, changeNewMessageAC} from "../redux/dialogsReducer";
import {addPostAC, changeNewPostAC} from "../redux/postsReducer";
import {followAC, setUsersAC, unfollowAC} from "../redux/usersReducer";

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
export type AddressType = {
    city?: string
    country: string
}
export type UserType = {
    id: number
    name: string
    status: string
    ava: string
    followed: boolean
    address: AddressType
}
export type UsersPropsType = {
    users: UserType[]
}
export type ActionsTypes = DialogsActionsType
    | ProfileActionsType
    | UsersActionsType
export type DialogsActionsType = ReturnType<typeof addMessageAC>
    | ReturnType<typeof changeNewMessageAC>
export type ProfileActionsType = ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewPostAC>
export type UsersActionsType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>