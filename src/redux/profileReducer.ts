import {ProfileActionsType, ProfilePropsType, ProfileUserType} from "../types/entities";

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
        aboutMe: "я круто чувак 1001%",
        contacts: {
            facebook: "facebook.com",
            website: null,
            vk: "vk.com/dimych",
            twitter: "https://twitter.com/@sdf",
            instagram: "instagra.com/sds",
            youtube: null,
            github: "github.com",
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: "не ищу, а дурачусь",
        fullName: "samurai dimych",
        userId: 2,
        photos: {
            small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
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
            return {
                ...state,
                userProfile: {
                    ...action.user,
                    contacts: {...action.user.contacts},
                    photos: {...action.user.photos}
                }
            }
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
export const setUserProfile = (user: ProfileUserType) => {
    return {
        type: "SET_USER_PROFILE",
        user: user
    } as const
}