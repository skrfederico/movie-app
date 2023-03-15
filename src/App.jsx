import { Route, Routes } from 'react-router-dom'
import { MoviePage } from './pages/MoviePage'
import { LandingPage } from './pages/LandingPage'
import { ProvideController } from './Controller'

function App() {
  return (
    <div className="App w-full h-full ">
      <h1 className="text-4xl font-bold text-center p-8 mb-16">
        DaMaFe movies
      </h1>
      <ProvideController>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/:id" element={<MoviePage />} />
        </Routes>
      </ProvideController>
    </div>
  )
}

export default App
