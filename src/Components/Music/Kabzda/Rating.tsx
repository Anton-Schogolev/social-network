import React, {useState} from "react";
import {Star} from "./Star";


export function Rating() {
    const [amount,setAmount]=useState<number>(0)
    return(
        <div>
            <Star bold={amount>0} onStarClick={setAmount} id={1}/>
            <Star bold={amount>1} onStarClick={setAmount} id={2}/>
            <Star bold={amount>2} onStarClick={setAmount} id={3}/>
            <Star bold={amount>3} onStarClick={setAmount} id={4}/>
            <Star bold={amount>4} onStarClick={setAmount} id={5}/>
        </div>
    )
}