import service01 from '../assets/images/service-01.jpg';
import { FaFacebook, FaTwitter, FaLinkedin, FaBehance, FaQuoteLeft } from 'react-icons/fa';
const AboutUs = () => {
    return (
        <div>
            <div className="my-20 mx-10 lg:mx-10">
                <div className="flex justify-center flex-col lg:flex-row gap-10">
                    {/* Left Content */}
                    <div className="flex flex-col lg:w-2/5">
                        <img className="w-full h-full object-cover" src={service01} alt="service01" />
                    </div>
                    {/* Right Content */}
                    <div className="lg:w-2/5">
                        <div className="mt-4 flex flex-row flex-wrap justify-center gap-5 lg:justify-between">
                            <h4 className="text-4xl font-bold mb-2 text-center sm:text-left">About Us & Our Skills</h4>
                            <p className='text-[#aaaaaa]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.
                            </p>
                            <div className="flex items-center space-x-2">
                                <span className="quote-icon text-4xl font-bold text-gray-800"><FaQuoteLeft /></span>
                                <p className="mt-5 italic">
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod kon tempor incididunt ut labore.
                                </p>
                            </div>
        
                            <div className='border-b-2 border-dashed border-gray-300 pb-5'>
                                <p className='text-[#aaaaaa]'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                                </p>
                            </div>
                            <div className="flex gap-4 justify-center mt-2">
                                {/* Facebook */}
                                <div className='bg-black text-white p-3 rounded-full hover:bg-gray-100 hover:text-black transition duration-300'>
                                    <a href="#" aria-label="Facebook">
                                        <FaFacebook /> {/* Using React Icon for Facebook */}
                                    </a>
                                </div>
                                {/* Twitter */}
                                <div className='bg-black text-white p-3 rounded-full hover:bg-gray-100 hover:text-black transition duration-300'>
                                    <a href="#" aria-label="Twitter">
                                        <FaTwitter /> {/* Using React Icon for Twitter */}
                                    </a>
                                </div>
                                {/* LinkedIn */}
                                <div className='bg-black text-white p-3 rounded-full hover:bg-gray-100 hover:text-black transition duration-300'>
                                    <a href="#" aria-label="LinkedIn">
                                        <FaLinkedin /> {/* Using React Icon for LinkedIn */}
                                    </a>
                                </div>
                                {/* YouTube */}
                                <div className='bg-black text-white p-3 rounded-full hover:bg-gray-100 hover:text-black transition duration-300'>
                                    <a href="#" aria-label="YouTube">
                                        <FaBehance /> {/* Using React Icon for YouTube */}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
