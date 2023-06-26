import React from 'react';
import Lottie from "lottie-react";
import img from "../../assets/programing.json"
import { FaDownload, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div className="flex flex-col-reverse items-center py-6 lg:h-[36rem] lg:flex-row bg-gradient-to-r from-purple-50 via-white to-teal-50 px-2">
            <div className="lg:w-1/2">
                <h1 className="text-5xl font-bold mb-5">Hello, I am <br /> <span className='text-purple-500'>Pavel Khan</span></h1>
                <TypeAnimation
                    className="text-purple-500"
                    // Same String at the start will only be typed once, initially
                    sequence={[
                        "Full-Stack Web Developer",
                        1000,
                        "MERN Stack Web Developer",
                        1000,
                        "Front-End Web Developer",
                        1000,
                        "ReactJs Web Developer",
                        1000,
                    ]}
                    speed={50} // Custom Speed from 1-99 - Default Speed: 40
                    style={{ fontSize: "2em" }}
                    wrapper="span" // Animation will be rendered as a <span>
                    repeat={Infinity} // Repeat this Animation Sequence infinitely
                />

                <p className="my-4 mr-10">
                    I am a Frontend(ReactJs)/Full-Stack(MERN) web developer with 1 year+
                    of learning/working experience, and build some projects based on MERN,
                    I love to work with logic and build it by programming, one more thing,
                    I love to learn new technologies with very much excitement. My
                    experiences, training, and dedication to the field of web development
                    with my ability to build an attractive web application.
                </p>
                <div className='flex gap-2'>
                    <a
                        href="pavel_khan.pdf"
                        download="pavel_khan.pdf"
                        className="mr-3"
                    >
                        <button className="btn bg-purple-500 text-white">
                            Resume <FaDownload className="ml-2" />
                        </button>
                    </a>
                    <button>
                        <a href="https://www.linkedin.com/in/pavel-khan67/"
                            className="btn bg-purple-500 text-white "
                        > Hire Me <FaLinkedin /></a>
                    </button>
                </div>
            </div>

            <div className="flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0">
                <Lottie animationData={img} loop={true} />
            </div>
        </div>
    );
};

export default Banner;