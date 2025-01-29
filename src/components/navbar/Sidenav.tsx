import './Navbar.scss';
import {Link} from "react-router-dom";
import {IoIosClose} from "react-icons/io";
import {motion} from 'framer-motion';
import {FaSignInAlt} from "react-icons/fa";

const Sidenav = ({isMenuOpen, setMenuOpen}) => {
    if (!isMenuOpen) return null;

    function closeSidebar() {
        setMenuOpen(false)
    }

    return (
        <motion.nav className="absolute right-0 w-full bg-slate-800 h-[100vh]"
                    initial={{y: '-100%'}}
                    animate={{y: 0}}
                    exit={{y: '-100%'}}
                    transition={{duration: 0.45, ease: "easeInOut"}}>
            <button className="absolute cursor-pointer text-gray-50 bg-slate-800" onClick={closeSidebar}>
                <IoIosClose className="text-5xl"/>
            </button>
            <div className="bg-slate-800">
                <Link to="/" onClick={closeSidebar}>
                    <div className="mx-10 flex items-center justify-center">
                        <img src="src/assets/images/logo.png" alt="logo" className="h-20 w-20"/>
                        <p id="logo-text" className="font-semibold">
                            CAN
                        </p>
                    </div>
                </Link>
                <div className="border-1 border-gray-500 mx-6 my-6"/>
                <div className="flex h-full md:hidden">
                    <ul className="flex flex-col gap-4 w-full">
                        <li className="mx-2 text-2xl text-center">
                            <Link to="/services" onClick={closeSidebar}>
                                <p className="font-light">Services</p>
                            </Link>
                        </li>
                        <li className="mx-2 text-2xl text-center">
                            <Link to="/blog" onClick={closeSidebar}>
                                <p className="font-light">Blog</p>
                            </Link>
                        </li>
                        <li className="mx-2 text-2xl text-center">
                            <Link to="/contact" onClick={closeSidebar}>
                                <p className="font-light">Contact</p>
                            </Link>
                        </li>
                        <div className="border-1 border-gray-500 mx-6 my-3"/>
                        <li>
                            <Link to="/login" onClick={closeSidebar}>
                                <div className="flex md:hidden flex-row justify-center gap-2">
                                    <FaSignInAlt className="text-2xl"/>
                                    <p className="text-xl font-semibold">Log in</p>
                                </div>
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </motion.nav>
    );
};

export default Sidenav;