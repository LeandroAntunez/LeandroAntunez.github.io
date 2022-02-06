import React from 'react';

function ProjectCard(props) {
    return (
        <div>
            <div class="card" style={{ width: '18rem' }}>
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                    <img class="card-img-top" src={props.title + `.png`} alt="Card cap" />
                </a>
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.description}</p>
                    <p className='tags'>Tags: {props.tags}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;