import React, { useState } from 'react';

const Contact = () => {
const [formData, setFormData] = useState({ name: '', email: '', message: '' });
const [errors, setErrors] = useState({});

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
};

const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Process the form submission (e.g., show a success message)
    console.log('Form submitted', formData);
      // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
    }
};

return (
    <section>
    <h2>Contact Me</h2>
    <form onSubmit={handleSubmit} noValidate>
        <div>
        <label>Name:</label>
        <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
        <label>Email:</label>
        <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
        <label>Message:</label>
        <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
        />
        {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <button type="submit">Send Message</button>
    </form>
    </section>
);
};

export default Contact;
