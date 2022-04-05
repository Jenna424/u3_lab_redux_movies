import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import MoviesList from './components/MoviesList'
import MovieDetails from './components/MovieDetails'

const App = () => {
  return (
    <div className="App">
      <h3>Movies Library</h3>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  )
}

export default App
