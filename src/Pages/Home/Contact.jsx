import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { useState } from 'react';

const Contact = () => {
    const form = useRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_7z3osfh", "template_pg1t2rh", form.current, "IyeyGbBHTx4rlHVZH")
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.log(error.text);
            });

        // Simulate form submission
        setTimeout(() => {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Message sent successfully!',
            });

            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        }, 2000);
    };

    return (
        <div id='contact' className='lg:w-8/12 mx-auto border-2 border-purple-500 mb-20 rounded-md bg-gradient-to-r from-purple-50 via-white to-teal-50'>
            <div className="max-w-md mx-auto py-10 px-2 md:px-0" >
                <form ref={form} onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 text-lg">Name</label>
                        <input
                            type="text"
                            name="user_name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-lg">Email</label>
                        <input
                            type="email"
                            name="user_email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="subject" className="block mb-2 text-lg">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block mb-2 text-lg">Message</label>
                        <textarea
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full px-3 py-2 border rounded h-20"
                            required
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn bg-purple-500 text-white"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Contact;