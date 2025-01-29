// src/pages/sections/Landing/Landing.tsx
import './Landing.scss';
import {motion} from 'framer-motion';
import {Tilt} from 'react-tilt'

const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 15,     // max tilt rotation (degrees)
    perspective: 2500,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.05,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 100,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const Landing = () => {
    return (
        <section id="landing" className="flex">
            <div id="landing-bg"/>
            <div id="bg-overlay"/>
            <div className="flex justify-evenly items-center w-full">
                <div className="hidden xl:block mx-6">
                    <Tilt options={defaultOptions} style={{height: 600, width: 600}}>
                        <img alt="logo" className="w-full" src="src/assets/images/can-logo.png"/>
                    </Tilt>
                </div>
                <motion.div
                    className="landing-title-container px-7 mx-4">
                    <motion.p
                        className="title text-5xl leading-[1.5] py-5 font-bold md:text-7xl"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 2}}
                    >
                        CAN trading solutions
                    </motion.p>
                    <div className="flex flex-col px-2 justify-center font-light text-3xl md:text-4xl">
                        <motion.p
                            className="py-4"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1, delay: 1}}
                        >
                            Built on precision
                        </motion.p>
                        <motion.p
                            className="py-4"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1, delay: 1.5}}
                        >
                            perfected with experience.
                        </motion.p>
                    </div>
                </motion.div>
            </div>
            <button
                className="cursor-pointer border-2 rounded-full w-[50px] h-[50px] absolute bottom-[10px] hover:scale-115 transition-transform ease-in-out"
                onClick={() => window.alert("works")}>
                ↓
            </button>
        </section>
    );
};

export default Landing;