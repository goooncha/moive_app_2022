import React, { Component } from 'react'
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css'

export default class Home extends Component {

  state = {
    isLoading: true,
    movies: [],
  }

  getMovies = async () => {
    const {data:{data:{movies},},} = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count');
    console.log(movies)
    this.setState({isLoading:false, movies})
  }

  componentDidMount() {
    // setTimeout(() =>{
    //   this.setState({isLoading : false});
    // },6000)
    this.getMovies();
  }

  // 안된거 
  // render() {
  //   const {isLoading, movies} = this.state;
  //   return (
  //     <>
  //     <section className='container'>
  //     {isLoading ? 
  //      (<div className='loader'>
  //       <span className='loader_text'>'Loading...' </span>
  //      </div>)
  //      :

  //      (<div className='movies'>
  //     {movies.map((movie,index) => (<Movie 
  //     key={index}
  //     id={movie.id} 
  //     year={movie.year} 
  //     title={movie.title}
  //     summary={movie.summary} 
  //     poster={movie.medium_cover_image}
  //     genre={movie.genres}
  //       />))}</div>)
  //     }</section>
      
  //     </>
  //   )
  // }
  render() {
    const {isLoading, movies} = this.state;
    return (

      <section className='container'>
        {isLoading ? 
          (<div className='loader'>
            <span className='loader_text'>'Loading...'</span>
          </div>)
         : 
          (<div className='movies'>
          {movies.map( (movie,index) => (<Movie
                              key={index}  // 모든 컴포넌트에는 고유 키값이 있어야 함
                              id={movie.id}
                              // key = {객체.데이터종류}
                              year={movie.year}
                              title={movie.title}
                              summary={movie.summary}
                              poster={movie.medium_cover_image}
                              genres={movie.genres}
                            />))}
          </div>)
        }
      </section>

    )
  }
}