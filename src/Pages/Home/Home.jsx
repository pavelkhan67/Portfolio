import React from 'react';
import Banner from './Banner';
import Projects from './Projects';
import Message from './Message';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <Message></Message>
            <Contact></Contact>
        </div>
    );
};

export default Home;