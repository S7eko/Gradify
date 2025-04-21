// src/Projects.js
import React from 'react';
import classes from './projects.module.css'; // تأكد من وجود هذا الملف
import { Link } from 'react-router-dom';

const projectsData = [
    {
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: "E-Commerce Website",
        description: "Connect with friends and share updates in real-time with this social media application."
    },
    {
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: "Portfolio Website",
        description: "Connect with friends and share updates in real-time with this social media application."
    },
    {
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: "Blog Platform",
        description: "Connect with friends and share updates in real-time with this social media application."
    },
    {
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: "Social Media App",
        description: "Connect with friends and share updates in real-time with this social media application."
    }
    
];

const Projects = () => {
    return (
        <div className={classes.projectsContainer}>
            <h2 className={classes.title}>Featured Projects</h2>
            <div className={classes.projectList}>
                {projectsData.map((project, index) => (
                    <div key={index} className={classes.projectCard}>
                        <img src={project.image} alt={project.title} className={classes.projectImage} />
                        <h3 className={classes.projectTitle}>{project.title}</h3>
                        <p className={classes.projectDescription}>{project.description}</p>
                        <Link to={`/AllProjects`} className={classes.projectButton} >View Project</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
