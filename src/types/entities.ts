import {addMessageAC} from "../redux/dialogsReducer";
import {addPostAC, setUserProfileAC, setUserProfileStatusAC} from "../redux/profileReducer";
import {UsersActionsType} from "../redux/usersReducer";
import {setAuthAC} from "../redux/authReducer";

export type PostType = {
    id: number
    text: string
    ava: string
    amountOfLikes: number
}
export type ProfileUserType = {
    "aboutMe": string
    "contacts": {
        "facebook": string | null
        "website": string | null
        "vk": string | null
        "twitter": string | null
        "instagram": string | null
        "youtube": string | null
        "github": string | null
        "mainLink": string | null
    },
    "lookingForAJob": boolean
    "lookingForAJobDescription": string | null
    "fullName": string
    "userId": number
    "photos": {
        "small": string | null
        "large": string | null
    }
}
export type ProfilePropsType = {
    postsArray: Array<PostType>
    userProfile: ProfileUserType
    userStatus: string
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
    photos: {
        small: string
        large: string | null
    }
    followed: boolean
    address: AddressType
}
export type UsersPropsType = {
    users: UserType[]
    currentPage: number
    pageSize: number
    totalNumber: number
    numberOfPages: number
    isFetching: boolean
    buttonsDisabled: number[]
}
export type AuthPropsType = {
    id: number
    email: null | string
    login: string
    isAuth: boolean
}
export type AuthLoginType = {
    email: string
    password: string
    rememberMe: boolean
}
export type ActionsTypes = DialogsActionsType
    | ProfileActionsType
    | UsersActionsType
    | AuthActionsType
export type DialogsActionsType = ReturnType<typeof addMessageAC>
export type ProfileActionsType = ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setUserProfileStatusAC>
export type AuthActionsType = ReturnType<typeof setAuthAC>