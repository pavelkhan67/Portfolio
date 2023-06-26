import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

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
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-lg">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-lg">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block mb-2 text-lg">Subject</label>
            <input
              type="text"
              id="text"
              className="w-full px-3 py-2 border rounded"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 text-lg">Message</label>
            <textarea
              id="message"
              className="w-full px-3 py-2 border rounded h-20"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
