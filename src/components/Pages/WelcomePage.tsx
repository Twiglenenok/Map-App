import React from "react";

export const WelcomePage:React.FC = () => {
    return (
        <div className="welcome">
            <h1>Some Video</h1>
            <video  
             loop autoPlay 
             src="../assets/VideoBg.mp4"/>
        </div>
    )
}