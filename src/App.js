import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from "./components/login/login" ;
import "./components/FontawsomeIcons"
// import Home from './components/home/home';


class App extends Component{ 
  render(){
    return(
      <BrowserRouter>
      <Route  exact path='/' component ={Login}/>
      </BrowserRouter>
    )
 }
 }
export default App;
{/* <Route path='/home' component ={Home}/> */}
