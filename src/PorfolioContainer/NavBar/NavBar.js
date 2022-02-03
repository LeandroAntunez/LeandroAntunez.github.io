import React, { useState } from 'react';
import './NavBar.css';

function NavBar() {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };
    return (
        <div>
            <nav className="navbar">
                <div className="max-width">
                    <div className="logo"><a href='#profile'>Portfo<span>lio.</span></a></div>
                    <ul className={isActive ? 'menu active' : 'menu'} >
                        <li><a href='#profile' onClick={toggleClass}>Perfil</a></li>
                        <li><a href='#projects' onClick={toggleClass}>Proyectos</a></li>
                        <li><a href='#skills' onClick={toggleClass}>Habilidades</a></li>
                        <li><a href='#contact' onClick={toggleClass}>Contáctame</a></li>
                    </ul>
                    <div className='menu-btn' onClick={toggleClass}>
                        <i className={isActive ? "fas fa-bars active" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </div>
    );

}

export default NavBar;