import React from 'react'
import NavBar from './Component/NavBar/NavBar';
import "./App.css"
import Banner from './Component/Banner/Banner';
import RowPost from './Component/RowPost/RowPost';
import {Originals, action,ComedyMovies,HorrorMovies,RomanceMovies, Documentaries} from '../src/url'


function App() {
  return (
    <div className='App'>
     <NavBar/>
     <Banner/>
     <RowPost url={Originals} title ='Netflix Originals'/>
     <RowPost url={action} title='Action' isSmall/>
     <RowPost url={ComedyMovies} title='ComedyMovies' isSmall/>
     <RowPost url={HorrorMovies} title='HorrorMovies' isSmall/>
     <RowPost url={RomanceMovies} title='RomanceMovies' isSmall/>
     <RowPost url={Documentaries} title='Documentaries' isSmall/>

    

    
    </div>
  )
}

export default App;
