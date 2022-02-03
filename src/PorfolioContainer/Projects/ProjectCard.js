import React from 'react';

function ProjectCard(props) {
    return (
        <div>
            <div class="card" style={{ width: '18rem' }}>
                <img class="card-img-top" src={props.title + `.png`} alt="Card cap" />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.description}</p>
                    <p className='tags'>Tags: {props.tags}</p>
                    <a href={props.link} class="btn btn-primary">Ir a la App</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;