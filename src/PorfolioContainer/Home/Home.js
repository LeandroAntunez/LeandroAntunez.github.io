import React from 'react';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import './Home.css';
import NavBar from '../NavBar/NavBar';
import ContactMe from '../ContactMe/ContactMe';
import Skills from '../Skills/Skills';
import ScrollUp from '../ScrollUp/ScrollUp';
import Projects from '../Projects/Projects';
function Home() {
    return (
        <div className='home-container'>
            <ScrollUp />
            <NavBar />
            <Profile />
            <Projects />
            <Skills />
            <ContactMe />
            <Footer />
        </div>
    );
}

export default Home;