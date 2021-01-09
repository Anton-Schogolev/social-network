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
    newPost: "",
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
    }
}

export const profileReducer = (state: ProfilePropsType = initialState, action: ProfileActionsType) => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost = {
                id: state.postsArray.length,
                text: state.newPost,
                ava: "https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg",
                amountOfLikes: 0
            }
            return {...state, postsArray: [newPost, ...state.postsArray]}
        }
        case "CHANGE-NEW-POST": {
            return {...state, newPost: action.text}
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
        default:
            return state
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
export const setUserProfileAC = (user: ProfileUserType) => {
    return {
        type: "SET_USER_PROFILE",
        user: user
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