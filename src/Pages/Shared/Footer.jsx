import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-slate-900 text-white">
                <div>
                    <p className="text-xl"><span className='bg-purple-500 text-white rounded-full px-2'>P</span> Pavel</p>
                    <p>Pavel Khan<br />Copyright © 2023 - All right reserved.</p>
                </div>
                <div>
                    <span className="footer-title text-xl">Social</span>
                    <div className=" flex  gap-3">
                        <a href="https://github.com/pavelkhan67" 
                        className="text-2xl">
                            <FaGithubSquare />
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/pavel-khan67/"
                            className="text-2xl">
                            <FaLinkedin />
                        </a>

                        {/* FaceBook */}
                        <a
                            href="https://www.facebook.com/pavel.mdpavelkhan/"
                            className="text-2xl">
                            <FaFacebookSquare />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;