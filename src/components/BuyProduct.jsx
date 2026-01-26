import singleProdut01 from '../assets/images/single-product-01.jpg'
import singleProdut02 from '../assets/images/single-product-02.jpg'
import { FaStar } from 'react-icons/fa';
import { Link } from "react-router-dom";
import React, { useState } from 'react'
const BuyProduct = () => {
    const [num, setnum] = useState(0)
    function increaseNum() {
        setnum(num + 1)
    }
    function decreaseNum() {
        if (num > 0) {
            setnum(num - 1);
        }
    }
    function scrolltop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }
    return (
        <div>
            <div className="my-20 mx-10 lg:mx-30">
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* left-content */}
                    <div className="flex flex-col  lg:w-2/3 gap-8">
                        <img src={singleProdut01} alt="" />
                        <img src={singleProdut02} alt="" />
                    </div>
                    {/* Right-content */}
                    <div className="lg:w-1/3 space-y-6">
                        <div className="mt-4 flex flex-row flex-wrap justify-center gap-2 lg:justify-between">
                            <div>
                                <h4 className="text-4xl font-bold mb-2 text-center  sm:text-left">New Green Jacket</h4>
                                <span className="text-[#a1a1a1] block text-center sm:text-left">$75.00</span>
                            </div>
                            <div>
                                <ul className="flex mt-2">
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col space-x-2 border-t  border-gray-300">
                            <div className='mt-4'>
                                <p className='text-[#aaaaaa]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.</p>
                            </div>
                            <p className="mt-5 italic">
                                You are not allowed to redistribute this template ZIP file on any other website.
                            </p>
                        </div>
                        <div className="flex flex-col space-x-2 border-t  border-gray-300">
                            <div className='flex items-center justify-between mt-5'>
                                <h6 className='text-[#aaaaaa] text-2xl font-bold'>No. of Orders</h6>
                                <div className='flex justify-center'>
                                    <button className='px-4 py-2 border border-gray-300' onClick={decreaseNum}>-</button>
                                    <h1 className='px-4 p-2 border border-gray-300'>{num}</h1>
                                    <button className='px-4 py-2 border border-gray-300' onClick={increaseNum}>+</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-x-2 border-t  border-gray-300">
                            <div className='flex items-center justify-between my-5'>
                                <h6 className='text-[#aaaaaa] text-2xl font-bold'>Total: $210.00</h6>
                                <div className='flex justify-center'>
                                    <button onClick={scrolltop} className='px-5 py-3 bg-transparent text-black hover:bg-black hover:text-white transition duration-400 border border-gray-300'><Link to="#">Add To Cart</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyProduct