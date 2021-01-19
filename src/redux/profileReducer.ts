import {ActionsTypes, ProfileActionsType, ProfilePropsType, ProfileUserType} from "../types/entities";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {StateType} from "./reduxStore";
import {ProfileAPI} from "../api/api";

const initialState: ProfilePropsType = {
    postsArray: [
        {
            id: 0,
            ava: "https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg",
            text: "Hey! How are you?",
            amountOfLikes: 26
        },
        {
            id: 1,
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

export const profileReducer = (state: ProfilePropsType = initialState, action: ProfileActionsType) => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost = {
                id: state.postsArray.length,
                text: action.text,
                ava: "https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg",
                amountOfLikes: 0
            }
            return {...state, postsArray: [newPost, ...state.postsArray]}
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
// export const changeNewPostAC = (text: string) => {
//     return {
//         type: "CHANGE-NEW-POST",
//         text: text
//     } as const
// }
export const setUserProfileAC = (user: ProfileUserType) => {
    return {
        type: "SET_USER_PROFILE",
        user: user
    } as const
}
export const setUserProfileStatusAC = (status: string) => {
    return {
        type: "SET_USER_PROFILE_STATUS",
        status
    } as const
}

type ThunkType = ThunkAction<void, StateType, unknown, ActionsTypes>;
type ThunkDispatchType = ThunkDispatch<StateType, unknown, ActionsTypes>;
export const setUserProfile = (userId?: string): ThunkType => (dispatch: ThunkDispatchType) => {
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
export const setUserProfileStatus = (userId?: string): ThunkType => (dispatch: ThunkDispatchType) => {
    ProfileAPI.getStatus(userId)
        .then(response => {
            dispatch(setUserProfileStatusAC(response.data)
            )
        })
}
export const putUserProfileStatus = (status: string): ThunkType => (dispatch: ThunkDispatchType) => {
    ProfileAPI.putStatus(status)
        .then(response => {
            if(response.data.resultCode === 0)
            dispatch(setUserProfileStatusAC(status))
        })
}