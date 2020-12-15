import {ActionsTypes, PostsPropsType} from "./State";

export const postsReducer = (state: PostsPropsType, action: ActionsTypes) => {
    if (action.type === "ADD-POST") {
        state.postsArray.unshift({
            id: state.postsArray.length,
            text: state.newPost,
            ava: "https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg",
            amountOfLikes: 0
        })
    } else if (action.type === "CHANGE-NEW-POST") {
        state.newPost = action.text
    }
    return state
}