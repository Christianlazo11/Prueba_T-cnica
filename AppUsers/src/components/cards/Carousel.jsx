import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import { CardCarousel } from './CardCarousel';
import { useUsers } from '../../hooks/useUsers';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


export const Carousel = () => {

    const { users } = useUsers();
    const [dataUser, setDataUser] = useState([]);

    useEffect(() => {
        setDataUser(users)
    }, [users])

    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'4'}
                coverflowEffect={{
                    rotate: 10,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                spaceBetween={-30}
                pagination={false}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper px-5"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    },
                    1280: {
                        slidesPerView: 4
                    }
                }}

            >

                {dataUser.length > 0 ? (
                    dataUser.map((e, index) => (
                        <SwiperSlide key={index}>
                            <CardCarousel key={index} dataUser={e} />
                        </SwiperSlide>

                    ))
                ) :
                    <p>Cargando datos ....</p>

                }

                ...
            </Swiper>
        </>
    )
}
