import React, { createContext, useState } from "react";
import { pointsProps } from "../interfaces";

export const PointsContext = createContext<pointsProps[]>(
    [
        {
            title: "Гостинный двор",
            text: "Памятник истории и архитектуры XVIII века,в прошлом — центральный оптовый Гостиный двор, с начала XX века — универмаг.",
            date: Date.now(),
            location: [59.9345, 30.3331]
        }
    ]
);


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

    const [pointLocation, setPointLocation] = useState<any>([0, 0]);

    function locationHandler(location : object) {
        setPointLocation(location)
    }

    return (
        <PointsContext.Provider value={points}>
            { children }
            </PointsContext.Provider>
    )
}

