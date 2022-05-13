
import React, { createContext, useState } from "react";
import { locationType, pointsProps } from "../interfaces";
import { IProvider } from "../interfaces";

const providerState : IProvider = {
    points: [
        {
            title: "Гостинный двор",
            text: "Памятник истории и архитектуры XVIII века,в прошлом — центральный оптовый Гостиный двор, с начала XX века — универмаг.",
            date: Date.now(),
            location: [59.9345, 30.3331]
        }
    ],
    addPointHandler: (title : string, text : string, location : locationType) => {}
}

export const PointsContext = createContext<IProvider>(providerState);


export const PointsProvider = ({ children }: any) => {

    const [points, setPoints] = useState<pointsProps[]>([
        {
            title: "Гостинный двор",
            text: "Памятник истории и архитектуры XVIII века,в прошлом — центральный оптовый Гостиный двор, с начала XX века — универмаг.",
            date: 2012,
            location: [59.9345, 30.3331]
        },
        {
            title: "Дворцовая площадь",
            text: "главная площадь Санкт-Петербурга, архитектурный ансамбль, возникший во второй половине XVIII",
            date: 2021,
            location: [59.9389, 30.3159]
        },
        {
            title: "Исаакиевский собор",
            text: "Крупнейший православный храм Санкт-Петербурга, и одно из моих любимых мест",
            date: 2020,
            location: [59.9341, 30.3060]
        },
    ])

    function addPointHandler(title : string, text : string, location : locationType) {
        const newPoint: pointsProps = {
            title: title,
            text: text,
            date: Date.now(),
            location: location
        }
        setPoints(prev => [newPoint,...prev])
    }

    return (
        <PointsContext.Provider value={{points, addPointHandler}}>
            { children }
            </PointsContext.Provider>
    )
}

