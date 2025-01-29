import './Navbar.scss';
import {Link} from "react-router-dom";
import {FaSignInAlt, FaBars} from 'react-icons/fa';
import {useState} from "react";
import Sidenav from "./Sidenav.tsx";
import {AnimatePresence} from "framer-motion";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false)

    function openMenu() {
        setMenuOpen(true)
    }

    return (
        <>
            <nav className="absolute px-4 pr-14 w-full flex md:justify-between justify-center items-center">
                <Link to="/">
                    <div className="mx-10 flex items-center justify-center">
                        <img src="src/assets/images/logo.png" alt="logo" className="h-20 w-20"/>
                        <p id="logo-text" className="font-semibold">
                            CAN
                        </p>
                    </div>
                </Link>
                <div className="hidden md:flex items-center justify-evenly">
                    <ul className="flex gap-4">
                        <li className="mx-2">
                            <Link to="/services">
                                <p className="font-light xl:text-xl 2xl:text-2xl 3xl:text-3xl hover:text-amber-500 transition">Services</p>
                            </Link>
                        </li>
                        <li className="mx-2">
                            <Link to="/blog">
                                <p className="font-light xl:text-xl 2xl:text-2xl 3xl:text-3xl hover:text-amber-500 transition">Blog</p>
                            </Link>
                        </li>
                        <li className="mx-2">
                            <Link to="/contact">
                                <p className="font-light xl:text-xl 2xl:text-2xl 3xl:text-3xl hover:text-amber-500 transition">Contact</p>
                            </Link>
                        </li>
                    </ul>
                    <Link to="/login">
                        <div className="hidden md:flex flex-row justify-center gap-2 ml-6  hover:text-amber-500 transition">
                            <FaSignInAlt className="text-2xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl"/>
                            <p className="text-xl 2xl:text-2xl 3xl:text-3xl font-semibold">Log in</p>
                        </div>
                    </Link>
                </div>
                <button className="absolute block md:hidden cursor-pointer right-5" onClick={openMenu}>
                    <FaBars className="text-2xl"/>
                </button>
            </nav>
            <AnimatePresence>
                {isMenuOpen && <Sidenav isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />}
            </AnimatePresence>
        </>

    );
};

export default Navbar;