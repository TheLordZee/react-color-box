import React from "react";
import "./Box.css"

const Box = ({id, height, width, bgColor, removeBox}) => (
    <div id={id} className="Box">
        <div 
            className="Box-box" 
            style={{
                height, 
                width, 
                backgroundColor: bgColor
                }}>
        </div>
        <button className="Box-btn" onClick={() => removeBox(id)}>X</button>
    </div>
)

export default Box;