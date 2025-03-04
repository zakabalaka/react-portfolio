import React from 'react';

const Footer = () => {
return (
    <footer>
    <p>© 2025 Your Name. All Rights Reserved.</p>
    <div className="social-links">
        <a 
        href="https://github.com/yourusername" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Visit my GitHub profile"
        >
    GitHub
        </a>
        <a 
        href="https://linkedin.com/in/yourusername" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Visit my LinkedIn profile"
        >
        LinkedIn
        </a>
        <a 
        href="https://twitter.com/yourusername" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Visit my Twitter profile"
        >
        Twitter
        </a>
    </div>
    </footer>
);
};

export default Footer;
