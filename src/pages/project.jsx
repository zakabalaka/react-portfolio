import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ project }) => {
const {
    image = 'default-image.jpg', // Default image if none provided
    title = 'Untitled Project',    // Default title if none provided
    deployedLink = '#',            // Default link if none provided
    repoLink = '#'                 // Default link if none provided
  } = project || {}; // Fallback to an empty object if project is undefined

return (
    <div className="project-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <div className="project-links">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
        Deployed App
        </a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
        GitHub Repo
        </a>
    </div>
    </div>
);
};

Project.propTypes = {
project: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    deployedLink: PropTypes.string,
    repoLink: PropTypes.string,
}),
};

export default Project;
