import { useController } from '../../Controller'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'

import movieDisplayClasses from './movieDisplayClasses'

export function MovieDisplay() {
  const { movies } = useController()
  const Loaded = ({ movie }) => {
    return (
      <Link to={`/${movie.title}`}>
        <div className={movieDisplayClasses.movieContainer}>
          <img
            className={movieDisplayClasses.image}
            src={movie.poster}
            alt={movie.title}
          />
          <div className={movieDisplayClasses.info}>
            <p className={movieDisplayClasses.title}>{movie.title}</p>
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
    <div className={movieDisplayClasses.container}>
      <h3 className="pl-8 text-xl text-slate-400 font-medium">Our Picks</h3>
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
