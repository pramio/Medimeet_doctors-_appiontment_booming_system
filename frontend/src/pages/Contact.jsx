import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(''); // To display success or error messages for the form

  const handleClick = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Sending...');

    try {
      // Replace '/api/send-email' with your actual backend endpoint
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('Your query has been sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      } else {
        setFormStatus('Failed to send your query. Please try again.');
      }
    } catch (error) {
      setFormStatus('An error occurred. Please try again later.');
      console.error('Error sending form data:', error);
    }

    setTimeout(() => {
      setFormStatus('');
    }, 5000); // Clear status message after 5 seconds
  };

  return (
    <div>
      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="Contact Us" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500'>
            BM Grand Road, Malda, West Bengal, India<br />
            PIN: 732101
          </p>
          <p className='text-gray-500'>
            Tel: +91 8016630035 <br />
            Email: Medimeet@gmail.com
          </p>
          <p className='font-semibold text-lg text-gray-600'>CAREERS AT MEDIMEET</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>

          <button
            onClick={handleClick}
            className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'
          >
            Explore Jobs
          </button>

          {showMessage && (
            <div className="mt-4 p-3 bg-blue-100 rounded-lg border border-blue-300 text-blue-700 text-sm italic animate-fadeIn">
              Jobs will be provided soon, stay with us!
            </div>
          )}
        </div>
      </div>

<div className="min-h-screen flex items-center justify-center px-8 py-30">
      <div className="bg-white rounded-xl shadow-2xl p-10 max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left side icon */}
        <div className="flex items-center justify-center">
          <svg className="w-24 h-24 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 0v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8m18 0L12 13 3 8" />
          </svg>
        </div>

        {/* Right side form */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">Have You Any Question ?</h2>
          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mb-4 px-4 py-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mb-4 px-4 py-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full mb-4 px-4 py-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full mb-6 px-4 py-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            />

            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-3 rounded-full hover:bg-primary-500 transition duration-300"
            >
              Send Email →
            </button>

            {formStatus && (
              <p className={`mt-4 text-sm italic ${
                formStatus.includes('successfully') ? 'text-green-600' : 'text-red-600'
              }`}>
                {formStatus}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;