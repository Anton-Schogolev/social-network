import React from "react";
import {connect} from "react-redux";
import { Redirect } from "react-router-dom";
import {StateType} from "../redux/reduxStore";

type MapStateToPropsType = {
    isAuth: boolean
}
const MapStateToProps = (state: StateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect<T>(Component: React.ComponentType<T>) {
    const Container:React.FC<MapStateToPropsType> = (props) => {
        const {isAuth, ...rest} = props
        if(!isAuth)
            return <Redirect to={"/login"}/>
        else return <Component {...rest as T}/>
    }
    return connect<MapStateToPropsType,{},T,StateType>(MapStateToProps,{})(Container)
}

