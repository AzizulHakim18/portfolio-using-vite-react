import React from 'react';

const ReactProject = () => {
    return (
        <div>

            <h1 className='text-2xl font-bold py-16'>React Projects:</h1>


            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className="flex relative justify-center items-center">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://i.ibb.co.com/hgRxyWF/burger-shop-3.png" />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-lg title-font font-medium  mb-1">Game Buddy</h2>
                        <h1 className="title-font font-medium text-indigo-500 mb-3">Ract Js || Tailwindcss || React Router Dom || RAWG API || Three Js</h1>
                        <p className='text-justify'>
                            <span className='text-sm font-bold text-gray-700'>Key Features: </span>This project is built using React JS, Vite, Tailwind CSS, and Three.js for 3D elements, ensuring a visually rich and responsive design. It features dark/light theme toggles, search functionality, and genre filtering. The application integrates with the RAWG API to dynamically fetch and display game listings. With nested components and React hooks, it handles complex component structures. The site is fully responsive, adapting to different screen sizes while incorporating interactive 3D visuals for an enhanced user experience.</p>
                        <div className='flex justify-between'>
                            <div>
                                <button className='btn btn-outline mx-1'>Client Side</button>
                            </div>
                            <button className='btn btn-outline'>Preview</button>
                        </div>
                    </div>
                </div>
                <div className="flex relative justify-center items-center">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://i.ibb.co.com/552hqNh/burger-shop-6.png" />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-lg title-font font-medium  mb-1">Ema Jhon</h2>
                        <h1 className="title-font font-medium text-indigo-500 mb-3">Ract Js || Tailwindcss || React Router Dom </h1>
                        <p className='text-justify'>
                            <span className='text-sm font-bold text-gray-700'>Key Features: </span>The Ema Jhon website includes a React Router DOM setup for smooth navigation between pages, along with a local storage system for persisting cart data between sessions. Users can view items dynamically displayed in a cart section on the right side of the page. The project implements JSON data to populate the product listings. A dynamic cart system allows users to confirm orders, and once an order is confirmed, items are removed from the cart. The project also utilizes context API for state management across the application, ensuring consistent data flow.</p>
                        <div className='flex justify-between'>
                            <div>
                                <button className='btn btn-outline mx-1'>Client Side</button>
                            </div>
                            <button className='btn btn-outline'>Preview</button>
                        </div>
                    </div>
                </div>
                <div className="flex relative justify-center items-center">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://i.ibb.co.com/tBMd6P2/burger-shop-2.png" />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-lg title-font font-medium  mb-1">Cafe Stone</h2>
                        <h1 className="title-font font-medium text-indigo-500 mb-3">Ract Js || Tailwindcss || React Router Dom || Clerk || Strapi || Render || Gemeni Api</h1>
                        <p className='text-justify'>
                            <span className='text-sm font-bold text-gray-700'>Key Features: </span>The Cafe Stone website includes a fully responsive design with several dynamic features. Users can view all menu items, with a private routing system restricting certain pages to authenticated users. The login system allows account creation and login. A dynamic cart system enables adding items, adjusting quantities, and placing orders, with double filtering by category and dietary needs. Other key functionalities include a search option, dynamic quantity validation to prevent over-ordering, item detail modals, and a loading system for fetching backend data.
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

export default ReactProject;