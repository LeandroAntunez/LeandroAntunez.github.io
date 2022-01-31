import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar">
                    <div className="max-width">
                        <div className="logo"><a href='#'>Portfo<span>lio.</span></a></div>
                        <ul className="menu">
                            <li><a href='#profile'>Perfil</a></li>
                            <li><a href='#projects'>Proyectos</a></li>
                            <li><a href='#skills'>Habilidades</a></li>
                            <li><a href='#contact'>Contáctame</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;