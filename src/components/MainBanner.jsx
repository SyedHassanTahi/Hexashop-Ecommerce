import leftBannerImage from '../assets/images/left-banner-image.jpg';
import bannerImage1 from '../assets/images/baner-right-image-01.jpg';
import bannerImage2 from '../assets/images/baner-right-image-02.jpg';
import bannerImage3 from '../assets/images/baner-right-image-03.jpg';
import bannerImage4 from '../assets/images/baner-right-image-04.jpg';
import { Link } from "react-router-dom";
const MainBanner = ({ pageRefs }) => {
    return (
        <section className="main-banner" ref={el => pageRefs.current = { ...pageRefs.current, home: el }}>
            <div className="flex flex-col md:flex-row mx-2 my-2 pt-30">
                {/* Left Content */}
                <div className="md:w-1/2 p-4">
                    <div className="relative text-left text-white">
                        <img className="w-full object-cover" src={leftBannerImage} alt="Left Banner" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center sm:text-left">
                            <div className='text-nowrap lg:space-y-5'>
                                <h4 className="lg:text-6xl font-bold">We Are Hexashop</h4>
                                <span className="block mt-2 text-sm sm:text-base italic">Awesome, clean & creative HTML5 Template</span>

                                {/* Button */}
                                <div className="mt-4">
                                    <button className="px-6 py-3 border text-white hover:bg-white hover:text-black transition duration-300 text-sm sm:text-base">
                                        <Link to='/'>Purchase Now!</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Content */}
                <div className="md:w-1/2 p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Women */}
                    <div className="relative text-center text-white">
                        <img className="w-full object-cover" src={bannerImage1} alt="Women" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-nowrap space-y-2">
                            <h4 className="text-2xl font-bold">Women</h4>
                            <p className='italic'>Best Clothes for Women</p>
                        </div>
                        <div className="absolute top-5 left-5 bottom-5 right-5 inset-0 bg-zinc-900 bg-opacity-50 opacity-0 hover:opacity-90 flex items-center justify-center transition duration-600">
                            <div className="text-center text-white p-4">
                                <h4 className="text-2xl font-bold">Women</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div className="mt-2 border px-4 py-2 w-fit mx-auto border-white hover:bg-white hover:text-black transition duration-300">
                                    <a href="#">Discover More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Men */}
                    <div className="relative text-center text-white">
                        <img className="w-full object-cover" src={bannerImage2} alt="Men" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-nowrap space-y-2">
                            <h4 className="text-2xl font-bold">Men</h4>
                            <p className='italic'>Best Clothes for Men</p>
                        </div>
                        <div className="absolute top-5 left-5 bottom-5 right-5 inset-0 bg-zinc-900 bg-opacity-50 opacity-0 hover:opacity-90 flex items-center justify-center transition duration-600">
                            <div className="text-center text-white p-4">
                                <h4 className="text-2xl font-bold">Men</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div className="mt-2 border px-4 py-2 w-fit mx-auto border-white hover:bg-white hover:text-black transition duration-300">
                                    <a href="#">Discover More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Kids */}
                    <div className="relative text-center text-white">
                        <img className="w-full object-cover" src={bannerImage3} alt="Kids" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-nowrap space-y-2">
                            <h4 className="text-2xl font-bold">Kids</h4>
                            <p className='italic'>Best Clothes for Kids</p>
                        </div>
                        <div className="absolute top-5 left-5 bottom-5 right-5 inset-0 bg-zinc-900 bg-opacity-50 opacity-0 hover:opacity-90 flex items-center justify-center  transition duration-600">
                            <div className="text-center text-white p-4">
                                <h4 className="text-2xl font-bold">Kids</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div className="mt-2 border px-4 py-2 w-fit mx-auto border-white hover:bg-white hover:text-black transition duration-300">
                                    <a href="#">Discover More</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Accessories */}
                    <div className="relative text-center text-white">
                        <img className="w-full object-cover" src={bannerImage4} alt="Accessories" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-nowrap space-y-2">
                            <h4 className="text-2xl font-bold">Accessories</h4>
                            <p className='italic'>Best Trend Accessories</p>
                        </div>
                        <div className="absolute top-5 left-5 bottom-5 right-5 inset-0 bg-zinc-900 bg-opacity-50 opacity-0 hover:opacity-90 flex items-center justify-center transition duration-600">
                            <div className="text-center text-white p-4">
                                <h4 className="text-2xl font-bold">Accessories</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div className="mt-2 border px-4 py-2 w-fit mx-auto border-white hover:bg-white hover:text-black transition duration-300">
                                    <a href="#">Discover More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainBanner;
