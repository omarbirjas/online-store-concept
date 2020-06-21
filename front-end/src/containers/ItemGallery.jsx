import React from "react"
import {ItemGalleryTile} from "../components/ItemGalleryTile"
import "./containers.css"

export const ItemGallery = ({images, title, description, price, shipping}) =>{



    return (<div className =  "item-gallery-parent">
        <ItemGalleryTile></ItemGalleryTile>
    </div>)
}