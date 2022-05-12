import React from "react";
import videoBg from "../assets/videoBg.mp4"
import { Link } from "react-router-dom";

export const WelcomePage:React.FC = () => {
    return (
        <div className="main-welcome">
        <div className="content">
                <h1>
                    Open the wounder of MapClicking
                </h1>
                <Link className="start-btn" to="/main">Get Started</Link>
            </div>
        <div className="welcome">
            <video  
              loop autoPlay
              src={videoBg}
             />

        </div>
        </div>
    )
}