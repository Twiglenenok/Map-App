import React, { useContext, useState} from "react";
import { useMapEvents } from "react-leaflet";
import {locationContext} from "./Pages/AddPointPage"
import { locationType } from "../interfaces";



export function AddMarkerToClick() {

    const [marker, setMarker] = useState<locationType>([0, 0]);

    const locationHandler = useContext(locationContext)
      
    const map = useMapEvents({
      click(evt) {
        const newMarker = evt.latlng;
        const lat = newMarker.lat;
        const lng = newMarker.lng;
        locationHandler(lat, lng)
        
      },
    })


    return null
}