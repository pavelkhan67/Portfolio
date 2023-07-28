import React from 'react';
import img1 from "../../assets/art.png"
import img2 from "../../assets/trip.png"
import img3 from "../../assets/toy.png"
import { NavLink } from 'react-router-dom';

const Projects = () => {
    return (
        <div id='project' className='my-10 md:my-20'>
            <h2 className='text-4xl font-semibold text-center'>Projects</h2>
            <p className='text-center pt-3 pb-10'>Here are some projects that i have been build in last few months.</p>
            <div className='md:grid grid-cols-3 gap-5 '>
                <div className="card w-full bg-base-100 shadow-xl mb-5 md:mb-0">
                    <figure><img className='h-52 w-full' src={img1} alt="Photo" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Art Of Defense
                        </h2>
                        <p>Embark on a Journey of Strength, Discipline, and Self-Discovery through the World of Martial Arts.</p>
                        <div className="card-actions justify-end">
                            <NavLink to="/projects">
                                <div className="btn normal-case btn-sm border-purple-500 text-purple-500">View Details</div>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl mb-5 md:mb-0">
                    <figure><img className='h-52 w-full' src={img2} alt="Photo" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            TravelEase
                        </h2>
                        <p>Experience the World's Wonders, Unveil Hidden Gems, and Create Lasting Memories with Our Travel Adventure Platform.</p>
                        <div className="card-actions justify-end">
                            <NavLink to="/projects">
                                <div className="btn normal-case btn-sm border-purple-500 text-purple-500">View Details</div>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl mb-5 md:mb-0">
                    <figure><img className='h-52 w-full' src={img3} alt="Photo" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Toy Mania
                        </h2>
                        <p>Spark Imagination, Delight Young Minds, and Create Endless Joy with Our Captivating Toy Wonderland.</p>
                        <div className="card-actions justify-end">
                            <NavLink to="/projects">
                                <div className="btn normal-case btn-sm border-purple-500 text-purple-500">View Details</div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;