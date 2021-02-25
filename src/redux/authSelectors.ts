import {StateType} from "./reduxStore";

export const authedIdSelector = (state: StateType) => state.auth.id
export const authedEmailSelector = (state: StateType) => state.auth.email
export const isAuthSelector = (state: StateType) => state.auth.isAuth
export const authedLoginSelector = (state: StateType) => state.auth.login

export const authSelector = (state: StateType) => state.auth