import { Route, Routes } from 'react-router-dom'
import { MoviePage } from './pages/MoviePage'
import { LandingPage } from './pages/LandingPage'
import { ProvideController } from './Controller'

function App() {
  return (
    <div className="App">
      <h1>DaMaFe movies</h1>
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
