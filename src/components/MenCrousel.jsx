import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import CrouselData from './CrouselData';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import men01 from '../assets/images/men-01.jpg';
import men02 from '../assets/images/men-02.jpg';
import men03 from '../assets/images/men-03.jpg';

const MenCrousel = () => {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const menData = [
        {
            name: "Classic Spring",
            price: "120.00",
            img: men01
        },
        {
            name: "Air Force 1 X",
            price: "90.00",
            img: men02
        },
        {
            name: "Love Nana '20",
            price: "150.00",
            img: men03
        },
         {
            name: "Classic Spring",
            price: "120.00",
            img: men01
        },
        {
            name: "Air Force 1 X",
            price: "90.00",
            img: men02
        },
        {
            name: "Love Nana '20",
            price: "150.00",
            img: men03
        }
    ]
    return (
        <div>
            <div className="flex justify-start px-4 sm:px-8 lg:px-20  py-12">
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
                {menData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <CrouselData name={item.name} price={item.price} img={item.img} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="hidden md:block lg:flex flex-col justify-center items-center pl-4 pb-8">
                <button className='border p-4 cursor-pointer' onClick={() => swiperInstance?.slideNext()}><IoIosArrowForward /></button>
            </div>
        </div>
        </div>
    );
};

export default MenCrousel;
