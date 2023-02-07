
import './App.css'
import CartWidget from './components/CartWidget'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import {useState} from "react";

function App() {

  return (
    <div className="App">
      <NavBar brand="OnTech" />
      <ItemListContainer gratting="¡Lo mejor en tecnología para tu pc!"/>
    </div>
  )
}

export default App
