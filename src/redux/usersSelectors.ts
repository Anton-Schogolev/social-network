import {StateType} from "./reduxStore";

export const usersArraySelector = (state: StateType) => state.users.users
export const usersDisButtonsSelector = (state: StateType) => state.users.buttonsDisabled
export const usersPageSelector = (state: StateType) => state.users.currentPage
export const usersIsFetchingSelector = (state: StateType) => state.users.isFetching
export const usersNumberOfPagesSelector = (state: StateType) => state.users.numberOfPages
export const usersPageSizeSelector = (state: StateType) => state.users.pageSize
export const usersTotalNumberSelector = (state: StateType) => state.users.totalNumber

export const usersSelector = (state: StateType) => state.users