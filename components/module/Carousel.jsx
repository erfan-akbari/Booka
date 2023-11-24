import CardV3 from './CardV3';
import Title from './Title';
import { TiArrowBack } from "react-icons/ti";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Keyboard, Scrollbar } from 'swiper/modules';
import Link from 'next/link';

function Carousel({ data, title, type }) {
    return (
        <>
            <section className="py-5 w-full">
                <div className="flex items-center justify-between">
                    {title && <Title value={title} />}
                    <Link className='text-lime-600 font-extrabold text-xl flex items-center' href={`/books?page=1`}>
                        مشاهد همه
                        <TiArrowBack className='text-3xl' />
                    </Link>
                </div>
                <Swiper
                    slidesPerView={1}
                    scrollbar={true}
                    keyboard={{
                        enabled: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2
                        },
                        1200: {
                            slidesPerView: 3
                        }
                    }}
                    spaceBetween={30}
                    modules={[Scrollbar, Keyboard]}
                    className="mySwiper"
                >
                    {data.map(book => (
                        <SwiperSlide key={book._id}>
                            <CardV3 {...book} type={type} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section >
        </>
    )
}

export default Carousel