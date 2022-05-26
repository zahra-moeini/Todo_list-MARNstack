import React from "react";


export default function Item({text,remove,update}){
    return(
        <div className="item"> 
            <div className="text">{text}</div>
            <div className="icons">
                <i className="ri-pencil-fill" onClick={update}></i>
                <i className="ri-delete-bin-7-fill">{remove}</i>
            </div>
        </div>
    )
}