import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import women01 from '../assets/images/women-01.jpg';
import women02 from '../assets/images/women-02.jpg';
import women03 from '../assets/images/women-03.jpg';
import CrouselData from './CrouselData';
import { useState } from 'react';
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";

const WomenCrousel = () => {
    const [swiperInstance, setSwiperInstance] = useState(null); 
    const womenData = [
        {
            name: "New Green Jacket",
            price: "75.00",
            img: women01
        },
        {
            name: "Classic Dress",
            price: "45.00",
            img: women02
        },
        {
            name: "Spring Collection",
            price: "130.00",
            img: women03
        },
        {
            name: "Classic Spring",
            price: "120.00",
            img: women02
        },
        {
            name: "New Green Jacket",
            price: "75.00",
            img: women01
        },
        {
            name: "Classic Spring",
            price: "120.00",
            img: women02
        },
        {
            name: "Spring Collection",
            price: "130.00",
            img: women03
        }
    ]
    return (
        <div className="flex justify-start px-4 sm:px-8 lg:px-20 py-12">
            <div className="hidden md:block lg:flex flex-col justify-center items-center pr-4 pb-8">
                <button className='border p-4 cursor-pointer' onClick={() => swiperInstance?.slidePrev()}><IoIosArrowBack /></button>
            </div>
            <Swiper
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                spaceBetween={25}
                slidesPerView={1}
                loop={true}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 3 },
                }}
            >
                <div className='swiper-wrapper'>
                    {womenData.map(function (item, index) {
                        return <SwiperSlide key={index} >
                            <CrouselData name={item.name} price={item.price} img={item.img} />
                        </SwiperSlide>
                    }
                    )}
                </div>
            </Swiper>
            <div className="hidden md:block lg:flex flex-col justify-center items-center pl-4 pb-8">
                <button className='border p-4 cursor-pointer' onClick={() => swiperInstance?.slideNext()}><IoIosArrowForward /></button>
            </div>
        </div>
    )
}

export default WomenCrousel
