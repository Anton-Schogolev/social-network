import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {StateType} from "../../redux/reduxStore";
import {ProfileUserType, ProfileUserTypeWithNoNull} from "../../types/entities";
import {RouteComponentProps, withRouter } from "react-router-dom";


type MapStateToPropsType = {
    userProfile: ProfileUserType
}
type MapDispatchToPropsType = {
    setUserProfile: (user: ProfileUserType) => void
}


class ProfileContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<{userid?:string}>> {
    componentDidMount() {
        const userId = this.props.match.params.userid
        axios.get<ProfileUserTypeWithNoNull>(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile({
                    ...response.data,
                    photos: {
                        small: response.data.photos.small,
                        large: response.data.photos.large
                    }
                })
            })
    }

    render() {
        return (
            <Profile userProfile={this.props.userProfile}/>
        )
    }
}

const MapStateToProps = (state: StateType): MapStateToPropsType => ({
    userProfile: state.posts.userProfile ? {...state.posts.userProfile} : null
})

const ComponentWithRouter = withRouter(ProfileContainer)
export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(
    MapStateToProps, {setUserProfile})(withRouter(ProfileContainer))