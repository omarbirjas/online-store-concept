import React from "react"
import styled from "styled-components"
import {HeaderButtons} from "../components/HeaderButtons.jsx"
import { SearchBar } from "../components/SearchBar.jsx"
import { SandwichMenu } from "../components/SandwichMenu.jsx"

export const HeaderBar = () =>{

    const PrimaryButtonBox = styled.div`
        display: flex;
        justify-content: space-between;
        width: 20rem;
        height: 100%;

    `
    return(<div className = "header-bar-global">
            <SandwichMenu></SandwichMenu>
            <SearchBar></SearchBar>

            <PrimaryButtonBox>
            <HeaderButtons title = "Colorful" clicked = {() => {console.log("clicekd")}}/>
            <HeaderButtons title = "Colorful"/>
            </PrimaryButtonBox>

        </div>)
}