import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export const MainPage:React.FC = () => {
    return (
  <>
    <div className='map-box'>
        <MapContainer center={[59.9345, 30.3331]} zoom={12.5} scrollWheelZoom={true}>
            <TileLayer
             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
        <Marker position={[59.9345, 30.3331]}>
            <Popup>
             title: Гостинный двор <br /> 
             text: Памятник истории и архитектуры XVIII века, 
             в прошлом — центральный оптовый Гостиный двор, с начала XX века — универмаг.<br />
             date: 12.05.2022 <br />
             position: 59.9345, 30.3331
            </Popup>
        </Marker>
        </MapContainer>
    </div>
  </>
    )
}
