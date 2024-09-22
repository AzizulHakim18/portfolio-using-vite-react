
import React from 'react';

const FullStack = () => {


    return (
        <div>

            <h1 className='text-2xl font-bold py-16'>Full Stack Projects:</h1>


            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className="flex relative justify-center items-center">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://i.ibb.co.com/9hzHzNb/burger-shop.png" />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-lg title-font font-medium  mb-1">Burger Shop</h2>
                        <h1 className="title-font font-medium text-indigo-500 mb-3">Ract Js || Tailwindcss || React Router Dom || Clerk || Node Js || Express Js || MongoDB || RailWay</h1>
                        <p className='text-justify'>
                            <span className='text-sm font-bold text-gray-700'>Key Features: </span> Clerk Authentication, Private Routing ,Pagination for Menu Items, Search Functionality for Burgers,Dynamic Shopping Cart System, Real-Time Order Updates, Role-Based Access Control (Admin & User), Order Management System, Admin Analytics Dashboard, Customer Review System with Real-Time Feedback, Responsive Design with Fancy Animations
                        </p>
                        <div className='flex justify-between'>
                            <div>
                                <button className='btn btn-outline mx-1'>Client Side</button>
                                <button className='btn btn-outline'>Server Side</button>
                            </div>
                            <button className='btn btn-outline'>Preview</button>
                        </div>
                    </div>
                </div>
                <div className="flex relative justify-center items-center">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://i.ibb.co.com/C5J4zQX/burger-shop-1.png" />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-lg title-font font-medium  mb-1">Ai Resume Builder</h2>
                        <h1 className="title-font font-medium text-indigo-500 mb-3">Ract Js || Tailwindcss || React Router Dom || Clerk || Strapi || Render || Gemeni Api</h1>
                        <p className='text-justify'>
                            <span className='text-sm font-bold text-gray-700'>Key Features: </span> Clerk Authentication,Private Route,AI-Generated Resume Summaries,Dynamic Resume Preview,Rich Text Editor for Experience Section,AI-Generated Bullet Points,Dashboard for Resume Management(View,Edit,Delte,Download),Real-Time Form Updates,Multiple Sections for Resume Building,Mobile-Friendly Design,Data Persistence with Strapi.
                        </p>
                        <div className='flex justify-between'>
                            <div>
                                <button className='btn btn-outline mx-1'>Client Side</button>
                                <button className='btn btn-outline'>Server Side</button>
                            </div>
                            <button className='btn btn-outline'>Preview</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullStack;