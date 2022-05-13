import React, {useContext} from "react";
import { Map } from "../map";
import { PointsContext } from "../../context/context";
import trash from "../assets/delete.png"


export const ListPointPage:React.FC = () => {

    const {points} = useContext(PointsContext);
    const {deletePointHandler} = useContext(PointsContext);

    return (
        <div className="point-page">
            <div className="listPage-mapbox">
            <Map/>
            </div>
            <div className="points-container">
                <ul>
                    {points.map((point) => {
                        return (
                            <li className="list-item" key={point.id}>
                                {point.title}
                                <img onClick={() => deletePointHandler(point.id)} className="delete-btn" alt="delete" src={trash} max-width="25px" height="25px"></img>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}