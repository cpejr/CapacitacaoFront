import React from 'react'

import { IconContext } from "react-icons";
import { WiStars } from "react-icons/wi";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import './Header.css'

export default function Header(){
    return (
        <div className='Header'>
            <div className='SiteLogo'>
                <IconContext.Provider value={{ size: '1.8em' }}>
                    <WiStars />
                </IconContext.Provider>
                <div className='SiteName'>
                    CAROLÍTICOS
                </div>
            </div>
            <div className='ToolBar'>
                <div>Home</div>
                <div>Sobre Nos</div>
                <div><u>Teste de aura</u></div>
            </div>
            <div className='SocialMedia'>
                <IconContext.Provider value={{ size: '1.8em', color: '#ffff'}}>
                    <FaFacebook />
                </IconContext.Provider>
                <IconContext.Provider value={{ size: '1.8em', color: '#ffff'}}>
                    <FaInstagram />
                </IconContext.Provider>
            </div>
        </div>
    )
}