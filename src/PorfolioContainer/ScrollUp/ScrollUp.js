import React from 'react';
import {CircleArrow as ScrollUpButton} from 'react-scroll-up-button';
import './ScrollUp.css';

class ScrollUp extends React.Component {
    render() {
        return (
            <div className='scrollup'>
                <ScrollUpButton/>
            </div>
        );
    }
}

export default ScrollUp;