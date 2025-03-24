import React, { useState } from 'react';
import '../styles/Home.css';
import vitlogo from '../assets/vitlogo1.jpeg';
import { Link } from 'react-router-dom';


const faqs = [
    {
        question: "How to reset my password?",
        answer: "Go to the login page and click on 'Forgot Password' to reset it via email."
    },
    {
        question: "Where can I track my application status?",
        answer: "Log in to your portal and check the application status in the dashboard section."
    },
    {
        question: "What documents are needed for application?",
        answer: "You need a copy of your 10th & 12th mark sheets, ID proof, and recent passport-size photo."
    },
    {
        question: "What is the application fee?",
        answer: "The application fee is ₹1,150 for online applicants."
    }
];

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
        setTimeout(() => {
            document.getElementById(`faq-${index}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    };

    return (
        <>
            {/* Navbar */}
            <nav className="navbar">
                <div className="brand">
                <img src={vitlogo} alt="VIT Logo" />

                    <div className="title">VIT Admission Helpdesk</div>
                </div>
                <div className="buttons">
                    <Link to="/login" className='register'>Login / Register</Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero">
                <h1>Welcome to VIT Admission Online Application Helpdesk</h1>
                <p>We are here to assist you with your admission-related queries.</p>
                <div className="hero-btns">
                    <Link to="/login" className='register-btn'>Ask a query</Link>

                </div>
            </section>

            {/* FAQ Section */}
            <section className="faqs">
                <h2>Common FAQs</h2>
                <div className="faq-cards">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            id={`faq-${index}`}
                            className={`faq-card ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => handleToggle(index)}
                        >
                            <strong>{faq.question}</strong>
                            <div className="answer">{faq.answer}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="contact-section">
  <h2 className="contact-title">Need more help?</h2>
  <p className="contact-subtext">We are here to assist you during office hours.</p>

  <div className="contact-info">
    <p><strong>Email:</strong> <a href="mailto:admission@vit.ac.in">admission@vit.ac.in</a></p>
    <p><strong>Helpline:</strong> +91-416-220 2020 / 2021</p>
    <p><strong>Office Address:</strong> VIT University, Vellore - 632014, Tamil Nadu, India</p>
    <p><strong>Office Hours:</strong> Mon - Fri, 9:00 AM - 5:00 PM IST</p>
  </div>


</section>


<footer>
    <div class="footer-container">
    
        <div class="center">
            Copyrights © Vellore Institute Of Technology |
            <a href="#">Privacy Policy</a>
            |
            <a href="#">Terms of Service</a>
        </div>
        <div class="right">
            <a href="#top">↑</a>
        </div>
    </div>
</footer>





        </>
    );
};

export default Home;
