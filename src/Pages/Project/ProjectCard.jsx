import React from 'react';
import { motion } from 'framer-motion';


const ProjectCard = (project) => {

    const { title, description, imageUrl, liveUrl, codeUrl } = project

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
        >
            {/* Image Section */}
            <motion.img
                src={imageUrl}
                alt={title}
                className="w-full h-48 object-cover"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            />

            {/* Card Content */}
            <div className="px-6 py-4">
                <motion.h2
                    className="font-bold text-xl mb-2 text-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    {title}
                </motion.h2>

                <motion.p
                    className="text-gray-300 text-base"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    {description}
                </motion.p>
            </div>

            {/* Buttons Section */}
            <div className="px-6 pt-4 pb-2 flex justify-between">
                <motion.a
                    href={codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-full transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Source Code
                </motion.a>
            </div>
        </motion.div>
    );
};

export default ProjectCard;