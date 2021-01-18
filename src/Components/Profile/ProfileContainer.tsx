import React from "react";
import {Profile} from "./Profile";
import {connect, ConnectedProps} from "react-redux";
import {putUserProfileStatus, setUserProfile, setUserProfileStatus} from "../../redux/profileReducer";
import {StateType} from "../../redux/reduxStore";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {Preloader} from "../common/Preloader";


// type MapStateToPropsType = {
//     userProfile: ProfileUserType
//     loggedUserId: number
// }
// type MapDispatchToPropsType = {
//     setUserProfile: (userId?: string) => void
//     setUserProfileStatus: (userId?: string) => void
// }


class ProfileContainer extends React.Component<PropsType & RouteComponentProps<{ userid?: string }>> {
    componentDidMount() {
        const userId = this.props.match.params.userid
        this.props.setUserProfile(userId)
        this.props.setUserProfileStatus(userId)
    }
    componentDidUpdate(prevProps: Readonly<PropsType & RouteComponentProps<{ userid?: string }>>) {
        if(prevProps.match.params.userid!==this.props.match.params.userid){
            const userId = this.props.match.params.userid
            this.props.setUserProfile(userId)
            this.props.setUserProfileStatus(userId)
        }
    }

    render() {
        if(!this.props.match.params.userid){
            this.props.setUserProfile("2")
            return <Redirect to={"/profile/2"}/>
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

const MapStateToProps = ({posts,auth}: StateType)/*: MapStateToPropsType*/ => ({
    userProfile: {...posts.userProfile},
    loggedUserId: auth.id,
    userStatus: posts.userStatus
})
const connector = connect(MapStateToProps, {setUserProfile, setUserProfileStatus, putUserProfileStatus})
type PropsType = ConnectedProps<typeof connector>

export default connector(withRouter(ProfileContainer))