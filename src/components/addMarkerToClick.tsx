import { useContext} from "react";
import { useMapEvents } from "react-leaflet";
import {locationContext} from "./Pages/AddPointPage"




export function AddMarkerToClick() {

    const {locationHandler} = useContext(locationContext)
      
    const map = useMapEvents({
      click(evt) {
        const lat = evt.latlng.lat;
        const lng = evt.latlng.lng;
        locationHandler(lat, lng)
        
      },
    })


    return null
}