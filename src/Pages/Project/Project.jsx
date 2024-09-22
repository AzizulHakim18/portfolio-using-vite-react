import React from 'react';
import { motion } from 'framer-motion';
import FullStack from './FullStack';
import ReactProject from './ReactProject';
import BeginerProject from './BeginerProject';




const Project = () => {
    return (

        <div className="w-11/12 md:w-2/3 mx-auto">
            <section >
                <div className="py-3 text-center">
                    <motion.h2
                        className="text-4xl font-bold mb-6"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        My Projects
                    </motion.h2>
                    <motion.p
                        className="max-w-2xl mx-auto  leading-relaxed text-justify"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Since 2022, I have developed over 60 projects, including 10+ full-stack applications utilizing technologies like MongoDB, Node.js, and Firebase. My work spans across HTML, CSS, and JavaScript, with 15+ projects built using React. Each project reflects my focus on building responsive, user friendly web applications, with clean, reusable code and a strong understanding of modern development practices.
                    </motion.p>
                </div>
            </section>


            <FullStack></FullStack>
            <ReactProject></ReactProject>
            <BeginerProject></BeginerProject>
        </div>


    );
};

export default Project;