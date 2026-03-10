import { FaFacebook, FaTwitter, FaLinkedin, FaBehance } from 'react-icons/fa';
import logo from '../assets/images/white-logo.png';
import { Link } from "react-router-dom";
const Footer = () => {
    function scrolltop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <footer className="bg-[#2a2a2a] text-white">
            <div className="flex w-full flex-col md:flex-row text-center justify-center p-5 lg:text-left border-b-2 gap-5 border-gray-400">
                <div className='m-5'>
                    <div className="logo pl-4">
                        <img src={logo} alt="hexashop ecommerce templatemo" />
                    </div>
                    <ul>
                        <li className='m-4'>
                            <Link to='#' onClick={scrolltop}>
                                16501 Collins Ave, Sunny Isles Beach,<br /> FL 33160, United States
                            </Link>
                        </li>
                        <li className='m-4'>
                            <Link to='#' onClick={scrolltop}>
                                hexashop@company.com
                            </Link>
                        </li>
                        <li className='m-4'>
                            <Link to='#' onClick={scrolltop}>
                                010-020-0340
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='m-5'>
                    <h4 className='m-4 font-bold'>Shopping &amp; Categories</h4>
                    <ul>
                        <li className='m-4'>
                            <Link to='#' onClick={scrolltop}>
                                Men’s Shopping
                            </Link>
                        </li>
                        <li className='m-4'>
                            <Link to='#' onClick={scrolltop}>
                                Women’s Shopping
                            </Link>
                        </li>
                        <li className='m-4'>
                            <Link to='#' onClick={scrolltop}>
                                Kid's Shopping
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='m-5'>
                    <h4 className='m-4 font-bold'>Useful Links</h4>
                    <ul>
                        <li className='m-4'>
                            <Link onClick={scrolltop} to='/'>Homepage</Link>
                        </li>
                        <li className='m-4'>
                            <Link onClick={scrolltop} to='/about'>About Us</Link>
                        </li>
                        <li className='m-4'>
                            <Link onClick={scrolltop} to='#'>Help</Link>
                        </li>
                        <li className='m-4'>
                            <Link onClick={scrolltop} to='/contact'>Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className='m-5'>
                    <h4 className='m-4 font-bold'>Help &amp; Information</h4>
                    <ul>
                        <li className='m-4'>
                            <Link onClick={scrolltop} to='#'>Help</Link>
                        </li>
                        <li className='m-4'>
                            <Link onClick={scrolltop} to='#'>FAQ's</Link>
                        </li>
                        <li className='m-4'>
                            <Link onClick={scrolltop} to='#'>Shipping</Link>
                        </li>
                        <li className='m-4'>
                            <Link onClick={scrolltop} to='#'>Tracking ID</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-col p-5 justify-center items-center'>
                <p className='text-center'>
                    Copyright © 2022 HexaShop Co., Ltd. All Rights Reserved.
                </p>

                <p>
                    Design: <a className='text-[#cff]' href="">TemplateMo</a>
                </p>

                <p className='text-sm text-gray-300'>
                    Created by Syed Hassan
                </p>

                <ul className="flex gap-4 justify-center mt-4">
                    {/* Facebook Icon */}
                    <li className='text-[#cff] hover:text-[#c66] transition duration-400'>
                        <Link onClick={scrolltop} to='#'>
                            <FaFacebook size={24} />
                        </Link>
                    </li>

                    {/* Twitter Icon */}
                    <li className='text-[#cff] hover:text-[#c66] transition duration-400'>
                        <Link onClick={scrolltop} to='#'>
                            <FaTwitter size={24} />
                        </Link>
                    </li>

                    {/* LinkedIn Icon */}
                    <li className='text-[#cff] hover:text-[#c66] transition duration-400'>
                        <Link onClick={scrolltop} to='#'>
                            <FaLinkedin size={24} />
                        </Link>
                    </li>

                    {/* Behance Icon */}
                    <li className='text-[#cff] hover:text-[#c66] transition duration-400'>
                        <Link onClick={scrolltop} to='#'>
                            <FaBehance size={24} />
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
