import React, { useState } from "react";

function ToDoItem(props)
{
    const [text, setText]= useState(props.text);
    const [striked, setStriked] = useState(false);
    function strike()
    {
        setStriked((prevValue)=>
        {
            return !prevValue;
        })
    }
    return (
    <div>
        <li onClick={strike} style={{textDecoration: striked? "line-through":"none"}}>{props.text}</li>
    </div>
        );
}
export default ToDoItem;