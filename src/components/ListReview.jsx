export default function ListReview({ review }) {
  return (
    <div className="flex flex-col justify-between border rounded border-slate-700 p-8 gap-4 mb-4 w-full sm:w-3/4 md:w-3/4 mx-auto">
      <div className="flex justify-end">
        <div className="w-5/6 pr-4">
          <div className="flex flex-col">
            <p>{review.body}</p>
            <p className="self-end">{review.author}</p>
          </div>
        </div>
        <div className="w-2/6 border border-slate-700">
          <img
            src={review.moviePoster}
            alt="Movie poster"
            style={{
              width: '100%',
              height: 'auto'
              // maxHeight: 'calc(100% - 1px)'
            }}
          />
        </div>
      </div>
    </div>
  )
}
// import { useState, useEffect } from 'react'

// export default function ListReview({ review }) {
//   const [movie, setMovie] = useState(null)

//   useEffect(() => {
//     async function fetchMovie() {
//       try {
//         const response = await fetch(
//           `http://www.omdbapi.com/?i=${review._id}&apikey=8ec77365`
//         )
//         const data = await response.json()
//         setMovie(data)
//       } catch (error) {
//         console.error(error)
//       }
//     }
//     fetchMovie()
//   }, [review._id])

//   return (
//     <div className="flex flex-col justify-between border rounded border-slate-700 p-8 gap-4 mb-4 w-full sm:w-3/4 md:w-3/4 mx-auto">
//       <div className="flex justify-end">
//         <div className="w-5/6 pr-4">
//           <div className="flex flex-col">
//             <p>{review.body}</p>
//             <p className="self-end">{review.author}</p>
//           </div>
//         </div>
//         <div className="w-1/6 border border-slate-700">
//           {movie && movie.Poster && (
//             <img src={movie.Poster} alt={movie.Title} />
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }
