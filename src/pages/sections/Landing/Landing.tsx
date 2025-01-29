// src/pages/sections/Landing/Landing.tsx
import './Landing.scss';
import {motion} from 'framer-motion';

const Landing = () => {
    return (
        <section id="landing" className="flex">
            <div id="landing-bg"/>
            <div id="bg-overlay"/>
            <div className="flex justify-start w-full h-full items-baseline">
                <div className="landing-title-container px-7 mx-10">
                    <motion.p
                        className="title text-5xl leading-[1.5] py-5 font-light md:text-7xl"
                        initial={{opacity: 0, translateX: -80}}
                        animate={{opacity: 1, translateX: 0}}
                        transition={{duration: 1, ease: "easeInOut"}}
                    >
                        CAN trading solutions
                    </motion.p>
                    <div className="flex flex-col px-2 justify-center font-light text-3xl md:text-4xl">
                        <motion.p
                            className="py-4"
                            initial={{opacity: 0, translateX: -80}}
                            animate={{opacity: 1, translateX: 0}}
                            transition={{duration: 1, delay: 0.3, ease: "easeInOut"}}
                        >
                            Built on precision
                        </motion.p>
                        <motion.p
                            className="py-4"
                            initial={{opacity: 0, translateX: -60}}
                            animate={{opacity: 1, translateX: 0}}
                            transition={{duration: 1, delay: 0.6, ease: "easeInOut"}}
                        >
                            perfected with experience.
                        </motion.p>
                    </div>
                    <motion.button
                        className="cursor-pointer bg-amber-500 border-1 text-gray-800 font-light text-xl px-6 py-4 mx-2 mt-10 rounded-md hover:bg-transparent hover:border-1 hover:border-gray-100 hover:text-gray-100"
                        initial={{opacity: 0, translateX: -60}}
                        animate={{opacity: 1, translateX: 0}}
                        transition={{duration: 1, delay: 1, ease: "easeInOut"}}>
                        Learn more
                    </motion.button>
                </div>
            </div>

        </section>
    );
};

export default Landing;