import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadMovieDetails } from '../store/actions/MovieActions'

const mapStateToProps = ({ movieDetailsState }) => {
  return { movieDetailsState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieDetails: (id) => dispatch(LoadMovieDetails(id))
  }
}

const MovieDetails = (props) => {
  let { id } = useParams()

  useEffect(() => {
    props.fetchMovieDetails(id)
  }, [id])

  const title = props.movieDetailsState.details.original_title
  const overview = props.movieDetailsState.details.overview
  const image = props.movieDetailsState.details.backdrop_path
  const rating = props.movieDetailsState.details.vote_average
  
  return (
    <div>
      <h3>{title}</h3>
      <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt={title} />
      <p><b>Overview</b>: {overview}</p>
      <p><b>Rating</b>: {rating}</p>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)