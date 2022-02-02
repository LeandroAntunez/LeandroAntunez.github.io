import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import './Skills.css';
import './CarouselSkills.css';

class CarouselSkills extends Component {
    state = {
        items: [
            {
                id: 1, title: 'Desarrollador Frontend',
                skills:
                    [
                        { name: 'HTML', percentage: 80 },
                        { name: 'React', percentage: 80 },
                        { name: 'Bootstrap', percentage: 60 },
                        { name: 'Javascript', percentage: 90 },
                        { name: 'CSS', percentage: 70 }
                    ]
            },

            {
                id: 2, title: 'Desarrollador Backend',
                skills:
                    [
                        { name: 'MySQL', percentage: 70 },
                        { name: 'NodeJs', percentage: 80 },
                        { name: 'Ruby - on Rails', percentage: 50 },
                        { name: 'Python - Django', percentage: 50 },
                        { name: 'ExpressJS', percentage: 70 }
                    ]
            },

            {
                id: 3, title: 'MERN Stack',
                skills:
                    [
                        { name: 'MongoDB', percentage: 60 },
                        { name: 'Express', percentage: 70 },
                        { name: 'React', percentage: 80 },
                        { name: 'NodeJs', percentage: 80 }
                    ]
            },

            {
                id: 4, title: 'Otros conocimientos',
                skills: [
                    { name: 'Unit Testing', percentage: 90 },
                    { name: 'Inglés', percentage: 70 },
                    { name: 'POO', percentage: 80 },
                    { name: 'Patrones de Diseño', percentage: 75 },
                    { name: 'Git', percentage: 80 }
                ]
            },
        ]
    }

    render() {
        const { items } = this.state;

        return (
            <div>
                <Carousel itemsToShow={1}>
                    {items.map(item =>
                        <div key={item.id}>
                            <h2 className='text'>{item.title}</h2>
                            <ul>
                                {item.skills.map(s =>
                                    <div class="bars">
                                        <div className='info'>
                                            <span>{s.name}</span>
                                            <span> {s.percentage}</span>
                                        </div>
                                        <div class={'line ' + s.name.toLocaleLowerCase()}></div>
                                    </div>
                                )}
                            </ul>
                        </div>
                    )
                    }
                </Carousel>
            </div>
        );
    }
}

export default CarouselSkills;