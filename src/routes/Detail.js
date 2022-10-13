import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import './Detail.css'


export default function Detail() {
  const location = useLocation();
  console.log(location);

  const navigate = useNavigate();
  if(location.state === undefined){
    navigate('/'); //홈으로 이동 리다이렉트 기능
  }

  const {genres,poster,summary,title,year} = location.state;
  return (
    <div className='detail'>

        <img src={poster} alt={title} title={title} />
        <div className='detail_data'>
            <h3 className='detail_title'>{title}</h3>
            <h4 className='detail_year'>{year}</h4>
            <ul className='detail_genres'>
                {genres.map((genre, index) => {
                   return (
                    <li className='detail_genre' key={index}>{genre}</li>
                    )
                })}
            </ul>
            <p className='detail_summary'>{summary.slice(0,180)} ...</p>
        </div>

    </div>
  )
}
