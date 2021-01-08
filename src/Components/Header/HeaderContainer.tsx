import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {StateType} from "../../redux/reduxStore";
import {setAuth} from "../../redux/authReducer";
import {AuthPropsType} from "../../types/entities";
import {AuthAPI} from "../../api/api";

type MapStateToPropsType = AuthPropsType
type MapDispatchToPropsType = {
    setAuth: (id: number, email: string, login: string) => void
}


class HeaderContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType>{
    componentDidMount() {
        AuthAPI.getAuth().then(data => {
            this.props.setAuth(data.data.id, data.data.email, data.data.login)
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