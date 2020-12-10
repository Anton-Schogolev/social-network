import s from "./User.module.css";
import React from "react";
// import {PostType} from "../../../redux/State";

export function User() {
    // let [onOff,setOnOff]=useState<boolean>(true)
    return <div className={s.user}>
        <img src={"https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg"} className={s.ava} alt={""}/>
        <div>
            <b>name</b>
            <p>description</p>
            {/*<div className={s.cont}>*/}
            {/*    <div onClick={()=>setOnOff(true)} className={`${s.on} ${onOff&&s.active}`}>On</div>*/}
            {/*    <div onClick={()=>setOnOff(false)} className={`${s.off} ${!onOff&&s.active}`}>Off</div>*/}
            {/*    <div className={`${s.diode} ${onOff&&s.on}`} />*/}
            {/*</div>*/}
        </div>
    </div>;
}