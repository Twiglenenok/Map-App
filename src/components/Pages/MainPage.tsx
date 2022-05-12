import React, {useContext} from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { PointsContext } from "../../context/context";
import { pointsProps } from "../../interfaces";

export const MainPage:React.FC = () => {

  const points = useContext<pointsProps[]>(PointsContext);

    return (
  <>
    <div className='map-box'>
        <MapContainer center={[59.9345, 30.3331]} zoom={12.5} scrollWheelZoom={true}>
            <TileLayer
             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
         {
           points.map((point, i) => {
             return (
              <Marker key={i+2} position={point.location}>
              <Popup>
               {point.title} <br /> 
               {point.text}<br />
               {point.date} <br />
               {point.location}
              </Popup>
          </Marker>
             )
           })
         }
        </MapContainer>
    </div>
  </>
    )
}
