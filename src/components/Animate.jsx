import React from 'react';

import { useState } from "react";
import AnimateCC from "react-adobe-animate";

import './Animate.scss';

// import { gsap } from 'gsap';

export default function Animate() {

    const [paused, setPaused] = useState(false);
    // const [, setAnimationObject] = useState(null);
    // const getAnimationObject = obj => setAnimationObject(obj);
    const onClick = () => setPaused(!paused);

    return (
        <div className="animContainer">
            <h2>Animate Component</h2>

        {/* 
            <AnimateCC
                animationName="CR_11155_MINAJESTY_2014_US_DIGITAL_300x600_HTML5"
                getAnimationObject={getAnimationObject}
                paused={paused}
            />
        */}
        
            <AnimateCC
                className="adobeAnim"
                animationName="CR_11155_MINAJESTY_2014_US_DIGITAL_300x600_HTML5"
                composition="45A2D185DEBE4854A737F3CE82FD6355"
                paused={paused}
            />
       
        {/*         
            <AnimateCC
                className="adobeAnim"
                animationName="26897_BS_PRIVATE_SHOW_GWP_PR_Walgreens_300x250"
                composition="6A34960ED4AD46AE8AA9E8E507E52FBA"
                paused={paused}
            />
        */}
        
            <AnimateCC
                className="adobeAnim"
                animationName="26897_BS_PRIVATE_SHOW_GWP_PR_Walgreens_300x250_0720"
                composition="6A34960ED4AD46AE8AA9E8E507E52FBA"
                paused={paused}
            />
       
            <button onClick={onClick}>{paused ? "Unpause" : "Pause"}</button>
        </div>
    )
}