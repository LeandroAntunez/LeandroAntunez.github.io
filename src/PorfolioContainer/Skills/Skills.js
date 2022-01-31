import React from 'react';
import './Skills.css';

class Skills extends React.Component {
    render() {
        return (
            <div>
                <section class="skills" id="skills">
                    <div class="max-width">
                        <h2 class="title">My Skills</h2>
                        <div class="skills-content">
                            <div class='column left'>
                                <div class="text">My creative skills & experiences.</div>
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                <a href='#'>Read more</a>
                            </div>
                            <div class="column right">
                                <div class="bars">
                                    <div class="info">
                                        <span>HMTL</span>
                                        <span>90%</span>
                                    </div>
                                    <div class="line html"></div>
                                </div>
                                <div class="bars">
                                    <div class="info">
                                        <span>CSS</span>
                                        <span>50%</span>
                                    </div>
                                    <div class="line css"></div>
                                </div>
                                <div class="bars">
                                    <div class="info">
                                        <span>JavaScript</span>
                                        <span>80%</span>
                                    </div>
                                    <div class="line javascript"></div>
                                </div>
                                <div class="bars">
                                    <div class="info">
                                        <span>PHP</span>
                                        <span>40%</span>
                                    </div>
                                    <div class="line php"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Skills;