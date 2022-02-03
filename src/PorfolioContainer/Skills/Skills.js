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
                                <div>
                                    <h2>Habilidades blandas</h2>
                                    <p>
                                        <ul className='soft-skill-list'>
                                            <li className='soft-skill-item'>Resolución de problemas.</li>
                                            <li className='soft-skill-item'>Adaptabilidad.</li>
                                            <li className='soft-skill-item'>Trabajo en equipo.</li>
                                            <li className='soft-skill-item'>Gestión de conflictos.</li>
                                            <li className='soft-skill-item'>Deseos de aprender.</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <div className="column right">
                                <CarouselSkills />
                            </div>
                        </div>
                    </div>
                </section >
            </div >
        );
    }
}

export default Skills;