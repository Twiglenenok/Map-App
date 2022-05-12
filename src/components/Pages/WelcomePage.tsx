import React from "react";
import videoBg from "../assets/videoBg.mp4"

export const WelcomePage:React.FC = () => {
    return (
        <div className="welcome">
            <video  
             loop autoPlay 
             src={videoBg}
             />
        </div>
    )
}