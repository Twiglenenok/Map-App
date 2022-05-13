import React, {useContext} from "react";
import { Map } from "../map";
import { pointsProps } from "../../interfaces";
import { PointsContext } from "../../context/context";
import trash from "../assets/delete.png"


export const ListPointPage:React.FC = () => {

    const {points} = useContext(PointsContext);

    return (
        <div className="point-page">
            <Map/>
            <div className="form-group">
                <ul>
                    {points.map((point, i) => {
                        return (
                            <li className="list-item" key={i+2}>
                                {point.title}
                                <img className="delete-btn" alt="delete" src={trash} max-width="25px" height="25px"></img>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}