import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

function Profile(props) {
    return (
        <div className='profile-container'>
            <section className='profile' id='profile'>
                <div className='profile-parent'>
                    <div className='profile-details'>
                        <div className='colz'>
                            <div className='colz-icon'>
                                <a title='Perfil de Linkedin' href='https://www.linkedin.com/in/leandroantunez/'>
                                    <i className='fab fa-linkedin-in'></i>
                                </a>
                                <a title='Repositorio de Github' href='https://github.com/LeandroAntunez'>
                                    <i className='fab fa-github-square'></i>
                                </a>
                                <a title='Enviar correo' href='mailto:leandro_antunez@outlook.com'>
                                    <i className='fas fa-envelope-square'></i>
                                </a>
                            </div>
                        </div>

                        <div className='profile-details-name'>
                            <span className='primary-text'>
                                {""}
                                Hola, soy <span className='highlighted-text'>Leandro Antúnez</span>
                            </span>
                        </div>
                        <div className='profile-details-role'>
                            <span className='primary-text'>
                                {" "}
                                <h1>
                                    {" "}
                                    <Typical
                                        loop={Infinity}
                                        steps={[
                                            "Desarrollador Full Stack",
                                            1000,
                                            "MERN Dev",
                                            1000,
                                            "React/React Native Dev",
                                            1000,
                                            "Cross Platform Dev",
                                            1000,
                                            "Desarrollador entusiasta",
                                            1000,
                                        ]}
                                    />
                                </h1>
                                <span className='profile-role-tagline'>
                                    Soy un estudiante recientemente graduado en Informática
                                    que busca inicializarse en el sector IT,
                                    perteneciendo a una empresa y a un equipo que me acompañe en mi progreso personal,
                                    académico y laboral, en el cual pueda aportar todos mis conocimientos,
                                    habilidades y dedicación.
                                </span>
                            </span>
                        </div>
                        <div className='profile-options'>
                            <button className='btn primary-btn'>
                                {""}
                                Hire me{" "}
                            </button>
                            <a href='Leandro-Antúnez-CV.pdf' download="Leandro-Antunez-CV.pdf">
                                <button className='btn highlighted-btn'>Get Resume</button>
                            </a>
                        </div>
                    </div>
                    <div className='profile-picture'>
                        <div className='profile-picture-background'>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Profile;