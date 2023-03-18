import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer"
import NavBar from './components/NavBar'
import { ShoppingCartProvider } from './contexts/ShoppingCartContext'
import Cart from './components/cart'
import Buy from './components/Buy'
import Footer from './components/Footer';
import NotFound from './components/NotFound'




function App() {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <NavBar brand="OnTech" />
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact  path="/categoria/:categoria"  element={<ItemListContainer />}/>
          <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path='/buy' element={<Buy/>}/>
          <Route exact path='/error404!' element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ShoppingCartProvider>
    
    
  )
}

export default App
