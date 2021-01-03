import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {StateType} from "../../redux/reduxStore";
import {ProfileUserType} from "../../types/entities";

type AxiosType = {
    "aboutMe": string
    "contacts": {
        "facebook": string | null
        "website": string | null
        "vk": string | null
        "twitter": string | null
        "instagram": string | null
        "youtube": string | null
        "github": string | null
        "mainLink": string | null
    },
    "lookingForAJob": boolean
    "lookingForAJobDescription": string | null
    "fullName": string
    "userId": number
    "photos": {
        "small": string | null
        "large": string | null
    }
}
type MapStateToPropsType = ProfileUserType
type MapDispatchToPropsType = {
    setUserProfile: (user: ProfileUserType) => void
}


class ProfileContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {
    componentDidMount() {
        axios.get<AxiosType>(`https://social-network.samuraijs.com/api/1.0/profile/8104`)
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
            <Profile {...this.props}/>
        )
    }
}

const MapStateToProps = (state: StateType): MapStateToPropsType => ({...state.posts.userProfile})


export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(MapStateToProps, {setUserProfile})(ProfileContainer)