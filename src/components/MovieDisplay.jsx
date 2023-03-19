import { useController } from '../Controller'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import { EffectCoverflow, Navigation } from 'swiper'

export function MovieDisplay() {
  const { movies } = useController()
  const Loaded = ({ movie }) => {
    return (
      <Link to={`/${movie.title}`}>
        <div className="group flex flex-col justify-center items-center p-2 h-full transition ease-in-out delay-150 group/item hover:-translate-y-4 hover:scale-110 duration-300">
          <img
            className="object-contain w-full rounded-3xl group-hover:brightness-50"
            src={movie.poster}
            alt={movie.title}
          />
          <div className="opacity-0 group-hover:opacity-100 group-hover:brightness-100 duration-300 absolute inset-0 z-10 flex flex-col justify-end items-start  px-8 py-24">
            <p className="text-2xl text-white font-semibold">{movie.title}</p>
            <p>({movie.rating})</p>
          </div>
        </div>
      </Link>
    )
  }

  const Loading = () => {
    return <></>
  }

  return (
    <div className="mb-32">
      <h3 className="pl-8 text-lg text-slate-400 font-medium">Our Picks</h3>
      <Swiper
        loop={true}
        slidesPerView={'auto'}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation]}
        className="swiper_container"
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index} style={{ width: '400px', height: '650px' }}>
            {movie ? <Loaded movie={movie} /> : <Loading />}
          </SwiperSlide>
        ))}
        <div className="swiper-controller">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </Swiper>
    </div>
  )
}
