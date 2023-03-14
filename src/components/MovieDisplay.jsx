import React from 'react'

export function MovieDisplay({ movies }) {
  const placeholderImage =
    'https://images.unsplash.com/photo-1526045004414-3e7ed02f9ca1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGVtcHR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60'

  const Loaded = ({ movie }) => {
    return (
      <a
        href={`http://localhost:5173/movie.name/${movie.id}`}
        style={{ textDecoration: 'none' }}
      >
        <div
          style={{
            border: '1px solid black',
            padding: '10px',
            textAlign: 'center',
          }}
        >
          <h2 style={{ marginBottom: '5px', fontFamily: 'Arial Black' }}>
            {movie.title}
          </h2>
          <img
            style={{
              width: '60%',
              maxHeight: '200px',
              objectFit: 'contain',
              margin: '0 auto',
              display: 'block',
            }}
            src={
              movie.poster.includes('http') ? movie.poster : placeholderImage
            }
            alt={movie.title}
          />
        </div>
      </a>
    )
  }

  const Loading = () => {
    return <></>
  }

  // Ternary operator will determine which functions JSX we will return
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {movies.map((movie, index) => (
        <div
          key={index}
          style={{
            width: 'calc(50% - 20px)',
            margin: '10px',
            borderRadius: '10px',
            boxShadow: '0 0 5px gray',
            overflow: 'hidden',
          }}
        >
          {movie ? <Loaded movie={movie} /> : <Loading />}
        </div>
      ))}
    </div>
  )
}
