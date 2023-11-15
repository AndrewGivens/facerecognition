import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './Brain.png'
import './Logo.css';

const Logo = () => {
    return (
        <div className="ma4 mt2 parralaxLogoBackground center">
            <Tilt className="br2 shadow-2 ">
                <div style={{height: '150px', padding: '35px'}}>
                    <img alt="Logo" src={brain}></img>
                </div>
            </Tilt>

        </div>
    );
}

export default Logo;