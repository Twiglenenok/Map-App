import React, { createContext, useContext, useState } from "react";
import { Map } from "../map";
import { locationProps, locationType } from "../../interfaces";
import { PointsContext } from "../../context/context";

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

    const {addPointHandler} = useContext(PointsContext)

    console.log(pointLocation);

    return (
        <locationContext.Provider value={locationHandler}>
        <div className="point-page">
            <div className="addPage-mapbox">
            <Map></Map>
            </div>
            <div className="form-group">
            <input className="add-input" value={pointTitle} onChange={evt => titleHandler(evt)} id="title" type='text' required placeholder="Введите название места"></input>
            <input className="add-input" value={pointText} onChange={evt => textHandler(evt)} id="text" type='text' required placeholder="Введите описание места"></input>
            <input className="add-input" readOnly value={String(pointLocation.join(' '))} id="location" type='text' placeholder="Просто щелкни на карту!"></input>
            <button className="btn" onClick={() => addPointHandler(pointTitle, pointText, pointLocation)} disabled={pointTitle === '' ? true : false}>{pointTitle === '' ? "Введите название и щелкните по карте" : pointLocation == [0, 0] ? "Кликни по карте!" : "Добавить точку"}</button>
        </div>
        </div>
        </locationContext.Provider>
    )
}

