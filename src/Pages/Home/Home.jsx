import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='w-11/12 md:w-2/3 mx-auto'>
            <section className="md:flex md:flex-row-reverse justify-center items-center gap-6 py-20 ">

                {/* Profile Picture */}
                <div className="relative flex justify-center lg:justify-end mb-8 md:mb-0">
                    <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-shadow hover:shadow-cyan-500 duration-500 ease-in-out">
                        <img src="https://i.ibb.co.com/Hr6qGPf/profile.png" alt="Azizul-Hakim-Rony" className="object-cover w-full h-full hover:scale-105 transition-transform duration-500 ease-in-out" />
                    </div>
                </div>

                {/* Text Content */}
                <div className="space-y-5 text-center md:text-left p-10">
                    <h1 className="text-2xl md:text-4xl font-bold ">Azizul Hakim Rony</h1>
                    <h3 className="text-lg">Frontend Developer with expertise in MERN stack development.</h3>
                    <p className='text-justify'>With a background in Petroleum and Mining Engineering, I bring a unique perspective to web development, blending technical precision with creativity. My journey in web development began with a passion for creating user friendly, responsive websites and applications. I’ve honed my skills in the MERN stack, building full-stack projects that are both functional and scalable. I’m committed to continuous learning and strive to integrate new technologies into my work.</p>
                    <div className="flex justify-center lg:justify-start space-x-4">
                        <Link to="#hire" className="btn btn-outline rounded-s-lg">Hire Me</Link>
                        <Link to="#download" className="btn btn-outline">Download CV</Link>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center lg:justify-start space-x-4 mt-4">
                        <Link to="#" className="text-xl border rounded-full border-zinc-900 hover:border-cyan-500 p-2 hover:bg-cyan-500 hover:text-white shadow-lg hover:shadow-cyan-500 transition-transform duration-300 ease-in-out transform hover:scale-110"><FaLinkedin /></Link>
                        <Link to="#" className="text-xl border rounded-full border-zinc-900 hover:border-cyan-500 p-2 hover:bg-cyan-500 hover:text-white shadow-lg hover:shadow-cyan-500 transition-transform duration-300 ease-in-out transform hover:scale-110"><IoLogoGithub /></Link>
                        <Link to="#" className="text-xl border rounded-full border-zinc-900 hover:border-cyan-500 p-2 hover:bg-cyan-500 hover:text-white shadow-lg hover:shadow-cyan-500 transition-transform duration-300 ease-in-out transform hover:scale-110"><FaFacebook /></Link>
                        <Link to="#" className="text-xl border rounded-full border-zinc-900 hover:border-cyan-500 p-2 hover:bg-cyan-500 hover:text-white shadow-lg hover:shadow-cyan-500 transition-transform duration-300 ease-in-out transform hover:scale-110"><FaInstagram /></Link>
                    </div>
                </div>

            </section>


        </div>
    );
};

export default Home;