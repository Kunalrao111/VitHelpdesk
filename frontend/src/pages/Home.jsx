'use client';

import React from 'react';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="contact-container">
            
            
            <div className="banner">
                <h1>Contact</h1>
            </div>

            <main className="contact-content">
                <div className="contact-form">
                    <h2>Have a question?</h2>
                    <p>Please do not fill out this form for any purpose other than partnerships. We are not looking for services at this time.</p>
                    <form>
                        <label>First Name</label>
                        <input type="text" placeholder="Enter your First Name" />
                        <label>Last Name</label>
                        <input type="text" placeholder="Enter your Last Name" />
                        <label>Email</label>
                        <input type="email" placeholder="Enter your Email" />
                        <button type="submit">Submit</button>
                    </form>
                </div>

                <div className="contact-info">
                    <h2>Get in touch</h2>
                    <p>We love to hear from you. Our friendly team is always here to chat.</p>
                    <div className="info-box">
                        <p><strong>Address:</strong> 119 Nueces St, Austin, TX 78701</p>
                        <p><strong>Phone:</strong> +1 (469) 555-4099</p>
                        <p><strong>Email:</strong> support@appliedmind.com</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
