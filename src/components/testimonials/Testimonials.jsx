import "./testimonials.css"
import { Data } from "./Data"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
    return (
        <section className="testimonial section container" id="testimonial">
            <h2 className="section-title">
                My clients say
            </h2>
            <span className="section-subtitle">
                Testimonials
            </span>

            <Swiper className="testimonial-container"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    },
                }}
                modules={[Pagination]}
            >
                {Data.map(({ id, image, title, description }) => {
                    return (
                        <SwiperSlide className="testimonial-card" key={id}>
                            <img src={image} alt=""
                                className="testimonial-img" />

                            <h3 className="testmonial-name">{title}</h3>
                            <p className="testmonial-description">
                                {description}
                            </p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Testimonials