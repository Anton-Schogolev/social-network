import React from "react";
import s from "./Preloader.module.css"

export const Preloader = () => {
    return <div className={s.container}><img className={s.preloader} src={"https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"}
                     alt={"loading"}/>
    </div>
}