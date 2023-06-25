import React from 'react';
import img1 from "../../assets/art.png"
import img2 from "../../assets/trip.png"
import img3 from "../../assets/toy.png"

const Projects = () => {
    return (
        <div className='my-10 md:my-20 mx-2 md:mx-0'>
            <h2 className='text-4xl font-semibold text-center'>Projects</h2>
            <p className='text-center pt-3 pb-10'>Here are some projects that i have been build in last few months.</p>
            <div className='md:grid grid-cols-3 gap-5 '>
                <div className="card w-full bg-base-100 shadow-xl mb-5 md:mb-0">
                    <figure><img className='h-52 w-full' src={img1} alt="Photo" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Art Of Defense
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="btn normal-case btn-sm border-purple-500 text-purple-500">View Details</div>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl mb-5 md:mb-0">
                    <figure><img className='h-52 w-full' src={img2} alt="Photo" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Happy To Trip
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="btn normal-case btn-sm border-purple-500 text-purple-500">View Details</div>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl mb-5 md:mb-0">
                    <figure><img className='h-52 w-full' src={img3} alt="Photo" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Toy Mania
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="btn normal-case btn-sm border-purple-500 text-purple-500">View Details</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;