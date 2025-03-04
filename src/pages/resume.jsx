import React from 'react';

const Resume = () => {
return (
    <section>
    <h2>Resume</h2>
    <a href="/resume.pdf" download>
        Download Resume
    </a>
    <h3>Technical Proficiencies:</h3>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        {/* Add additional skills as needed */}
    </ul>
    </section>
);
};

export default Resume;
