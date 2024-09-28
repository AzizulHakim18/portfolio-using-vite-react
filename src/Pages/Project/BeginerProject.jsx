import React from 'react';
import { Link } from 'react-router-dom';

const BeginerProject = () => {
    return (
        <div>

            <h1 className='text-2xl font-bold py-16'>Beginer Projects:</h1>


            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className="flex relative justify-center items-center">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://i.ibb.co.com/6YRhXKn/burger-shop.png" />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-lg title-font font-medium  mb-1">Portfolio</h2>
                        <h1 className="title-font font-medium text-indigo-500 mb-3">HTML || CSS || Javascript</h1>
                        <p className='text-justify'>
                            <span className='text-sm font-bold text-gray-700'>Key Features: </span>
                            This project is a modern and responsive personal portfolio website designed for professionals to showcase their skills, experience, and services. Key features include a sleek hamburger menu for easy navigation on mobile devices, responsive design that adapts to different screen sizes, and smooth animations for an engaging user experience. The portfolio highlights sections like About Me, Services, Education, Testimonials, and Contact with clean layout and stylish UI. JavaScript is used to enhance interactivity, while CSS ensures a visually appealing design with seamless transitions. The project is ideal for professionals looking to create a standout online presence.
                        </p>
                        <div className='flex justify-between'>
                            <div>
                                <Link to="https://github.com/AzizulHakim18/codealpha_portfolio" className='btn btn-outline mx-1'>Client Side</Link>
                            </div>
                            <Link to="https://glittery-sherbet-6d33d9.netlify.app/" className='btn btn-outline'>Preview</Link>
                        </div>
                    </div>
                </div>
                <div className="flex relative justify-center items-center">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://i.ibb.co.com/bzP21M3/burger-shop-1.png" />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-lg title-font font-medium  mb-1">Photon</h2>
                        <h1 className="title-font font-medium text-indigo-500 mb-3">HTML || CSS || Javascript</h1>
                        <p className='text-justify'>
                            <span className='text-sm font-bold text-gray-700'>Key Features: </span>
                            This project is a filterable portfolio website that allows users to browse images categorized into various sections like Landscape, Portrait, Wildlife, Urban, and Macro. It features dynamic filtering buttons that update the displayed content in real-time, offering a smooth user experience. The project uses HTML, CSS, and JavaScript (ES6), with data being loaded dynamically from a JSON file. Each category button has an active state for visual feedback, improving user interaction. The design is fully responsive, ensuring it looks great on all devices, with added hover animations for a modern touch.The project is ideal for professionals looking to create a standout online presence.
                        </p>
                        <div className='flex justify-between'>
                            <div>
                                <Link to="https://github.com/AzizulHakim18/CodeAlpha_photon" className='btn btn-outline mx-1'>Client Side</Link>
                            </div>
                            <Link to="https://lively-bunny-dbc48c.netlify.app/" className='btn btn-outline'>Preview</Link>
                        </div>
                    </div>
                </div>
                <div className="flex relative justify-center items-center">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://i.ibb.co.com/WGbrFTk/burger-shop-2.png" />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-lg title-font font-medium  mb-1">Calculator</h2>
                        <h1 className="title-font font-medium text-indigo-500 mb-3">HTML || CSS || Javascript</h1>
                        <p className='text-justify'>
                            <span className='text-sm font-bold text-gray-700'>Key Features: </span>
                            The Fancy Calculator project is a stylish, fully functional calculator that performs basic arithmetic operations like addition, subtraction, multiplication, and division. It also includes advanced features like percentage and square root calculations, along with memory functions (M+ and MR). The calculator boasts a modern, responsive design with smooth animations and hover effects, making it user-friendly across all devices. With error handling for invalid operations and a sleek UI, this project is perfect for daily use, learning web development, and showcasing front-end skills.
                        </p>
                        <div className='flex justify-between'>
                            <div>
                                <Link to="https://github.com/AzizulHakim18/codeAlpha_calculator" className='btn btn-outline mx-1'>Client Side</Link>
                            </div>
                            <Link to="https://ornate-dodol-1a9a14.netlify.app/" className='btn btn-outline'>Preview</Link>
                        </div>
                    </div>
                </div>
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
                                <Link to="https://github.com/AzizulHakim18/CountDown" className='btn btn-outline mx-1'>Client Side</Link>
                            </div>
                            <Link to="https://glittery-sherbet-6d33d9.netlify.app/" className='btn btn-outline'>Preview</Link>
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
                                <Link to="https://github.com/AzizulHakim18/particle" className='btn btn-outline mx-1'>Client Side</Link>
                            </div>
                            <Link to="https://brilliant-biscochitos-91a6d9.netlify.app/" className='btn btn-outline'>Preview</Link>
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
                                <Link to="https://github.com/AzizulHakim18/money-bank" className='btn btn-outline mx-1'>Client Side</Link>
                            </div>
                            <Link to="https://stalwart-centaur-0bd303.netlify.app/" className='btn btn-outline'>Preview</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeginerProject;