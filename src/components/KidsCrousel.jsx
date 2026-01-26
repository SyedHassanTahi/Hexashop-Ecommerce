import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import kid01 from '../assets/images/kid-01.jpg';
import kid02 from '../assets/images/kid-02.jpg';
import kid03 from '../assets/images/kid-03.jpg';
import CrouselData from './CrouselData';
import { useState } from 'react';
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";

const KidsCrousel = () => {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const kidsData = [
        {
            name: "School Collection",
            price: "80.00",
            img: kid01
        },
        {
            name: "Summer Cap",
            price: "12.00",
            img: kid02
        },
        {
            name: "Classic Kid",
            price: "30.00",
            img: kid03
        },
        {
            name: "Classic Spring",
            price: "120.00",
            img: kid02
        },
        {
            name: "School Collection",
            price: "80.00",
            img: kid01
        },
        {
            name: "Summer Cap",
            price: "12.00",
            img: kid02
        },
        {
            name: "Classic Spring",
            price: "120.00",
            img: kid03
        }
    ];

    return (
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
                {kidsData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <CrouselData name={item.name} price={item.price} img={item.img} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="hidden md:block lg:flex flex-col justify-center items-center pl-4 pb-8">
                <button className='border p-4 cursor-pointer' onClick={() => swiperInstance?.slideNext()}><IoIosArrowForward /></button>
            </div>
        </div>
    );
};

export default KidsCrousel;
