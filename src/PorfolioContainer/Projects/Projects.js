import React, { Component } from 'react';
import './Projects.css';
import Carousel from 'react-elastic-carousel';
import ProjectCard from './ProjectCard';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
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
                        'Juego de la Memoria',
                    description: 'Un juego donde pone a prueba tu memoria a corto plazo.',
                    tags: 'HTML, CSS, JS',
                    link: 'https://leandroantunez-memory-game.netlify.app/'
                },
                {
                    id: 5,
                    title:
                        'Lista de Compras',
                    description: 'Una lista interactiva de productos comprados hasta el momento.',
                    tags: 'Angular, HTML, CSS, TypeScript',
                    link: 'https://leandroantunez-shoppinglist.netlify.app/'
                }
            ]
        }
        this.updateWindowWidth = this.updateWindowWidth.bind(this);
    }

    componentDidMount() {
        this.updateWindowWidth();
        window.addEventListener('resize', this.updateWindowWidth);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowWidth);
    }

    updateWindowWidth() {
        this.setState({ width: window.innerWidth });
    }
    render() {

        return (
            <div>
                <section className='projects' id='projects'>
                    <div className='max-width'>
                        <div className='projects'>
                            <h2 className='title'>Proyectos</h2>
                            <Carousel itemsToShow={window.innerWidth > 970 ? 2 : 1}>
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