import React from 'react';
import './App.css';
import NavbarContact from './Components/NavbarContact';
import { Navbardatas } from './Components/NavbarContact';
import HeroSection from './Components/HeroSection';
import { Herodatas } from './Components/HeroSection';

function App() {
  return (
    <div className="">
        <NavbarContact Navbardata={Navbardatas}/>
        <HeroSection Herodata={Herodatas}/>
       
    </div>
  );
}

export default App;
