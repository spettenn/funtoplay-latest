import React from 'react';
import './App.css';
import useLocalStorage from 'use-local-storage';



function FunToPlay() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="App" data-theme={theme} >

      <h1>Learn</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo maxime eos delectus nulla cum earum beatae, veritatis numquam alias odit perspiciatis. Ducimus facere delectus soluta! Repellat, hic veritatis! Magni, asperiores!</p>
      <button onClick={toggleTheme}>Toggle {theme === 'light' ? 'dark' : 'light'} Theme</button>
    </div>
  );
}

export default FunToPlay;
