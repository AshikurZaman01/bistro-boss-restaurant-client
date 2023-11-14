import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slider1 from '../../../assets/assets/home/slide1.jpg';
import slider2 from '../../../assets/assets/home/slide2.jpg';
import slider3 from '../../../assets/assets/home/slide3.jpg';
import slider4 from '../../../assets/assets/home/slide4.jpg';
import slider5 from '../../../assets/assets/home/slide5.jpg';


const FoodCategory = () => {
    return (
        <div className=''>
            <Swiper
                slidesPerView={5}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <p className='-mt-[40px] uppercase text-center text-white md:text-3xl text-xl'>Salad</p>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <p className='-mt-[40px] uppercase text-center text-white md:text-3xl text-xl'>pasta</p>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <p className='-mt-[40px] uppercase text-center text-white md:text-3xl text-xl'>soup</p>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <p className='-mt-[40px] uppercase text-center text-white md:text-3xl text-xl'>pasty</p>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <p className='-mt-[40px] uppercase text-center text-white md:text-3xl text-xl'>Salad</p>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <p className='-mt-[40px] uppercase text-center text-white md:text-3xl text-xl'>soup</p>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <p className='-mt-[40px] uppercase text-center text-white md:text-3xl text-xl'>soup</p>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default FoodCategory;