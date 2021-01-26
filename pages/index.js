import React from "react"
import SideMenu from "../components/sideMenu"
import Carousel from "../components/carousel"
import MovieList from "../components/movieList"
import { getMovieLists } from "../server"

const Home = (props) => {
  return (
    <div>
      <div className="home-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SideMenu />
            </div>
            <div className="col-lg-9">
              <Carousel />
              <h1>Displaying movies</h1>
              <div className="row">
                <MovieList movies={(props.movies) || []} />
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
  return { movies }
}

export default Home
