import React, { Component } from 'react';
import './Projects.css';
import Carousel from 'react-elastic-carousel';

class Projects extends Component {
    state = {
        items: [
            { id: 1, title: 'Proyecto #1' },
            { id: 2, title: 'Proyecto #2' },
            { id: 1, title: 'Proyecto #3' },
            { id: 1, title: 'Proyecto #4' }
        ]
    }

    render() {
        const { items } = this.state;

        return (
            <div>
                <section className='projects' id='projects'>
                    <div className='max-width'>
                        <div className='projects'>
                            <h2 className='title'>Mis Proyectos</h2>
                            <Carousel itemsToShow={2}>
                                {items.map(item =>
                                    <div key={item.id}>{item.title}</div>)}
                            </Carousel>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default Projects;