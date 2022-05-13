import React, { createContext, useState } from "react";
import { Map } from "../map";
import { locationProps, locationType } from "../../interfaces";

export const locationContext = createContext<any>('');

export const AddPointPage:React.FC = () => {

    const [pointTitle, setPointTitle] = useState<string>('');
    const [pointText, setPointText] = useState<string>('');
    const [pointLocation, setPointLocation] = useState<locationType>([0, 0]);

    function titleHandler(evt: React.ChangeEvent<HTMLInputElement>) {
        setPointTitle(evt.target.value)
    }

    function textHandler(evt: React.ChangeEvent<HTMLInputElement>) {
        setPointText(evt.target.value)
    }

    function locationHandler(lat : number, lng : number) {
        setPointLocation([lat, lng]);
    }


    return (
        <locationContext.Provider value={locationHandler}>
        <div className="point-page">
        <div className="map-box">
            <Map></Map>
        </div>
            <div className="form-group">
            <input className="add-input" value={pointTitle} onChange={evt => titleHandler(evt)} id="title" type='text' placeholder="Введите название места"></input>
            <input className="add-input" value={pointText} onChange={evt => textHandler(evt)} id="text" type='text' placeholder="Введите описание места"></input>
            <input className="add-input" readOnly value={String(pointLocation.join(' '))} id="text" type='text' placeholder="Просто щелкни на карту!"></input>
            <button className="btn" onClick={() => {}}>Добавить точку</button>
        </div>
        </div>
        </locationContext.Provider>
    )
}

