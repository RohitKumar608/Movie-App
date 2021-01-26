import React from "react"
import SideMenu from "../components/sideMenu"
import Carousel from "../components/carousel"
import MovieList from "../components/movieList"
import { getMovieLists, getCategories } from "../server"

const Home = (props) => {
  const { images, movies, categories} = props
  return (
    <div>
      <div className="home-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SideMenu categories={categories} />
            </div>
            <div className="col-lg-9">
              <Carousel images={images}/>
              <h1>Displaying movies</h1>
              <div className="row">
                <MovieList movies={(movies) || []} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.getInitialProps = async () => {
  const movies = await getMovieLists()
  const images = movies.map(movie => ({
    id: `image-${movie.id}`,
    url: movie.image,
    name: movie.name
   }))
  const categories = await getCategories()
  return { movies, images, categories }
}

export default Home
