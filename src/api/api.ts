import axios from "axios";
import {ProfileUserType} from "../types/entities";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "568bef24-ce98-482a-a370-1dd23b640991"
    }
})

type GetUsersType = {
    "items": Array<{
        "name": string
        "id": number
        "photos": {
            "small": string | null
            "large": string | null
        },
        "status": string
        "followed": boolean
    }>

    "totalCount": number
    "error": null
}

type AuthGetType = {
    data: {
        "id": number
        "login": string
        "email": string
    }
    "messages":string[]
    "resultCode":number
}
type AuthPutType = {
    data: {}
    "messages":string[]
    "resultCode":number
}

export const UsersAPI = {
    getUsers: (pageSize: number, page: number) => instance.get<GetUsersType>(
            `users?count=${pageSize}&page=${page}`
        ).then(response => response.data),
    follow: (id: number) => instance.post(`follow/${id}`),
    unfollow: (id: number) => instance.delete(`follow/${id}`)
}

export const ProfileAPI = {
    getProfile: (userId?: string) => instance.get<ProfileUserType>(`profile/` + userId).then(response => response.data),
    getStatus: (userId?: string) => instance.get<string>(`profile/status/` + userId),
    putStatus: (status: string) => instance.put<AuthPutType>(`profile/status/`, {status: status})
}

export const AuthAPI = {
    getAuth: () => instance.get<AuthGetType>(`auth/me`).then(response => response.data)
}