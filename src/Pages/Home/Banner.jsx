import React from 'react';
import img from "../../assets/photo4.jpg"
import { FaDownload } from 'react-icons/fa';

const Banner = () => {
    return (
        <div>
            <div className="hero bg-gradient-to-r from-purple-50 via-white to-teal-50">
                <div className="hero-content flex-col md:flex-row-reverse md:my-10 lg:my-20">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl h-[30vh] md:h-[40vh] lg:h-[60vh] w-72" />
                    <div className='md:pr-10 lg:pr-20'>
                        <h1 className="text-5xl font-bold">Hello, I'm <br /> Pavel Khan </h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn bg-purple-500 text-white">Resume <FaDownload></FaDownload> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;