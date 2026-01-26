import { Send } from 'lucide-react';
const Subscribe = () => {
    return (
        <section>
            <div className="my-20 border-t-2 border-dashed border-gray-300">
                <div className="bg-white pt-20 px-4 sm:px-8 lg:px-35">
                    <div className="flex flex-1 flex-col lg:flex-row items-center justify-between gap-10">
                        {/* Left Content */}
                        <div className="lg:w-3/5 flex flex-col text-center lg:text-left">
                            <h2 className="text-3xl font-extrabold text-[#2a2a2a] mb-4">
                                By Subscribing To Our Newsletter You  Can Get 30% Off
                            </h2>
                            <p className="text-[#aaa] italic mb-6">
                                Details to details is what makes Hexashop different from the other themes.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="p-3 italic border w-full sm:w-1/2"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email Address"
                                    className="p-3 italic border w-full sm:w-1/2"
                                />
                                <button className="bg-black text-white border px-4 py-3  hover:bg-transparent hover:text-black transition duration-300">
                                    <span className="flex items-center justify-center">
                                        <Send />
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="lg:w-2/5 flex  flex-1">
                            <div>
                                <ul>
                                    <li className='m-4'>
                                        <h4 className="font-bold">Store Location:</h4>
                                        <p className='text-[#aaa]'>Sunny Isles Beach, FL 33160, United States</p>
                                    </li>
                                    <li className='m-4'>
                                        <h4 className="font-bold">Phone:</h4>
                                        <p className='text-[#aaa]'>010-020-0340</p>
                                    </li>
                                    <li className='m-4'>
                                        <h4 className="font-bold">Office Location:</h4>
                                        <p className='text-[#aaa]'>North Miami Beach</p>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className='m-4'>
                                        <h4 className="font-bold">Work Hours:</h4>
                                        <p className='text-[#aaa]'>07:30 AM - 9:30 PM <br />Daily</p>
                                    </li>
                                    <li className='m-4'>
                                        <h4 className="font-bold">Email:</h4>
                                        <p className='text-[#aaa]'>info@company.com</p>
                                    </li>
                                    <li className='m-4'>
                                        <h4 className="font-bold">Social Media:</h4>
                                        <p className='text-[#aaa]'>Facebook, Instagram, Behance, LinkedIn</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe