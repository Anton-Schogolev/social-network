import {UsersActionsType, UsersPropsType, UserType} from "../types/entities";

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
        /*{
            id: 2,
            name: "Den",
            ava: "https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg",
            status: "TypeScript is awesome!",
            followed: false,
            address: {
                city: "Moscow",
                country: "Russia"
            }
        }*/
    ],
    pageSize: 5,
    currentPage: 1,
    totalNumber: 1,
    isFetching: false
}

export const usersReducer = (state: UsersPropsType = initialState, action: UsersActionsType): UsersPropsType => {
    switch (action.type) {
        case "FOLLOW": {
            return {...state, users: state.users.map(us => us.id === action.userId ? {...us, followed: true} : us)}
        }
        case "UNFOLLOW": {
            return {...state, users: state.users.map(us => us.id === action.userId ? {...us, followed: false} : us)}
        }
        case "SET_USERS": {
            return {...state, users: [...action.users]}
        }
        case "CHANGE_PAGE": {
            return {...state, currentPage: action.page}
        }
        case "SET_TOTAL_NUMBER": {
            return {...state, totalNumber: action.totalNumber}
        }
        case "SET_IS_FETCHING": {
            return {...state, isFetching: action.isFetching}
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
export const setUsersAC = (users: UserType[]) => {
    return {
        type: "SET_USERS",
        users: users
    } as const
}
export const changePageAC = (page: number) => {
    return {
        type: "CHANGE_PAGE",
        page: page
    } as const
}
export const setTotalNumberAC = (totalNumber: number) => {
    return {
        type: "SET_TOTAL_NUMBER",
        totalNumber: totalNumber
    } as const
}
export const setIsFetchingAC = (isFetching: boolean) => {
    return {
        type: "SET_IS_FETCHING",
        isFetching: isFetching
    } as const
}