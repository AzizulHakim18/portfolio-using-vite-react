import React from 'react';
import ProjectCard from './ProjectCard';


const projects = [
    {
        id: 1,
        title: 'AI Resume Builder',
        description: 'An AI-powered tool that helps you create a professional resume with ease.',
        imageUrl: 'https://via.placeholder.com/400x300', // Replace with your project image URL
        liveUrl: '#', // Replace with the live project URL
        codeUrl: '#', // Replace with the GitHub repository URL
    },
    {
        id: 2,
        title: 'Burger Shop',
        description: 'A full-stack application for a burger shop with online ordering and admin dashboard.',
        imageUrl: 'https://via.placeholder.com/400x300',
        liveUrl: '#',
        codeUrl: '#',
    },
    {
        id: 3,
        title: '3D Web Portfolio',
        description: 'An interactive 3D portfolio built using Three.js, React, and GSAP.',
        imageUrl: 'https://via.placeholder.com/400x300',
        liveUrl: '#',
        codeUrl: '#',
    },
];



const Project = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800">My Projects</h2>
                <p className="mt-4 text-gray-600 text-lg">
                    Here are some of the exciting projects I’ve worked on. These projects demonstrate my skills and capabilities in web development.
                </p>
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                    />
                ))}
            </div>
        </section>

    );
};

export default Project;