import React from 'react';
import './App.css';
import NavbarContact from './Components/NavbarContact';
import { Navbardata } from './Components/NavbarContact';

function App() {
  return (
    <div className="">
        <NavbarContact Navdata={Navbardata}/>

       
    </div>
  );
}

export default App;
