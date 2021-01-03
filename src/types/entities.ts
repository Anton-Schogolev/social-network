import {addMessageAC, changeNewMessageAC} from "../redux/dialogsReducer";
import {addPostAC, changeNewPostAC, setUserProfile} from "../redux/profileReducer";
import {changePage, follow, setIsFetching, setTotalNumber, setUsers, unfollow} from "../redux/usersReducer";

export type PostType = {
    id: number
    text: string
    ava: string
    amountOfLikes: number
}
export type ProfileUserTypeWithNoNull = {
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
export type ProfileUserType = null | ProfileUserTypeWithNoNull
export type ProfilePropsType = {
    postsArray: Array<PostType>
    newPost: string
    userProfile: ProfileUserType
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
    isFetching: boolean
}
export type ActionsTypes = DialogsActionsType
    | ProfileActionsType
    | UsersActionsType
export type DialogsActionsType = ReturnType<typeof addMessageAC>
    | ReturnType<typeof changeNewMessageAC>
export type ProfileActionsType = ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewPostAC>
    | ReturnType<typeof setUserProfile>
export type UsersActionsType = ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof changePage>
    | ReturnType<typeof setTotalNumber>
    | ReturnType<typeof setIsFetching>