import React, { useEffect, useState } from 'react';
import './Home.css'
import Header from '../Header/Header';
import Leagues from '../Leagues/Leagues';


const Home = () => {

    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
      const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
      fetch(url)
        .then(res => res.json())
        .then(data => {
          setLeagues(data.teams.slice(0,15));
        })
        // .catch(err => console.log(err))
    }, [])
    return (
        <div className='bg-warning'>
      <Header/>

      <div className='container flex-left'>
        
        {leagues.map(leagues => <Leagues className='' leagues={leagues}></Leagues>)}
        </div>
      </div>
    );
};

export default Home;