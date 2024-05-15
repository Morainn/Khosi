import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {players} from './lib/player-stats';
import Table from './components/table';
import Footer from './components/footer';
import Bio from './components/bio';
import Upcoming from './components/upcoming';
import {fixtures} from './lib/fixtures';

function App() {

  return (
    <div className="w-full md:w-[700px] lg:w-[800px] m-auto">
      <NavBar/>

      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Table players={players}/>}></Route>        
        <Route path='/bio/:playerID' element={<Bio players={players}/>}></Route>
        <Route path='/upcoming' element={<Upcoming fixtures={fixtures}/>}></Route> 
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
