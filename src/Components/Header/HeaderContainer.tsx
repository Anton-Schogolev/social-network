import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {StateType} from "../../redux/reduxStore";
import {logout} from "../../redux/authReducer";
import {AuthPropsType} from "../../types/entities";
import {authSelector} from "../../redux/authSelectors";

type MapStateToPropsType = AuthPropsType
type MapDispatchToPropsType = {
    logout: () => void
}


class HeaderContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType>{
    // componentDidMount() {
    //         this.props.setAuth()
    // }

    render() {
        return (
            <Header login={this.props.login} logout={this.props.logout}
                    email={this.props.email} id={this.props.id}
                    isAuth={this.props.isAuth}/>
        )
    }
}

const MapStateToProps = (state: StateType): MapStateToPropsType => ({...authSelector(state)})


export default connect(MapStateToProps,{logout})(HeaderContainer)