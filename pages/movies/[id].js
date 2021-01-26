

import { useRouter } from 'next/router'
import { getMovieById } from '../../server'
const MovieDetail = (props) => {
  const router = useRouter()
  const { id } = router.query
  const { movie } = props
  return (
    <div className="container">
      <h1>Movie with id: { id } </h1>
      <div className="jumbotron">
        <h1 className="display-4">{ movie.name }</h1>
        <p className="lead">{ movie.description }</p>
        <hr className="my-4" />
        <p>{ movie.genre }</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </div>
      <p>
       {movie.longDesc}
      </p>
    </div>
  )
}

MovieDetail.getInitialProps = async () => {
 const movie = await getMovieById("2")
 return { movie }
}

export default MovieDetail;