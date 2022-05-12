import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export const MainPage:React.FC = () => {
    return (
  <>
    <div className='map-box'>
        <MapContainer center={[59.9345, 30.3331]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
        <Marker position={[51.505, -0.09]}>
            <Popup>
             A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        </MapContainer>
    </div>
  </>
    )
}
