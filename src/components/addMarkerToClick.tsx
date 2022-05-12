import React, {useState} from "react";
import { useMapEvents } from "react-leaflet";


export function AddMarkerToClick() {

    const [markers, setMarkers] = useState([]);
      
    const map = useMapEvents({
      click(evt) {
        const newMarker = evt.latlng;
        console.log(newMarker)
        
      },
    })
    return null
}