import React from 'react';
import journeyAnimation from '../../../public/animation/journey.json';
import skillsAnimation from '../../../public/animation/skills.json';
import projectsAnimation from '../../../public/animation/projects.json';
import Lottie from 'react-lottie';
import { motion } from 'framer-motion';


const About = () => {

    // Lottie options for animation controls
    const defaultOptions = (animationData) => ({
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    });


    return (
        <div className='w-11/12 md:w-2/3 mx-auto'>

            <section >
                <div className="py-3 text-center">
                    <motion.h2
                        className="text-4xl font-bold mb-6"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        About Me
                    </motion.h2>
                    <motion.p
                        className="max-w-2xl mx-auto  leading-relaxed text-justify"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        I'm a passionate web developer with a background in Petroleum and Mining Engineering. My focus is on creating
                        innovative web solutions using the latest technologies like React, Tailwind, Node, and MongoDB.
                    </motion.p>
                </div>
            </section>

            <section >
                {/* My Journey Section */}
                <div className="md:flex md:flex-row-reverse justify-center items-center gap-6">
                    <div className="md:w-1/2 ">
                        <Lottie options={defaultOptions(journeyAnimation)} height={300} width={300} />
                    </div>
                    {/* Text First on Large, Animation First on Small */}
                    <div className="md:w-1/2 space-y-4 text-center md:text-left ">
                        <h2 className="text-3xl font-bold">From Engineering to Web Development</h2>
                        <p className='text-justify'>
                            I began my professional journey in Petroleum and Mining Engineering. This technical foundation
                            shaped the way I approach problem solving in web development. My transition to full-stack development
                            allowed me to combine technical precision with a passion for creating interactive, user friendly
                            applications.
                        </p>
                    </div>

                </div>

                {/* Skills & Expertise Section */}
                <div className="md:flex justify-center items-center gap-10">
                    {/* Animation First on Large, Text First on Small */}
                    <div className="md:w-1/2">
                        <Lottie options={defaultOptions(skillsAnimation)} height={300} width={300} />
                    </div>
                    <div className="md:w-1/2 space-y-4 text-center md:text-left">
                        <h2 className="text-3xl font-bold">Skills that Define Me</h2>
                        <p className='text-justify'>
                            My expertise lies in the MERN stack, where I build scalable, efficient web applications. From crafting
                            elegant frontend designs with React and Tailwind to developing robust backend systems with Node.js and
                            MongoDB, I continuously strive to integrate new technologies to enhance performance.
                        </p>
                    </div>
                </div>

                {/* Projects & Accomplishments Section */}
                <div className="md:flex md:flex-row-reverse justify-center items-center gap-6">
                    <div className="md:w-1/2 ">
                        <Lottie options={defaultOptions(projectsAnimation)} height={300} width={300} />
                    </div>
                    {/* Animation First on Large, Text First on Small */}
                    <div className="md:w-1/2 ">
                        <h2 className="text-3xl font-bold">Projects & Accomplishments</h2>
                        <p className='text-justify'>
                            Some of my proudest accomplishments include my AI Resume Builder and the Burger Shop project. These
                            projects allowed me to explore full-stack development, integrating Stripe for payments and Clerk and firebase for
                            authentication, all while ensuring a seamless user experience.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default About;