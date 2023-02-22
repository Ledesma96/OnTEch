import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer"
import NavBar from './components/NavBar'

function App() {

  return (
    <BrowserRouter>
      <NavBar brand="OnTech" />
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>}/>
        <Route
            exact  path="/categoria/:categoria"  element={<ItemListContainer />}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
