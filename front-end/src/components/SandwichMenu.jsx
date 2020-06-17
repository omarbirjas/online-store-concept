import React from "react"

export const SandwichMenu = () =>{
    const style = {height: ".2rem", width: "100%", backgroundColor: "black"}
    
    return(<div style = {{height:"30%", width: "2rem", flexDirection: "column" ,display: "flex", justifyContent: "space-between"}}>
        <div style = {style}></div>
        <div style = {style}></div>
        <div style = {style}></div>

    </div>)

}