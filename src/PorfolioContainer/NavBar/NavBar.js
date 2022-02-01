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
                        <li><a href='#profile'>Perfil</a></li>
                        <li><a href='#projects'>Proyectos</a></li>
                        <li><a href='#skills'>Habilidades</a></li>
                        <li><a href='#contact'>Contáctame</a></li>
                    </ul>
                    <div className='menu-btn' onClick={toggleClass}>
                        <i class={isActive ? "fas fa-bars active" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </div>
    );

}

export default NavBar;