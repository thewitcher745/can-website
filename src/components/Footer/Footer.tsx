import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-5">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-5 md:mb-0">
                        <h4 className="text-2xl font-bold mb-2">Contact Us</h4>
                        <p>Email: CAN@tradingsolutions.com</p>
                        <p>Phone: +1 (123) 456-7890</p>
                        <p>Address: 123 Trading St, Finance City, USA</p>
                    </div>
                    <div className="w-full md:w-1/3 mb-5 md:mb-0">
                        <h4 className="text-2xl font-bold mb-2">Follow Us</h4>
                        <div className="flex space-x-4 flex-wrap">
                            <a href="#" className="hover:text-blue-500 transition-colors flex items-center my-2">
                                <FaFacebook className="mr-2" /> Facebook
                            </a>
                            <a href="#" className="hover:text-blue-500 transition-colors flex items-center my-2">
                                <FaTwitter className="mr-2" /> Twitter
                            </a>
                            <a href="#" className="hover:text-blue-500 transition-colors flex items-center my-2">
                                <FaLinkedin className="mr-2" /> LinkedIn
                            </a>
                            <a href="#" className="hover:text-blue-500 transition-colors flex items-center my-2">
                                <FaInstagram className="mr-2" /> Instagram
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h4 className="text-2xl font-bold mb-2">About Us</h4>
                        <p>We are a leading trading company providing top-notch services to traders worldwide. Our mission is to empower traders with the tools and knowledge they need to succeed in the financial markets.</p>
                    </div>
                </div>
                <div className="text-center mt-10">
                    <p>&copy; 2025 CAN Trading Solutions Co. Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;