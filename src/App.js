import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Default from './components/Default'
import Cart from './components/Cart'

function App() {
  return (
   <>
    <Navbar />
    <ProductList />
    <Details />
    <Default />
    <Cart />
   </>
  );
}

export default App;
