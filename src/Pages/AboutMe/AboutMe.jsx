import React from "react";
import { FaDownload } from "react-icons/fa";
import aboutme from "../../assets/socialMarket.json";

import Reveal from "react-reveal/Reveal";
import { Bounce } from "react-reveal";
import Lottie from "lottie-react";
const AboutMe = () => {
    return (
        <div id="about" className="my-10">
            <h1 className="text-4xl font-bold text-center">
                About <span className="text-purple-500">Me</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
                <Reveal effect="fadeInUp">
                    <div className="flex mt-8 lg:justify-end lg:mt-0">
                        <Lottie animationData={aboutme} loop={true} />
                    </div>
                    <div className=" py-5">
                        <Bounce left>
                            <h2 className="card-title font-bold">Pavel Khan</h2>
                            <p className="md:w-[75%] my-3">
                                I am an enthusiastic and dedicated Frontend/Full-Stack web developer, specializing in ReactJS and the MERN stack. With over 1 year of hands-on experience and a strong passion for logic and programming, I have successfully built several projects using the MERN stack. I thrive on continuously expanding my knowledge and eagerly embrace new technologies. Through my experiences, training, and unwavering commitment to web development, I possess the skills to create captivating and visually appealing web applications.
                            </p>
                            <p>
                                <span className="font-bold">Email:</span>{" "}
                                pavelkhantopu@gmail.com
                            </p>
                            <p>
                                <span className="font-bold">Contact:</span> +88 01914636498
                            </p>
                            <p>
                                <span className="font-bold">Address:</span> Mankigonj, Bangladesh
                            </p>
                            <a
                                href="pavel_khan.pdf"
                                download="pavel_khan.pdf"
                                className="mr-3"
                            >
                                <button className="btn bg-purple-500 text-white my-5 ">
                                    Resume <FaDownload className="ml-2" />
                                </button>
                            </a>
                        </Bounce>
                    </div>
                </Reveal>
            </div>
        </div>
    );
};

export default AboutMe;
