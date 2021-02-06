import {ActionsTypes, ProfilePropsType, ProfileUserType} from "../types/entities";
import {ThunkAction} from "redux-thunk";
import {StateType} from "./reduxStore";
import {ProfileAPI} from "../api/api";
import {v1} from "uuid";

const initialState: ProfilePropsType = {
    postsArray: [
        {
            id: v1(),
            ava: "https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg",
            text: "Hey! How are you?",
            amountOfLikes: 26
        },
        {
            id: v1(),
            ava: "https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg",
            text: "It's my first post.",
            amountOfLikes: 14
        }
    ],
    userProfile: {
        aboutMe: "",
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: "",
        userId: -1,
        photos: {
            small: "https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg",
            large: "https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg"
        }
    },
    userStatus: ""
}

export type ProfileActionsType = ReturnType<typeof addPostAC>
    | ReturnType<typeof deletePostAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setUserProfileStatusAC>

export const profileReducer = (state: ProfilePropsType = initialState, action: ProfileActionsType) => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost = {
                id: v1(),
                text: action.text,
                ava: "https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg",
                amountOfLikes: 0
            }
            return {...state, postsArray: [newPost, ...state.postsArray]}
        }
        case "DELETE-POST": {
            return {...state, postsArray: state.postsArray.filter(post => post.id !== action.id)}
        }
        case "SET_USER_PROFILE": {
            if (action.user)
                return {
                    ...state,
                    userProfile: {
                        ...action.user,
                        contacts: {...action.user.contacts},
                        photos: {...action.user.photos}
                    }
                }
            else return state
        }
        case "SET_USER_PROFILE_STATUS": {
            return {...state, userStatus: action.status}
        }
        default:
            return state
    }
}

export const addPostAC = (text: string) => {
    return {
        type: "ADD-POST",
        text: text
    } as const
}
export const deletePostAC = (id: string) => {
    return {
        type: "DELETE-POST",
        id
    } as const
}
// export const changeNewPostAC = (text: string) => {
//     return {
//         type: "CHANGE-NEW-POST",
//         text: text
//     } as const
// }
export const setUserProfileAC = (user: ProfileUserType) => {
    return {
        type: "SET_USER_PROFILE",
        user
    } as const
}
export const setUserProfileStatusAC = (status: string) => {
    return {
        type: "SET_USER_PROFILE_STATUS",
        status
    } as const
}

type ThunkType = ThunkAction<void, StateType, unknown, ActionsTypes>;
// type ThunkDispatchType = ThunkDispatch<StateType, unknown, ActionsTypes>;
export const setUserProfile = (userId: string): ThunkType => (dispatch) => {
    ProfileAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfileAC({
                    ...data,
                    photos: {
                        small: data.photos.small,
                        large: data.photos.large
                    }
                })
            )
        })
}
export const setUserProfileStatus = (userId: string): ThunkType => (dispatch) => {
    ProfileAPI.getStatus(userId)
        .then(response => {
            dispatch(setUserProfileStatusAC(response.data)
            )
        })
}
export const putUserProfileStatus = (status: string): ThunkType => (dispatch) => {
    ProfileAPI.putStatus(status)
        .then(response => {
            if(response.data.resultCode === 0)
            dispatch(setUserProfileStatusAC(status))
        })
}