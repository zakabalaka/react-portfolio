import React from 'react';
import avatar from '../assets/images/avatar.png'; // Ensure you have an avatar image here

const AboutMe = () => {
const handleError = (e) => {
    e.target.src = '../assets/images/default-avatar.png'; // Fallback image
};

return (
    <section>
    <img src={avatar} alt="Your Avatar" onError={handleError} />
    <p>
        Hello! I'm a passionate web developer with experience in building modern single-page applications using React.
    </p>
    </section>
);
};

export default AboutMe;
