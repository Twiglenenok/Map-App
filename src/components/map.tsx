import React, {useContext} from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { PointsContext } from "../context/contextProvider";
import { AddMarkerToClick } from "./addMarkerToClick";




export const Map:React.FC = () => {

    const {points} = useContext(PointsContext);

    return (
        <div className='map-box'>
        <MapContainer
         closePopupOnClick
         center={[59.9345, 30.3331]}
         zoom={12.5}
         scrollWheelZoom={true}>
             <AddMarkerToClick/>
            <TileLayer
             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
         {
           points.map((point) => {
             return (
              <Marker key={point.id} position={point.location}>
              <Popup>
                <span>
                  <span className="point-title">{point.title}</span> <br /> 
                  <span className="point-text">{point.text}</span><br />
                  {point.date} <br />
                  Местоположение: {point.location.join(' ')}
               </span>
              </Popup>
          </Marker>
             )
           })
         }
        </MapContainer>
    </div>
    )
}