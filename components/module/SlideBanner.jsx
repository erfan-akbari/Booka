import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';
import Banner from './Banner';

function SlideBanner({ data }) {
    return (
        <div className='py-6'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{
                    576: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 3
                    },
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {data.map((src, index) => (
                    <SwiperSlide key={index + 1}>
                        <Banner img={src} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    )
}

export default SlideBanner