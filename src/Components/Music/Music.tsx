import React from "react";
import {Accordion} from "./Kabzda/Accordion";
/*.on {
    border: black solid 1px;
}

.on.active {
    background: #2fee2f;
    border: none;
}

.off {
    border: black solid 1px;
}

.off.active {
    border: none;
    background: #dd3333;
}

.diode.on {
    background: #2fee2f;
}

.diode {
    height: 10px;
    width: 10px;
    align-self: center;
    border: none;
    border-radius: 100%;
    background: #dd3333;
}*/
export function Music() {
    // let [onOff,setOnOff]=useState<boolean>(true)
    return <>
        <Accordion/>
        {/*<div className={s.cont}>
            <div onClick={()=>setOnOff(true)} className={`${s.on} ${onOff&&s.active}`}>On</div>
            <div onClick={()=>setOnOff(false)} className={`${s.off} ${!onOff&&s.active}`}>Off</div>
            <div className={`${s.diode} ${onOff&&s.on}`} />
        </div>*/}
    </>
}