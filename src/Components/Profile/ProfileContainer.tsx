import React from "react";
import {Profile} from "./Profile";
import {connect, ConnectedProps} from "react-redux";
import {putUserProfileStatus, setUserProfile, setUserProfileStatus} from "../../redux/profileReducer";
import {StateType} from "../../redux/reduxStore";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {Preloader} from "../common/Preloader";




class ProfileContainer extends React.Component<PropsType & RouteComponentProps<{ userid?: string }>> {
    componentDidMount() {
        const userId = this.props.match.params.userid
        if(userId) {
            this.props.setUserProfile(userId)
            this.props.setUserProfileStatus(userId)
        }
    }
    componentDidUpdate(prevProps: Readonly<PropsType & RouteComponentProps<{ userid?: string }>>) {
        if(prevProps.match.params.userid!==this.props.match.params.userid){
            const userId = this.props.match.params.userid
            if(userId) {
                this.props.setUserProfile(userId)
                this.props.setUserProfileStatus(userId)
            }
        }
    }

    render() {
        if(!this.props.match.params.userid && this.props.isAuth){
            return <Redirect to={"/profile/" + this.props.loggedUserId}/>
        }
        else if(!this.props.match.params.userid){
            return <Redirect to={"/login"}/>
        }
        if (this.props.userProfile.userId === Number(this.props.match.params.userid))
            return (
                <Profile
                    userProfile={this.props.userProfile}
                    userStatus={this.props.userStatus}
                    isHisProfile={this.props.userProfile.userId === this.props.loggedUserId}
                    putUserProfileStatus={this.props.putUserProfileStatus}
                />
            )
        else
            return <Preloader/>
    }
}

const MapStateToProps = ({posts,auth}: StateType) => ({
    userProfile: {...posts.userProfile},
    loggedUserId: auth.id,
    isAuth: auth.isAuth,
    userStatus: posts.userStatus
})
const connector = connect(MapStateToProps, {setUserProfile, setUserProfileStatus, putUserProfileStatus})
type PropsType = ConnectedProps<typeof connector>

export default connector(withRouter(ProfileContainer))
/*
//@ts-ignore
const connect = (mstp, mdtp) => {
    //@ts-ignore
    return (Component) => {
        return <Context.consumer>
            <Component {...mstp(store.getState())} {...mdtp(store.dispatch)}/>
        </Context.consumer>
    }
}*/
