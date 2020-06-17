import React from "react";
import "./components.css"
export const HeaderButtons = ({title, clicked, }) =>{

    
    return(
        <button className = "header-buttons-primary" onClick = {clicked}>
            {title}
        </button>
    )
}
export const SearchButton = ({title, clicked}) =>{
    return(<button className = "search-bar-button" onClick = {clicked}>
    {title}
</button>)
}