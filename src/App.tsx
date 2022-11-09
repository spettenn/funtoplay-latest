import React from 'react';
import './App.css';
import useLocalStorage from 'use-local-storage';
import Nav from "../src/components/Header/nav";
import Landing from "../src/components/landing/landing";
import CardsTop from "./components/cards/cardsTop";
import ClubInfo from "../src/components/clubInfo/clubInfo";




function FunToPlay() {
 const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }; 

  return (
    <div className="App" data-theme={theme} >
      <div className='Nav_container'>
        <Nav />
        <button onClick={toggleTheme}>{theme === 'light' ? 'dark' : 'light'}</button>
      </div>
      <Landing />
      <CardsTop />
      <ClubInfo />
    </div>
  );
}

export default FunToPlay;



