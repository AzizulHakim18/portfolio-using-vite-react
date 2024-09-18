import React from 'react';
import "./experience.css"
const experienceData = [
    {
        title: 'Industrial Trainee',
        company: 'Titas Gas Field, BGFCL',
        date: 'Feb 27, 2021 - Mar 03, 2021',
        description: 'Gained hands-on experience in oil field operations, production, technical processes, and workover optimization.',
    },
    {
        title: 'Industrial Trainee',
        company: 'Bangladesh Energy Regulatory Commission',
        date: 'Mar 14, 2021 - Mar 21, 2021',
        description: 'Gained insights into the regulation of gas, electricity, and petroleum pricing and policies.',
    },
    {
        title: 'Industrial Trainee',
        company: 'BM Energy LTD',
        date: 'Mar 06, 2021 - Mar 12, 2021',
        description: 'Gained insights into LPG storage, HSE practices, and transmission and distribution processes in the energy industry.',
    },
];

const Experience = () => {
    return (
        <div className="w-11/12 md:w-2/3 mx-auto">
            {/* Experience Section */}
            <div className="mb-10">
                <h2 className="text-3xl font-bold text-center m-8 underline decoration-wavy  decoration-cyan-500">Work Experience</h2>
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
                                <div className={`relative w-full ml-4 md:ml-0 lg:max-w-md px-4 ${index % 2 === 0 ? 'lg:text-left lg:pr-16' : 'lg:text-right lg:pl-16'}`}>
                                    <h3 className="text-xl font-semibold">{experience.title}</h3>
                                    <p className="text-gray-600">{experience.company}</p>
                                    <p className="text-gray-400">{experience.date}</p>
                                    <p className="mt-2">{experience.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Thesis Section */}
            <div>
                <h2 className="text-3xl font-bold text-center m-8 underline decoration-wavy  decoration-cyan-500">Academic Thesis</h2>
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