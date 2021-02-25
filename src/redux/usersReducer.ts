import {ActionsTypes, UsersPropsType, UserType} from "../types/entities";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {StateType} from "./reduxStore";
import {UsersAPI} from "../api/api";

const initialState: UsersPropsType = {
    users: [
        {
            id: 1,
            name: "",
            photos: {
                small: "https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg",
                large: null
            },
            status: "",
            followed: false,
            address: {
                city: "",
                country: ""
            }
        }
    ],
    pageSize: 10,
    currentPage: 1,
    totalNumber: 1,
    numberOfPages: 1,
    isFetching: false,
    buttonsDisabled: []
}

export type UsersActionsType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof changePage>
    | ReturnType<typeof setTotalNumber>
    | ReturnType<typeof setNumberOfPages>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof toggleButtonDisabled>

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
        case "SET_NUMBER_OF_PAGES": {
            return {...state, numberOfPages: action.numberOfPages}
        }
        case "SET_IS_FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "TOGGLE_BUTTON_DISABLED": {
            if (state.buttonsDisabled.some(id => id === action.id))
                return {
                    ...state,
                    buttonsDisabled: state.buttonsDisabled.filter(id => id !== action.id)
                }
            else return {...state, buttonsDisabled: [...state.buttonsDisabled, action.id]}
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
export const setUsers = (users: UserType[]) => {
    return {
        type: "SET_USERS",
        users: users
    } as const
}
export const changePage = (page: number) => {
    return {
        type: "CHANGE_PAGE",
        page: page
    } as const
}
export const setTotalNumber = (totalNumber: number) => {
    return {
        type: "SET_TOTAL_NUMBER",
        totalNumber: totalNumber
    } as const
}
export const setNumberOfPages = (numberOfPages: number) => {
    return {
        type: "SET_NUMBER_OF_PAGES",
        numberOfPages
    } as const
}
export const setIsFetching = (isFetching: boolean) => {
    return {
        type: "SET_IS_FETCHING",
        isFetching: isFetching
    } as const
}
export const toggleButtonDisabled = (id: number) => {
    return {
        type: "TOGGLE_BUTTON_DISABLED",
        id
    } as const
}

type ThunkType = ThunkAction<void, StateType, unknown, ActionsTypes>;
type ThunkDispatchType = ThunkDispatch<StateType, unknown, ActionsTypes>;
export const getUsers = (page: number, pageSize: number): ThunkType => async (dispatch: ThunkDispatchType) => {
    dispatch(changePage(page))
    dispatch(setIsFetching(true))
    const data = await UsersAPI.getUsers(pageSize, page)
    dispatch(setIsFetching(false))
    dispatch(setTotalNumber(data.totalCount))
    dispatch(setNumberOfPages(Math.ceil(data.totalCount / pageSize)))
    dispatch(setUsers(data.items.map(it => ({
        id: it.id,
        name: it.name,
        status: it.status,
        photos: {
            small: it.photos.small ? it.photos.small : "https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg",
            large: it.photos.large
        },
        followed: it.followed,
        address: {country: "Belarus"}
    }))))
}
export const follow = (userId: number): ThunkType => async (dispatch: ThunkDispatchType) => {
    dispatch(toggleButtonDisabled(userId))
    const response = await UsersAPI.follow(userId)
    dispatch(toggleButtonDisabled(userId))
    if (response.status === 200)
        dispatch(followAC(userId))
}
export const unfollow = (userId: number): ThunkType => async (dispatch: ThunkDispatchType) => {
    dispatch(toggleButtonDisabled(userId))
    const response = await UsersAPI.unfollow(userId)
    dispatch(toggleButtonDisabled(userId))
    if (response.status === 200)
        dispatch(unfollowAC(userId))
}