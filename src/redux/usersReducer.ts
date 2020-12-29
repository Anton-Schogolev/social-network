import {ActionsTypes, UsersPropsType} from "../types/entities";

const initialState: UsersPropsType = {
    users: [
        {
            id: 1,
            name: "Dimych",
            ava: "https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg",
            status: "I am boss",
            followed: false,
            address: {
                city: "Minsk",
                country: "Belarus"
            }
        },
        {
            id: 2,
            name: "Den",
            ava: "https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg",
            status: "TypeScript is awesome!",
            followed: false,
            address: {
                city: "Moscow",
                country: "Russia"
            }
        }
    ]
}

export const usersReducer = (state: UsersPropsType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(us => us.id === action.userId ? {...us, followed: true} : us)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(us => us.id === action.userId ? {...us, followed: false} : us)
            }
        }
        default:
            return state
    }
}
export const followAC = (id: number) => {
    return {
        type: "FOLLOW",
        userId: id
    } as const
}
export const unfollowAC = (id: number) => {
    return {
        type: "UNFOLLOW",
        userId: id
    } as const
}