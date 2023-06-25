import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Message = () => {
    return (
        <div className='bg-slate-900 text-white text-center py-20 mb:10 md:mb-20'>
            <h2 className='text-3xl md:text-4xl font-semibold mb-5'>Do you have Project Idea? <br />
                Let's discuss your project!</h2>
                <p>Get in touch with us and discuss about your project idea. <br /> Together we will make your dream come true.</p>
                <p className='btn bg-purple-500 text-white mt-5'>Contact Me <FaArrowRight/> </p>
        </div>
    );
};

export default Message;