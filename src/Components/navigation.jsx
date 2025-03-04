import React from 'react';

const Header = () => {
    return (
        <header>
            <h1>Your Name or Logo</h1>
            <Navigation />
        </header>
    );
};

export { Header };

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const getClassName = ({ isActive }) => (isActive ? 'active' : '');

    return (
        <nav>
            <ul>
                <li>
                    <NavLink 
                        to="/" 
                        className={getClassName} 
                        end
                        aria-label="About Me"
                    >
                        About Me
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/portfolio" 
                        className={getClassName}
                        aria-label="Portfolio"
                    >
                        Portfolio
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/contact" 
                        className={getClassName}
                        aria-label="Contact"
                    >
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/resume" 
                        className={getClassName}
                        aria-label="Resume"
                    >
                        Resume
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
