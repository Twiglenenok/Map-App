import React, { createContext, useState } from "react";
import { pointsProps } from "../interfaces";

const PointsContext = createContext({
    points: [
        {
            title: "Гостинный двор",
            text: "Памятник истории и архитектуры XVIII века,в прошлом — центральный оптовый Гостиный двор, с начала XX века — универмаг.",
            date: Date(),
            location: "59.9345, 30.3331",   
        }
    ]
})


export const PointsProvider = ({ children }: any) => {

    const [points, setPoints] = useState<pointsProps[]>([
        {
            title: "Гостинный двор",
            text: "Памятник истории и архитектуры XVIII века,в прошлом — центральный оптовый Гостиный двор, с начала XX века — универмаг.",
            date: Date(),
            location: "59.9345, 30.3331"
        },
        {
            title: "Дворцовая площадь",
            text: "главная площадь Санкт-Петербурга, архитектурный ансамбль, возникший во второй половине XVIII",
            date: Date(),
            location: "59.9389, 30.3159"
        },
        {
            title: "Исаакиевский собор",
            text: "Крупнейший православный храм Санкт-Петербурга, и одно из моих любимых мест",
            date: Date(),
            location: " 59.9341, 30.3060"
        },
    ])

    return (
        <PointsContext.Provider value={points}>
            </PointsContext.Provider>
    )
}

