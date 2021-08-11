import {ActionsTypes, UsersStateType, UserType} from "../types/entities";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {StateType} from "./reduxStore";
import {UsersAPI} from "../api/api";
import {batch} from "react-redux";

const initialState: UsersStateType = {
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
    | ReturnType<typeof updateUsersState>

export const usersReducer = (state: UsersStateType = initialState, action: UsersActionsType): UsersStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {...state, users: state.users.map(us => us.id === action.userId ? {...us, followed: true} : us)}
        }
        case "UNFOLLOW": {
            return {...state, users: state.users.map(us => us.id === action.userId ? {...us, followed: false} : us)}
        }
        case "users/UPDATE_STATE":
            return {...state, ...action.state}
        case "SET_USERS":
        case "CHANGE_PAGE":
        case "SET_TOTAL_NUMBER":
        case "SET_NUMBER_OF_PAGES":
        case "SET_IS_FETCHING": {
            return {...state, ...action.payload}
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
// type MakeObjectKeysOptional<T extends Object> = {
//     [key in keyof T]?: T[key]
// }
type UsersStateOptionalType = {
    [key in keyof UsersStateType]?: UsersStateType[key]
}

export const updateUsersState = (state: UsersStateOptionalType) => ({
    type: "users/UPDATE_STATE",
    state
} as const)

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
        payload: {users}
    } as const
}
export const changePage = (page: number) => {
    return {
        type: "CHANGE_PAGE",
        payload: {currentPage: page}
    } as const
}
export const setTotalNumber = (totalNumber: number) => {
    return {
        type: "SET_TOTAL_NUMBER",
        payload: {totalNumber}
    } as const
}
export const setNumberOfPages = (numberOfPages: number) => {
    return {
        type: "SET_NUMBER_OF_PAGES",
        payload: {numberOfPages}
    } as const
}
export const setIsFetching = (isFetching: boolean) => {
    return {
        type: "SET_IS_FETCHING",
        payload: {isFetching}
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
    // 1
    batch(()=> {
        dispatch(changePage(page))
        dispatch(setIsFetching(true))
    })
    // 2
    // dispatch(updateUsersState({currentPage: page, isFetching: true}))

    const data = await UsersAPI.getUsers(pageSize, page)
    // 1
    batch(()=> {
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
    })
    // 2
    // dispatch(updateUsersState({
    //     isFetching: false,
    //     totalNumber: data.totalCount,
    //     numberOfPages: Math.ceil(data.totalCount / pageSize),
    //     users: data.items.map(it => ({
    //         id: it.id,
    //         name: it.name,
    //         status: it.status,
    //         photos: {
    //             small: it.photos.small ? it.photos.small : "https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg",
    //             large: it.photos.large
    //         },
    //         followed: it.followed,
    //         address: {country: "Belarus"}
    //     }))
    // }))
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
