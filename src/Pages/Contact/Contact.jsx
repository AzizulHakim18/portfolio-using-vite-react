import { motion } from 'framer-motion';
import contactAnimation from "../../assets/animation/contact.json"
import Lottie from 'react-lottie';

const Contact = () => {


    // Animation configurations
    const formVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    const animationVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const defaultOptions = (animationData) => ({
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    });

    return (
        <div className='w-11/12 md:w-2/3 mx-auto'>
            <section className=" text-gray-800 py-12 px-4 md:px-16">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold ">
                        Contact Me for Collaboration
                    </h2>
                    <p className=" mt-3 text-lg">
                        If you're interested in working together or have any inquiries, feel free to reach out. Let's build something amazing together!
                    </p>
                </div>

                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">

                    {/* Form Section */}
                    <motion.div
                        className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg"
                        variants={formVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <form className="flex flex-col gap-4"
                            action="https://getform.io/f/adryzdwa" method="POST"

                        >

                            <div className="form-control">
                                <label className="label text-gray-800 font-bold">Name</label>
                                <input
                                    type="text"
                                    name='name'

                                    placeholder="Enter your name"
                                    className="input input-bordered "

                                />
                            </div>
                            <div className="form-control">
                                <label className="label text-gray-800 font-bold">Email</label>
                                <input
                                    type="email"
                                    name='email'

                                    placeholder="Enter your email"
                                    className="input input-bordered "

                                />
                            </div>
                            <div className="form-control">
                                <label className="label text-gray-800 font-bold">Message</label>
                                <textarea
                                    name='message'

                                    placeholder="Your message..."
                                    className="textarea textarea-bordered"

                                ></textarea>
                            </div>
                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="btn btn-outline w-full  transition"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </motion.div>
                    {/* Lottie Animation */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        variants={animationVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <Lottie options={defaultOptions(contactAnimation)} height={300} width={300} />
                    </motion.div>

                </div>
            </section>
        </div>

    );
};

export default Contact;