import React from "react";

type PropsType = {
    bold: boolean
    onStarClick: (n: number) => void
    id: number
}

export function Star(props: PropsType) {
    const starDraw = () => {
        if (props.bold)
            return <b>
                <span onClick={() => props.onStarClick(props.id - 1)}>
                    S
                </span>
                <span onClick={() => props.onStarClick(props.id)}>
                    tar </span>
            </b>
        else {
            return <><span onClick={() => props.onStarClick(props.id - 1)}>
                    S
                </span>
                <span onClick={(e) => {
                    props.onStarClick(props.id)
                    console.log(e)
                }}>
                    tar </span>
            </>
        }
    }
    // const StarClickZhdun=(e:MouseEvent<HTMLSpanElement>)=>{
    //     props.onStarClick(e.offsetX<5?props.id-1:props.id)
    // }
    return (
        //     <span onClick={StarClickZhdun}>
        //         {props.bold ? <b>Star </b> : "Star "}
        //     </span>
        starDraw()
    )
}