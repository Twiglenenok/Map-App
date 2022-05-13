import { useContext, useState} from "react";
import { useMapEvents } from "react-leaflet";
import {locationContext} from "./Pages/AddPointPage"
import { locationType } from "../interfaces";



export function AddMarkerToClick() {

    const locationHandler = useContext(locationContext)
      
    const map = useMapEvents({
      click(evt) {
        const lat = evt.latlng.lat;
        const lng = evt.latlng.lng;
        locationHandler(lat, lng)
        
      },
    })


    return null
}