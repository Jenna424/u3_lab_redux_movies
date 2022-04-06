import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadMovies } from '../store/actions/MovieActions'

const mapStateToProps = ({ movieState }) => {
  return { movieState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(LoadMovies())
  }
}

const MoviesList = (props) => {

  useEffect(() => {
    props.fetchMovies()
  }, [])
  
  return (
    <div>
      {props.movieState.movies.map((movie) => (
        <ul key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
        </ul>
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList)