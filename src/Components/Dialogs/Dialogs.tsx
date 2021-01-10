import React from "react";
import s from "./Dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "../../types/entities";
import NewMessage from "./NewMessage/NewMessage";
import {StateType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStateToPropsType = { state: DialogsPropsType }

const Dialogs: React.FC<MapStateToPropsType> = ({state}) => {
    const dialogMap = state.dialogsProps.map(x => {
        return <Dialog key={x.id} id={x.id} name={x.name}/>
    })
    const messageMap = state.messageProps.map(x => {
        const name = state.dialogsProps.find(y => y.id === x.userId)
        if (name !== undefined)
            return (
                <Message key={x.id} id={x.id} name={name.name} message={x.message} userID={x.userId}/>)
        else return undefined
    })
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogMap}
            </div>
            <div className={s.messages}>
                <div className={s.allMassages}>{messageMap}</div>
                <NewMessage/>

            </div>
        </div>
    )
}

const mapStateToProps = (state: StateType): MapStateToPropsType => ({state: state.dialogs})

export default compose(
    connect(mapStateToProps, {}),
    withAuthRedirect
)(Dialogs)