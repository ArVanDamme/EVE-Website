"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';

export default function About() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData.email, formData.password);
  };
  
  return (
    <div className='bg-image relative' id="home-section">
      <div className='radial-banner hidden lg:block'></div>

      <div className="mx-auto max-w-7xl pt-16 lg:pt-40 sm:pb-24 px-6">
        <div className='height-work'>
        <div className='grid grid-cols-1 lg:grid-cols-12 my-16'>
          <div className='col-span-12 flex justify-center items-center relative'> {/* Center the content */}
            <div className="form-container">
              <form className="form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Discord user ID</label>
                    <input
                      required
                      type="id"
                      name="email"
                      id="email"
                      placeholder="Enter your discord ID"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      required
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      style={{ paddingRight: '-15px' }}
                    />
                  </div>
                  <button type="submit" className="form-submit-btn">
                    Submit
                  </button>
                  </form>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}
