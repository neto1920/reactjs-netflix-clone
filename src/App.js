import React, { useEffect, useState } from 'react';
import './components/styles/Global-styles.css';

import Tmdb from './utils/Tmdb';
import MovieRow from '../src/components/movieRow';
import FeaturedMovie from './components/FeaturedMovie';
import { Header} from '../src/components/Header'

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(()=>{
    const loadAll = async () => {
      // get all list
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // get Featured
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1))
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo)      
      
    }   

    loadAll();
  }, []);
  
  return(
    <div className="page">
      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />      
      }

      <section className="lists">          
        {movieList.map((item, key)=>(
          <MovieRow 
          key={key}
          title={item.title}
          items={item.items}
          />
        ))}
      </section>
    </div>
  )
  
}