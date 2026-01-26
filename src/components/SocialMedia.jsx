import { FaInstagram } from 'react-icons/fa'; 
import social01 from '../assets/images/instagram-01.jpg';
import social02 from '../assets/images/instagram-02.jpg';
import social03 from '../assets/images/instagram-03.jpg';
import social04 from '../assets/images/instagram-04.jpg';
import social05 from '../assets/images/instagram-05.jpg';
import social06 from '../assets/images/instagram-06.jpg';
import Header from './Header';

const SocialMedia = () => {
    const title = "Social Media";

    return (
        <section>
            <div className="my-20 border-t-2 border-dashed border-gray-300">
                <Header title={title} />
                <div className="mt-10 px-4 sm:px-8 lg:px-35">
                    <div className="flex">
                        {/* Each Image Wrapper */}
                        <div className="relative group w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6">
                            <img src={social01} alt="Instagram 1" className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-50" />
                            <div className="absolute bottom-2 left-2 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p>Fashion</p>
                                <FaInstagram size={24} /> 
                            </div>
                        </div>
                        <div className="relative group w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6">
                            <img src={social02} alt="Instagram 2" className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-50" />
                            <div className="absolute bottom-2 left-2 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p>New</p>
                                <FaInstagram size={24} />
                            </div>
                        </div>
                        <div className="relative group w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6">
                            <img src={social03} alt="Instagram 3" className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-50" />
                            <div className="absolute bottom-2 left-2 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p>Brand</p>
                                <FaInstagram size={24} />
                            </div>
                        </div>
                        <div className="relative group w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6">
                            <img src={social04} alt="Instagram 4" className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-50" />
                            <div className="absolute bottom-2 left-2 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p>Makeup</p>
                                <FaInstagram size={24} />
                            </div>
                        </div>
                        <div className="relative group w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6">
                            <img src={social05} alt="Instagram 5" className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-50" />
                            <div className="absolute bottom-2 left-2 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p>Leather</p>
                                <FaInstagram size={24} />
                            </div>
                        </div>
                        <div className="relative group w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6">
                            <img src={social06} alt="Instagram 6" className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-50" />
                            <div className="absolute bottom-2 left-2 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p>Bag</p>
                                <FaInstagram size={24} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialMedia;
