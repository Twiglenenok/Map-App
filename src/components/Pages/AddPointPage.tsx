import { LatLng } from "leaflet";
import React, { useState } from "react";
import { useMapEvents } from "react-leaflet";
import { AddMarkerToClick } from "../addMarkerToClick";
import { Map } from "../map";

export const AddPointPage:React.FC = () => {

    const [pointTitle, setPointTitle] = useState<string>('');
    const [pointText, setPointText] = useState<string>('');

    function titleHandler(evt: React.ChangeEvent<HTMLInputElement>) {
        setPointTitle(evt.target.value)
    }

    function textHandler(evt: React.ChangeEvent<HTMLInputElement>) {
        setPointText(evt.target.value)
    }


    return (
        <div className="point-page">
        <div className="map-box">
            <Map></Map>
        </div>
            <div className="form-group">
            <input value={pointTitle} onChange={evt => titleHandler(evt)} id="title" type='text' placeholder="Введите название места"></input>
            <input value={pointText} onChange={evt => textHandler(evt)} id="text" type='text' placeholder="Введите описание места"></input>
            <input readOnly value={pointText} id="text" type='text' placeholder="Просто щелкни на карту!"></input>
            <button>Добавить точку</button>
        </div>
        </div>
    )
}

/*<div className="point-page">
<div className="map-box">
<Map/>
</div>
<div className="form-group">
<input id="title" type='text' placeholder="Введите название места"></input>
<label htmlFor="title">Введите место</label>
</div>
</div>*/