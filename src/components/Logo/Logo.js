import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './Brain.png'
import './Logo.css';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="br2 shadow-2">
                <div style={{ width: '1500px', height: '150px'}}>
                    <img alt="Logo" src={brain}></img>
                </div>
            </Tilt>

        </div>
    );
}

export default Logo;