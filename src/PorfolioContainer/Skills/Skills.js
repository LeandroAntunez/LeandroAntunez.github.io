import React from 'react';
import './Skills.css';
import CarouselSkills from './CarouselSkills';
class Skills extends React.Component {
    render() {
        return (
            <div>
                <section className="skills" id="skills">
                    <div className="max-width">
                        <h2 className="title">Mis Habilidades</h2>
                        <div className="skills-content">
                            <div className='column left'>
                                <h2>Habilidades blandas.</h2>
                                <p>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>Resolución de problemas.</li>
                                        <li className='list-group-item'>Adaptabilidad.</li>
                                        <li className='list-group-item'>Trabajo en equipo.</li>
                                        <li className='list-group-item'>Gestión de conflictos.</li>
                                        <li className='list-group-item'>Deseos de aprender.</li>
                                    </ul>
                                </p>
                            </div>
                            <div className="column right">
                                <CarouselSkills />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Skills;