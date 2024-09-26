import React from 'react';
import "./experience.css"
import { motion } from 'framer-motion';

const experienceData = [
    {
        title: 'Internship',
        company: 'CodeAlpha',
        date: 'Sep 15, 2024 - Oct 15, 2024',
        description: 'During this Internship, I gained hands-on experience working on real-world projects, enhancing my skills in React, JavaScript, and responsive design. The internship focused on skill-building and applying concepts through practical tasks. I followed industry best practices, collaborated with team members, and delivered high-quality work under tight deadlines, all of which helped me grow both technically and professionally. This experience further solidified my passion for web development.',
    },
    {
        title: 'Customer Service',
        company: 'Hana Store',
        date: 'Nov 18, 2023 - Apr 30, 2024',
        description: 'I handled client inquiries, resolved order issues, and ensured smooth communication between suppliers and customers. This role helped me develop strong problem-solving and interpersonal skills, as well as the ability to manage customer expectations in a fast-paced environment. It also gave me valuable insight into e-commerce operations and customer relationship management.',
    },
    {
        title: 'Industrial Trainee',
        company: 'BM Energy LTD',
        date: 'Mar 06, 2021 - Mar 12, 2021',
        description: 'Gained insights into LPG storage, HSE practices, and transmission and distribution processes in the energy industry.',
    },
    {
        title: 'Industrial Trainee',
        company: 'Bangladesh Energy Regulatory Commission',
        date: 'Mar 14, 2021 - Mar 21, 2021',
        description: 'Gained insights into the regulation of gas, electricity, and petroleum pricing and policies.',
    },

    {
        title: 'Industrial Trainee',
        company: 'Titas Gas Field, BGFCL',
        date: 'Feb 27, 2021 - Mar 03, 2021',
        description: 'Gained hands-on experience in oil field operations, production, technical processes, and workover optimization.',
    },
];

const Experience = () => {
    return (
        <div className="w-11/12 md:w-2/3 mx-auto">
            {/* Experience Section */}
            <div className="mb-10">
                <section >
                    <div className="py-3 text-center">
                        <motion.h2
                            className="text-4xl font-bold mb-6"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            My Experience
                        </motion.h2>
                        <motion.p
                            className="max-w-2xl mx-auto  leading-relaxed text-justify"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            As a recent graduate, I have focused on building a strong foundation in web development through hands-on projects and internships. My expertise includes working with the MERN stack, creating responsive applications, and solving real-world challenges. During my academic journey and personal projects, I gained experience in developing dynamic user interfaces, integrating APIs, and managing backend systems. While I'm new to the industry, my passion for learning and adapting to new technologies makes me eager to contribute and grow.
                        </motion.p>
                    </div>
                </section>
                <div className="relative">
                    {/* Centered vertical bar */}
                    <div className="timeline-bar"></div>
                    <div className="space-y-20 relative">
                        {experienceData.map((experience, index) => (
                            <div
                                key={index}
                                className={`relative flex items-start ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex-col lg:items-center`}
                            >
                                {/* Circle on the timeline */}
                                <div className="timeline-circle"></div>

                                {/* Experience Text (Alternating sides on large devices) */}
                                <div className={`relative timeline_text w-full ml-4 md:ml-0 lg:max-w-md px-4 ${index % 2 === 0 ? 'lg:text-left lg:pr-16' : 'lg:text-right lg:pl-16'}`}>
                                    <h3 className="text-xl font-semibold">{experience.title}</h3>
                                    <p className="text-gray-600">{experience.company}</p>
                                    <p className="text-gray-400">{experience.date}</p>
                                    <p className="mt-2 text-justify">{experience.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Thesis Section */}
            <div>
                <section >
                    <div className="py-3 text-center">
                        <motion.h2
                            className="text-4xl font-bold mb-6"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Academic Thesis
                        </motion.h2>
                        <motion.p
                            className="max-w-2xl mx-auto  leading-relaxed text-justify"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            My academic background in Petroleum and Mining Engineering allowed me to dive into cutting edge research, where I explored innovative solutions in the field. My thesis involved rigorous analysis and practical applications, helping me sharpen my analytical and problem solving skills that I now bring to the world of web development.
                        </motion.p>
                    </div>
                </section>
                <div className="p-4 bg-white shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Thesis Title</h3>
                    <p className="text-gray-600 mb-2">Description of the thesis. A brief overview of the research, findings, and significance.</p>
                    <a href="link-to-journal" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Read the published journal</a>
                </div>
            </div>
        </div>
    );
};

export default Experience;