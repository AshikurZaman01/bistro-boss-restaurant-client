import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slider1 from '../../../assets/assets/home/slide1.jpg';
import slider2 from '../../../assets/assets/home/slide2.jpg';
import slider3 from '../../../assets/assets/home/slide3.jpg';
import slider4 from '../../../assets/assets/home/slide4.jpg';
import slider5 from '../../../assets/assets/home/slide5.jpg';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';


const FoodCategory = () => {
    return (
        <div>
            <div>
                <SectionTitle
                    subTitle={'From 11.00am to 10.00pm'}
                    heading={'Order Online'}
                ></SectionTitle>
            </div>

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
                    <p className='-mt-[50px] uppercase text-center text-white md:text-3xl text-xl shadow-2xl shadow-black'>Salad</p>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <p className='-mt-[50px] uppercase text-center text-white md:text-3xl text-xl shadow-2xl shadow-black'>pasta</p>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <p className='-mt-[50px] uppercase text-center text-white md:text-3xl text-xl shadow-2xl shadow-black'>soup</p>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <p className='-mt-[50px] uppercase text-center text-white md:text-3xl text-xl shadow-2xl shadow-black'>pasty</p>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <p className='-mt-[50px] uppercase text-center text-white md:text-3xl text-xl shadow-2xl shadow-black'>Salad</p>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <p className='-mt-[50px] uppercase text-center text-white md:text-3xl text-xl shadow-2xl shadow-black'>soup</p>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <p className='-mt-[50px] uppercase text-center text-white md:text-3xl text-xl shadow-2xl shadow-black'>soup</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default FoodCategory;