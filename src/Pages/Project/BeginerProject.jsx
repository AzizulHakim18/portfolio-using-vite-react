import React from 'react';

const BeginerProject = () => {
    return (
        <div>

            <h1 className='text-2xl font-bold py-16'>Beginer Projects:</h1>


            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className="flex relative justify-center items-center">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://i.ibb.co.com/5KQPF6s/burger-shop-4.png" />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-lg title-font font-medium  mb-1">Countdown</h2>
                        <h1 className="title-font font-medium text-indigo-500 mb-3">HTML || CSS || Tailwind || Javascript</h1>
                        <p className='text-justify'>
                            <span className='text-sm font-bold text-gray-700'>Key Features: </span> This stopwatch project is built using HTML, JavaScript, and Tailwind CSS for a clean, modern interface. The timer dynamically displays milliseconds, seconds, and minutes, allowing users to start, stop, and reset with ease. The project features a real-time update system with smooth transitions between time units, ensuring accurate tracking. It incorporates a responsive design using Tailwind CSS, making it adaptable to various screen sizes and devices. The layout emphasizes simplicity and user-friendliness, offering an intuitive experience for time tracking tasks.
                        </p>
                        <div className='flex justify-between'>
                            <div>
                                <button className='btn btn-outline mx-1'>Client Side</button>
                            </div>
                            <button className='btn btn-outline'>Preview</button>
                        </div>
                    </div>
                </div>
                <div className="flex relative justify-center items-center">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://i.ibb.co.com/p32s46G/burger-shop-5.png" />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-lg title-font font-medium  mb-1">Particle</h2>
                        <h1 className="title-font font-medium text-indigo-500 mb-3">HTML || CSS || Javascript</h1>
                        <p className='text-justify'>
                            <span className='text-sm font-bold text-gray-700'>Key Features: </span>This project implements a fancy background effect using particles.js, integrated into the website for a visually appealing design. The particles.json file defines the configuration for particle movements, creating dynamic animations that respond to user interactions. The JavaScript code seamlessly loads these particle animations, ensuring smooth functionality and integration. The background adapts to different screen sizes while maintaining performance and visual quality. Tailored to provide an immersive experience.
                        </p>
                        <div className='flex justify-between'>
                            <div>
                                <button className='btn btn-outline mx-1'>Client Side</button>
                            </div>
                            <button className='btn btn-outline'>Preview</button>
                        </div>
                    </div>
                </div>
                <div className="flex relative justify-center items-center">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://i.ibb.co.com/Gcv9V4T/burger-shop-7.png" />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-lg title-font font-medium  mb-1">Money Bank</h2>
                        <h1 className="title-font font-medium text-indigo-500 mb-3">HTML || CSS || Javascript</h1>
                        <p className='text-justify'>
                            <span className='text-sm font-bold text-gray-700'>Key Features: </span> This project features a simple and intuitive money management system built with HTML, CSS, and JavaScript. It allows users to input their income and categorize expenses, including food, rent, and other costs, and calculates the total expenses and remaining balance. A "Save" feature enables users to specify a percentage of income to save, which updates the saving amount and the remaining balance dynamically. The responsive design ensures a seamless user experience, while the JavaScript provides real-time calculations.
                        </p>
                        <div className='flex justify-between'>
                            <div>
                                <button className='btn btn-outline mx-1'>Client Side</button>
                            </div>
                            <button className='btn btn-outline'>Preview</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeginerProject;