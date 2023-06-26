import React from 'react';
import Banner from './Banner';
import Projects from './Projects';
import Message from './Message';
import Contact from './Contact';
import Skills from '../Skills/Skills';
import AboutMe from '../AboutMe/AboutMe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <Message></Message>
            <Skills></Skills>
            <AboutMe></AboutMe>
            <Contact></Contact>
        </div>
    );
};

export default Home;