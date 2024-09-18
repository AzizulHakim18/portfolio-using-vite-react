import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiDaisyui, SiExpress } from 'react-icons/si';
import { AiFillApi } from 'react-icons/ai';
import Services from './Services';
import { IoLogoFirebase } from 'react-icons/io5';
import { motion } from 'framer-motion';

const skills = [
    { id: 1, icon: <FaHtml5 className="text-4xl text-orange-600 animate-bounce" />, name: 'HTML', description: 'Experienced in creating structured and semantic HTML documents to ensure proper document structure and SEO optimization.' },
    { id: 2, icon: <FaCss3Alt className="text-4xl text-blue-600 animate-bounce" />, name: 'CSS', description: 'Proficient in styling and designing responsive layouts using modern CSS techniques, including Flexbox and Grid.' },
    { id: 3, icon: <FaBootstrap className="text-4xl text-primary animate-bounce" />, name: 'Bootstrap', description: 'Experienced in utilizing Bootstrap for building responsive layouts and components with a focus on speed and ease of use.' },
    { id: 4, icon: <SiTailwindcss className="text-4xl text-blue-600 animate-bounce" />, name: 'Tailwind CSS', description: 'Proficient in using Tailwind CSS for utility-first styling and building responsive and customizable UI components.' },
    { id: 5, icon: <FaJs className="text-4xl text-yellow-500 animate-bounce" />, name: 'JavaScript', description: 'Skilled in writing dynamic and interactive web applications with JavaScript, including ES6+ features and asynchronous programming.' },
    { id: 6, icon: <FaReact className="text-4xl text-blue-400 animate-bounce" />, name: 'React', description: 'Experienced in building user interfaces and single-page applications using React, including hooks, context API, and state management.' },
    { id: 7, icon: <SiDaisyui className="text-4xl text-emerald-600 animate-bounce" />, name: 'Daisy UI', description: 'Skilled in using Daisy UI for component-based styling and creating aesthetically pleasing and responsive designs.' },
    { id: 8, icon: <IoLogoFirebase className="text-4xl text-yellow-400 animate-bounce" />, name: 'Firebase', description: 'Proficient in using Firebase for authentication, real-time databases, and cloud functions to enhance web applications.' },
    { id: 9, icon: <FaNodeJs className="text-4xl text-green-600 animate-bounce" />, name: 'Node.js', description: 'Knowledgeable in server-side development and API integration with Node.js, including creating RESTful services and middleware.' },
    { id: 10, icon: <FaDatabase className="text-4xl text-teal-500 animate-bounce" />, name: 'MongoDB', description: 'Experienced in designing and managing NoSQL databases with MongoDB, including schema design and data modeling.' },
    { id: 11, icon: <SiExpress className="text-4xl text-gray-600 animate-bounce" />, name: 'Express.js', description: 'Experienced in building server-side applications and APIs using Express.js, including middleware and routing.' },
    { id: 12, icon: <AiFillApi className="text-4xl text-red-500 animate-bounce" />, name: 'APIs', description: 'Skilled in designing and integrating APIs, ensuring seamless communication between front-end and back-end services.' },
];

const Skills = () => {
    return (
        <div className='w-11/12 md:w-2/3 mx-auto'>
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <section >
                        <div className="py-3 text-center">
                            <motion.h2
                                className="text-4xl font-bold mb-6"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                My Expertise
                            </motion.h2>
                            <motion.p
                                className="max-w-2xl mx-auto  leading-relaxed text-justify"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                With hands on experience in full-stack development, I specialize in crafting dynamic and efficient web applications. My expertise ranges from frontend frameworks to backend technologies, and I ensure every project I work on is fast, responsive, and user-friendly. From performance optimization to creating accessible designs, I strive for excellence in every line of code.
                            </motion.p>
                        </div>
                    </section>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
                        {skills.map(skill => (
                            <div key={skill.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
                                <div className="mb-4">
                                    {skill.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                                <p className="text-gray-600">{skill.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Services></Services>
        </div>

    );
};

export default Skills;