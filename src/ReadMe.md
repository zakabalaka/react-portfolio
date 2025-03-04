# React Portfolio

## Overview

This is my React Portfolio application, built to showcase my projects, skills, and experience as a web developer. Designed as a single-page application (SPA), it uses React and react-router-dom for smooth navigation between sections without reloading the page.

## Features

- **Responsive Design:** Optimized for mobile-first experiences.
- **Dynamic Routing:** Navigate seamlessly between About Me, Portfolio, Contact, and Resume sections.
- **Reusable Components:** A dedicated Project component displays each project’s details.
- **Contact Form:** Includes client-side validation for required fields and proper email formatting.
- **Modern UI:** Custom color palette, clean design, and subtle animations.
- **Continuous Deployment:** Automatically deployed on Netlify with every push to the main branch.

## Technologies Used

- **React:** For building the user interface.
- **React Router DOM:** For handling SPA navigation.
- **Vite:** For development and build tooling.
- **CSS/SCSS:** For styling the application.
- **Netlify:** For deployment and hosting.

## Folder Structure

```bash
my-react-portfolio/
├── public/
│   ├── vite.svg       # Favicon and other public assets
└── src/
    ├── assets/            # Static assets like images and fonts
    │   └── images/        # Project images, avatar, etc.
    ├── components/        # Reusable UI components
    │   ├── Header.jsx     # Contains logo/name and Navigation component
    │   ├── Footer.jsx     # Footer with social links
    │   ├── Navigation.jsx # Navigation for routing between sections
    │   └── Project.jsx    # Reusable project card component
    ├── pages/             # Page-level components for each section
    │   ├── AboutMe.jsx    # About Me section with bio and avatar
    │   ├── Portfolio.jsx  # Portfolio section displaying projects
    │   ├── Contact.jsx    # Contact form with validation
    │   └── Resume.jsx     # Resume section with download link and skills
    ├── App.jsx            # Main app component with routing setup
    ├── main.jsx           # React entry point
    └── index.css          # Global styles
