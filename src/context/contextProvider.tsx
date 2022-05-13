
import React, { createContext, useState } from "react";
import { locationType, pointsProps } from "../interfaces";
import { IProvider } from "../interfaces";

const providerState : IProvider = {
    points: [
        {
            title: "Гостинный двор",
            text: "Памятник истории",
            date: "Точка была поставленна: 10.02.2022 в 12:52",
            location: [59.9345, 30.3331],
            id: 9943563122403
        }
    ],
    addPointHandler: (title : string, text : string, location : locationType) => {},
    deletePointHandler: (id: number) => {}
}

export const PointsContext = createContext<IProvider>(providerState);


export const PointsProvider = ({ children }: any) => {

    const [points, setPoints] = useState<pointsProps[]>([
        {
            title: "Гостинный двор",
            text: "Памятник истории и архитектуры XVIII века,в прошлом — центральный оптовый Гостиный двор, с начала XX века — универмаг.",
            date: "Точка была поставленна: 01.03.2022 в 00:12",
            location: [59.9345, 30.3331],
            id: 1243058222166
        },
        {
            title: "Дворцовая площадь",
            text: "главная площадь Санкт-Петербурга, архитектурный ансамбль, возникший во второй половине XVIII",
            date: "Точка была поставленна: 21.02.2022 в 22:42",
            location: [59.9389, 30.3159],
            id: 8300174529813
        },
        {
            title: "Исаакиевский собор",
            text: "Крупнейший православный храм Санкт-Петербурга, и одно из моих любимых мест",
            date: "Точка была поставленна: 17.04.2022 в 19:02",
            location: [59.9341, 30.3060],
            id: 5123055822684
        },
    ])

    function addPointHandler(title : string, text : string, location : locationType) {

        const Data = new Date();
        const dataNow = Data.toLocaleDateString();
        const hours = Data.getHours();
        const minutes = Data.getMinutes();
        const allDataInfo = "Точка была поставленна: " + dataNow + " в " + hours + ":" + minutes;   
    
        const newPoint: pointsProps = {
            title: title,
            text: text,
            date: allDataInfo, 
            location: location,
            id: Date.now()
        }
        setPoints(prev => [newPoint,...prev])
    }

    function deletePointHandler(id: number) {
        setPoints(prev => prev.filter(point => point.id !== id));
    }

    return (
        <PointsContext.Provider value={{points, addPointHandler, deletePointHandler}}>
            { children }
            </PointsContext.Provider>
    )
}

