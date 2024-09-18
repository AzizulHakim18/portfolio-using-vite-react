import React from 'react';

const Contact = () => {
    return (
        <section className=" text-white py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
                <form className="w-full md:w-1/2 mx-auto">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full mb-4 bg-transparent" />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full mb-4 bg-transparent" />
                    <textarea
                        placeholder="Your Message"
                        className="textarea textarea-bordered w-full mb-4 bg-transparent"></textarea>
                    <button
                        type="submit"
                        className="btn btn-outline hover:bg-teal-300 hover:text-black transition duration-200 ease-in-out">
                        Send Message
                    </button>
                </form>
            </div>
        </section>

    );
};

export default Contact;