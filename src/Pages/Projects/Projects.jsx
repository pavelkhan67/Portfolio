import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import p1img1 from '../../assets/project/p1img1.png'
import p1img2 from '../../assets/project/p1img2.png'
import p1img3 from '../../assets/project/p1img3.png'
import p2img1 from '../../assets/project/p2img1.png'
import p2img2 from '../../assets/project/p2img2.png'
import p2img3 from '../../assets/project/p2img3.png'
import p3img1 from '../../assets/project/p3img1.png'
import p3img2 from '../../assets/project/p3img2.png'
import p3img3 from '../../assets/project/p3img3.png'

const AutoplaySlider = withAutoplay(AwesomeSlider);


const Projects = () => {
    return (
        <div className='my-10'>
            <div>
                <h2 className='text-center text-4xl font-bold pb-5'>Project 1</h2>
                <AutoplaySlider
                    play={true}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={6000}
                >
                    <div className='h-full'>
                        <img className='h-full' src={p1img1} alt="" />
                    </div>
                    <div className='h-full'>
                        <img className='h-full' src={p1img2} alt="" />
                    </div>
                    <div className='h-full'>
                        <img className='h-full' src={p1img3} alt="" />
                    </div>
                </AutoplaySlider>
                <div className='mt-16'>
                    <h2 className='text-3xl font-semibold'>Project Information: Art Of Defense</h2>
                    <p className='pt-5'>
                        1. User Registration and Booking System: Streamlined registration and booking process with secure payment integration. <br />
                        2. Class Management for Teachers: Dedicated portal for teachers to efficiently manage class details. <br />
                        3. Class Approval Workflow for Admin: Admin approval process ensures quality and relevance of classes. <br />
                        4. User Profile and Payment Integration: User profiles and secure payment integration for convenient class bookings. <br />
                        5. Notifications and Reminders: Timely notifications keep users, teachers, and admins informed and engaged.</p>

                    <div className='flex gap-5 mt-5'>
                        <p>Project Link:</p>
                        <p className='font-semibold text-purple-500'><a href='https://github.com/pavelkhan67/Art_Of_Defence_Client'>Client Side</a> </p>
                        <p>|</p>
                        <p className='font-semibold text-purple-500'><a href='https://github.com/pavelkhan67/Art_Of_Defence_Server'>Server Side</a> </p>
                        <p>|</p>
                        <p className='font-semibold text-purple-500'><a href='https://summercamp-7dfd6.web.app/'>Live Site</a> </p>
                    </div>
                </div>
            </div>

            <div className='mt-10'>
                <h2 className='text-center text-4xl font-bold pb-5'>Project 2</h2>
                <AutoplaySlider
                    play={true}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={6000}
                >
                    <div className='h-full'>
                        <img className='h-full' src={p2img1} alt="" />
                    </div>
                    <div className='h-full'>
                        <img className='h-full' src={p2img2} alt="" />
                    </div>
                    <div className='h-full'>
                        <img className='h-full' src={p2img3} alt="" />
                    </div>
                </AutoplaySlider>
                <div className='mt-16'>
                    <h2 className='text-3xl font-semibold'>Project Information: Happy To Trip</h2>
                    <p className='pt-5'>
                        1. User Registration and Booking System: Streamlined user registration, personalized experiences, and secure online hotel booking. <br />
                        2. Hotel Management for Hotel Managers: Dedicated portal for hotel managers to add and delete hotel listings, ensuring up-to-date and relevant content. <br />
                        3. Admin Dashboard for User and Hotel Management: Centralized admin dashboard for user management, hotel approval, and addressing user-related issues. <br />
                        4. Hotel Booking and Online Payment: Seamless hotel booking process with secure online payment integration and booking confirmations. <br />
                        5. Search and Filter Functionality: Robust search and filtering options for users to find suitable travel destinations and hotels based on preferences.</p>

                    <div className='flex gap-5 mt-5'>
                        <p>Project Link:</p>
                        <p className='font-semibold text-purple-500'><a href='https://github.com/pavelkhan67/HappyToTrip_client'>Client Side</a> </p>
                        <p>|</p>
                        <p className='font-semibold text-purple-500'><a href='https://github.com/pavelkhan67/HappyToTrip_Server'>Server Side</a> </p>
                        <p>|</p>
                        <p className='font-semibold text-purple-500'><a href='https://happytotrip.web.app/'>Live Site</a> </p>
                    </div>
                </div>
            </div>

            <div className='mt-10'>
                <h2 className='text-center text-4xl font-bold pb-5'>Project 3</h2>
                <AutoplaySlider
                    play={true}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={6000}
                >
                    <div className='h-full'>
                        <img className='h-full' src={p3img1} alt="" />
                    </div>
                    <div className='h-full'>
                        <img className='h-full' src={p3img2} alt="" />
                    </div>
                    <div className='h-full'>
                        <img className='h-full' src={p3img3} alt="" />
                    </div>
                </AutoplaySlider>
                <div className='mt-16'>
                    <h2 className='text-3xl font-semibold'>Project Information: Toy Mania</h2>
                    <p className='pt-5'>
                        1. Toy Search: Users can easily search for toys based on their preferences and find desired products quickly. <br />
                        2. Toy Listing: Users can add new toys to the website, expanding the collection and offering a diverse range of options. <br />
                        3. Shopping Cart: Users can add toys to their cart for purchase, creating a seamless and convenient shopping experience. <br />
                        4. Request Unavailable Toys: Users can request the owner to bring specific toys that are currently unavailable on the website, ensuring a personalized shopping experience. <br />
                        5. User Toy Collection: Users can view and manage their own collection of toys added to the website, enabling easy tracking and organization of their purchases.</p>

                    <div className='flex gap-5 mt-5'>
                        <p>Project Link:</p>
                        <p className='font-semibold text-purple-500'><a href='https://github.com/pavelkhan67/Toy_Store_Client'>Client Side</a> </p>
                        <p>|</p>
                        <p className='font-semibold text-purple-500'><a href='https://github.com/pavelkhan67/Toy_store_Server'>Server Side</a> </p>
                        <p>|</p>
                        <p className='font-semibold text-purple-500'><a href='https://toymania-3a476.web.app/'>Live Site</a> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;