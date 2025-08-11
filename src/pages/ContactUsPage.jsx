import React, { useState } from "react";
import '../styles/ContactUs.css';

const ContactUsPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        

        try {
            const response = await fetch('http://localhost/UtopiaBackend/send_email.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData)
            });


            if (!response.ok) {
                alert('Failed to send message.');
                return;
            }

            // Read the response text once
            const text = await response.text();
            console.log('Response:', text);
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });

        } catch (error) {
            alert('An error occurred.');
            console.error(error);
        }
    };

    return (
        <section className="contact-section">
            <div className="contact-container">
                <h2 className="contact-title">Contact Us</h2>
                <p className="contact-subtitle">
                    Questions, ideas, or collaborations? <br />
                    Reach out!
                </p>

                <div className="contact-details">
                    <p>Email: <a href="mailto:soundutopiaa@gmail.com">soundutopiaa@gmail.com</a></p>
                    <p>Instagram: <a href="https://instagram.com/utopia_design.studio" target="_blank" rel="noreferrer">@utopia_design.studio</a></p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Send Message</button>
                </form>

                {status && <p className="form-status">{status}</p>}
            </div>
        </section>
    );
};

export default ContactUsPage;
