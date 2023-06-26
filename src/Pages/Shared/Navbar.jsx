import React, { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);
    return (
        <nav className=" px-10 md:px-2 flex flex-col py-6 sm:flex-row justify-center md:justify-between items-center md:items-center mb-10 bg-gradient-to-r from-teal-50 via-white to-purple-50">
            <div>
                <Link
                    className="text-2xl font-semibold"><span className='bg-purple-500 text-white rounded-full px-2'>P</span> Pavel Khan
                </Link>
            </div>

            <div className="flex items-center mt-5 md:mt-0">
                <ul className=" px-2 flex flex-wrap gap-3 md:gap-5 justify-center">
                    <li className='hover:font-semibold'><NavLink to="/">Home</NavLink></li>
                    <li className='hover:font-semibold'><NavLink to="/projects">Project</NavLink></li>
                    <li className='hover:font-semibold'><a href="#skill">Skills</a></li>
                    <li className='hover:font-semibold'><a href="#about">About Me</a></li>
                    <li className='hover:font-semibold'><a href="#contact">Contact</a></li>
                </ul>
                <div className='tooltip tooltip-left mx-2 justify-center items-center lg:flex hidden' data-tip='Theme'>
                    <label className="swap swap-rotate">
                        <input onClick={toggleTheme} type="checkbox" />
                        <div className="swap-on bg-white text-black rounded-md py-1 text-lg px-2"><FaMoon></FaMoon></div>
                        <div className="swap-off bg-black text-white rounded-md py-1 text-lg px-2"><FaMoon></FaMoon></div>
                    </label>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;