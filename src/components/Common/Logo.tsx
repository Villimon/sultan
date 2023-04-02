import React from 'react';
import Logo from "../../assets/images/logo.png";
import LogoWhite from "../../assets/images/logoWhite.png";



type PropsType = {
    style: string
    logoWhite?: boolean
}



const LogoComponent: React.FC<PropsType> = ({ style, logoWhite }) => {
    return (
        <div className={style}>
            <img src={logoWhite ? LogoWhite : Logo} alt="logo" />
        </div>
    );
}

export default LogoComponent;

