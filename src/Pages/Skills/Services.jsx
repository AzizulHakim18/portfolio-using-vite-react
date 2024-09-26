import React from 'react';
import { FaCode, FaMobileAlt, FaPalette, FaBug, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
    { id: 1, icon: <FaCode className="text-4xl text-teal-600" />, title: 'Web Development', description: 'Building robust and dynamic web applications with modern technologies like React, Node.js, and more.' },
    { id: 2, icon: <FaMobileAlt className="text-4xl text-blue-500" />, title: 'Responsive Design', description: 'Creating responsive layouts that provide a seamless user experience across all devices and screen sizes.' },
    { id: 3, icon: <FaCode className="text-4xl text-green-500" />, title: 'Reusable and Minimal Code', description: 'Writing clean, efficient, and reusable code to enhance maintainability and performance of web applications.' },
    { id: 4, icon: <FaPalette className="text-4xl text-purple-500" />, title: 'Great UI/UX Accessibility', description: 'Designing user interfaces that are not only visually appealing but also accessible to all users, including those with disabilities.' },
    { id: 5, icon: <FaBug className="text-4xl text-red-600" />, title: 'Bug Fixing', description: 'Identifying and resolving issues promptly to ensure smooth functionality and optimal performance of web applications.' },
    { id: 6, icon: <FaCheckCircle className="text-4xl text-yellow-500" />, title: 'Performance Optimization', description: 'Enhancing the speed and efficiency of web applications through performance optimization techniques and best practices.' },
];


const Services = () => {
    return (
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
                            My Services
                        </motion.h2>
                        <motion.p
                            className="max-w-2xl mx-auto  leading-relaxed text-justify"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            I offer a broad range of web development services tailored to meet your project needs. Whether you're looking for a highly functional website, a responsive design, or fixing bugs to improve performance, I’m here to deliver. My goal is to build websites that not only look great but are also easy to use and maintain, ensuring a smooth experience for both users and administrators.
                        </motion.p>
                    </div>
                </section>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {services.map(service => (
                        <div key={service.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
                            <div className="mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;