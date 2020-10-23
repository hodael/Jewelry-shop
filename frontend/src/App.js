import React from 'react';
//import logo from './logo.svg';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import about from './Screens/about';


import {BrowserRouter,Route,Link} from 'react-router-dom' 


import './App.css';


function App() {

  const  openMenu = ()=>{
    document.querySelector(".sidebar").classList.add("open")

  }

  const closeMenu=()=>{
    document.querySelector(".sidebar").classList.remove("open")

  }
  
  return (
    <BrowserRouter>
<div className="grid-container">
    <header className="header">
        <div className="brand">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <Link to= "/" >Jewelry LA</Link>
        </div>
        
      
    </header>

    <aside className="sidebar">
        <h3>Menu</h3>
        <button className="side-closeButton" onClick={closeMenu}>X</button>
        <ul>
            <li>
            <Link to ={'/about'} onClick = {closeMenu}>About us</Link>
            </li>
        </ul>
    </aside>
 
    <main className="main">
 
        <div className="content">
        <Route path = "/product/:id"  component = {ProductScreen}/>
          <Route path = "/" exact = {true} component = {HomeScreen}/>
          <Route path = "/about" component = {about} />
          </div>
        
      </main>
    <footer className="footer">
    I Feel Fantastic 
    </footer>
</div>
</BrowserRouter>
  );
}

export default App;
