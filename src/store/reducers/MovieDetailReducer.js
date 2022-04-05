const { GET_MOVIES, GET_MOVIE_DETAILS } = require('../types')

const initialState = {
  details: []
}

const MovieDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, details: action.payload }
    default:
      return { ...state }
  }
}

export default MovieDetailReducer
