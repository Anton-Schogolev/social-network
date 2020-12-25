import {ActionsTypes, PostsPropsType} from "../types/entities";

const initialState: PostsPropsType = {
    postsArray: [
        {id: 0, ava: "https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg", text: "Hey! How are you?", amountOfLikes: 26},
        {id: 1, ava: "https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg", text: "It's my first post.", amountOfLikes: 14}
    ],
    newPost: ""
}

export const postsReducer = (state: PostsPropsType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST": {
            state.postsArray.unshift({
                id: state.postsArray.length,
                text: state.newPost,
                ava: "https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg",
                amountOfLikes: 0
            })
            return state
        }
        case "CHANGE-NEW-POST": {
            state.newPost = action.text
            return state
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