import React from 'react';

const Skills = () => {
    return (
        <section className="bg-[#3E606F] text-white py-16">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="card hover:bg-teal-300 transition duration-200 ease-in-out p-6">
                        <h3 className="text-2xl font-semibold mb-4">JavaScript</h3>
                        <p className="text-lg">Experienced in building complex front-end interactions and dynamic web apps.</p>
                    </div>
                    <div className="card hover:bg-teal-300 transition duration-200 ease-in-out p-6">
                        <h3 className="text-2xl font-semibold mb-4">React.js</h3>
                        <p className="text-lg">Expert in creating component-based architecture and scalable React applications.</p>
                    </div>
                    <div className="card hover:bg-teal-300 transition duration-200 ease-in-out p-6">
                        <h3 className="text-2xl font-semibold mb-4">Node.js</h3>
                        <p className="text-lg">Backend experience with building RESTful APIs and handling server-side logic.</p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Skills;