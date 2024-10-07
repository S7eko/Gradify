// src/Courses.js
import React from 'react';
import classes from './courses.module.css'; // Make sure this file exists

const coursesData = [
    {
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: "React for Beginners",
        description: "Learn the basics of React and how to build dynamic web applications."
    },
    {
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: "Advanced JavaScript",
        description: "Master advanced concepts of JavaScript, including closures, async/await, and more."
    },
    {
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: "Frontend Development with CSS",
        description: "Explore modern CSS techniques and responsive design practices."
    },
    {
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: "Introduction to Next.js",
        description: "Learn to build server-side rendered React applications using Next.js."
        
    },
    {
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: "Redux for State Management",
        description: "Understand how to manage complex state in large applications using Redux."
    }
];

const Courses = () => {
    return (
        <div className={classes.coursesContainer}>
            <h2 className={classes.title}>Available Courses</h2>
            <div className={classes.courseList}>
                {coursesData.map((course, index) => (
                    <div key={index} className={classes.courseCard}>
                        <img src={course.image} alt={course.title} className={classes.courseImage} /> {/* Add this line for image */}
                        <h3 className={classes.courseTitle}>{course.title}</h3>
                        <p className={classes.courseDescription}>{course.description}</p>
                        <button className={classes.courseButton}>Enroll Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
