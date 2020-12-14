import React, {useState} from "react";
import {Rating} from "./Rating";

export function Accordion() {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const menuContent = <ul>
        <li>smth</li>
        <li>smth else</li>
    </ul>
    return (
        <div>
            <h1 onClick={() => {
                setCollapsed(!collapsed)
            }}>menu</h1>
            {!collapsed && menuContent}
            <Rating/>
        </div>
    )
}