import React from 'react';

const Project = () => {
    return (
        <section className=" text-white py-16">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="card hover:bg-teal-300 transition duration-200 ease-in-out p-6 shadow-lg">
                        <img src="project_image_url" alt="Project 1" className="mb-4" />
                        <h3 className="text-2xl font-semibold">Project 1</h3>
                        <p className="text-lg mb-4">A brief description of the project.</p>
                        <a href="#" className="text-teal-300 hover:underline">View Project</a>
                    </div>
                    {/* Repeat similar card structure for other projects */}
                </div>
            </div>
        </section>

    );
};

export default Project;