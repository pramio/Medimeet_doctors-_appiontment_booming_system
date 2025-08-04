// src/components/Footer.jsx
import React from 'react';
import { assets } from '../assets/assets'; // Assuming you have an assets folder with a logo
import { Link } from 'react-router-dom'; // Import Link

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
     <p 
  onClick={() => navigate('/')} 
  className="w-fit flex items-center gap-2 cursor-pointer text-4xl font-logo font-extrabold tracking-tight bg-gradient-to-r from-primary to-green-500 text-transparent bg-clip-text hover:scale-105 transition-transform duration-300"
>
  <img src="/favicon.svg" alt="logo" className="w-8 h-8" />
  MediMeet
</p>

          <p className='w-full md:w-2/3 text-gray-600 leading-6'>At MediMeet, we're simplifying access to quality healthcare. Our platform eliminates traditional booking hassles, connecting patients and doctors seamlessly. We provide powerful tools for patients, doctors, and administrators, featuring advanced search, role-based access, and secure payments with Stripe and Razorpay. Join us in revolutionizing the way we connect with healthcare.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>
              <Link to="/" className='cursor-pointer hover:text-black'>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className='cursor-pointer hover:text-black'>
                About us
              </Link>
            </li>
            <li>
              <Link to="/delivery" className='cursor-pointer hover:text-black'>
                Delivery
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className='cursor-pointer hover:text-black'>
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91 8016630035</li>
            <li>Medimeet@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @ Medimeet.com - All Right Reserved. <br />Created by Palash Ch Sarkar</p>
      </div>

    </div>
  );
};

export default Footer;