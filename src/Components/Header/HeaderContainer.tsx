import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {StateType} from "../../redux/reduxStore";
import {setAuth} from "../../redux/authReducer";
import {AuthPropsType} from "../../types/entities";
import axios from "axios";

type MapStateToPropsType = AuthPropsType
type MapDispatchToPropsType = {
    setAuth: (id: number, email: string, login: string) => void
}

type AxiosType = {
    "id": number
    "login": string
    "email": string
}

class HeaderContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType>{
    componentDidMount() {
        axios.get<{data: AxiosType}>("https://social-network.samuraijs.com/api/1.0/auth/me", {withCredentials: true}).then(response => {
            debugger
            this.props.setAuth(response.data.data.id, response.data.data.email, response.data.data.login)
        })
    }

    render() {
        return (
            <Header login={this.props.login} email={this.props.email} id={this.props.id}/>
        )
    }
}

const MapStateToProps = (state: StateType): MapStateToPropsType => ({...state.auth})


export default connect(MapStateToProps,{setAuth})(HeaderContainer)