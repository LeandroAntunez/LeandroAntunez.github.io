import React, { Component } from 'react';
import './Projects.css';
import Carousel from 'react-elastic-carousel';
import ProjectCard from './ProjectCard';

class Projects extends Component {
    state = {
        items: [
            {
                id: 1,
                title: 'Amozon',
                description: 'Administra una tienda de libros.',
                tags: 'React, HTML, CSS, Javascript',
                link: 'https://leandroantunez-amozon-bookadmin.netlify.app/'
            },
            {
                id: 2,
                title: 'Buscador de Pareja',
                description: 'Colorida página para la búsqueda de personas solteras.',
                tags: 'HTML, CSS, Javascript',
                link: 'https://leandroantunez-datting-app.netlify.app/'
            },
            {
                id: 3,
                title: 'Lista de actividades',
                description: 'Organiza tus quehaceres pendientes con esta página.',
                tags: 'React, HTML, Javascript',
                link: 'https://leandroantunez-react-todo.netlify.app/'
            },
            {
                id: 4,
                title:
                    'Proyecto #4',
                description: '',
                tags: '',
                link: ''
            }
        ]
    }

    render() {

        return (
            <div>
                <section className='projects' id='projects'>
                    <div className='max-width'>
                        <div className='projects'>
                            <h2 className='title'>Proyectos</h2>
                            <Carousel itemsToShow={2}>
                                {this.state.items.map(item =>
                                    <ProjectCard {...item} />)}
                            </Carousel>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default Projects;