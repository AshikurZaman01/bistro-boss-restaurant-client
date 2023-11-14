import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import { FaQuoteLeft } from "react-icons/fa";

import '@smastrom/react-rating/style.css'
const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
            <section className="my-20 ">

                <div>
                    <SectionTitle
                        subTitle={'What our client say'}
                        heading={'testimonials'}
                    ></SectionTitle>
                </div>

                <div>

                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                        {
                            reviews.map(review => <SwiperSlide key={review.id}>
                                <div className="text-center w-[80%] mx-auto">

                                    <div >
                                        <FaQuoteLeft className="text-6xl w-[100%] text-center block" />
                                    </div>

                                    <div>
                                        <Rating className="text-center mx-auto py-10"
                                            style={{ maxWidth: 180 }}
                                            value={review.rating}
                                            readOnly
                                        />
                                    </div>
                                    <p className="text-xl font-serif">{review.details}</p>
                                    <h3 className="mt-10 font-bold font-serif text-yellow-500">{review.name}</h3>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>

            </section>

        </div>
    );
};

export default Testimonials;