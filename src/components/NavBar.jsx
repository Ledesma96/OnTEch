import React from 'react'
import logo from "../assets/logo-gradiente-tecnologia_52683-8564.png";
import { Flex, Img} from '@chakra-ui/react'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


const NavBar = ({brand}) => {
    
  return  (
    <Flex className='navBar'>
      <div className='div-navBar'>
        <Img className='logo' src={logo} alt="" />
        <Link to="/">
            <p className='brand'><b>{brand}</b></p>
        </Link>
      </div>
        <div className='div-menu' >
          <Link to={`/categoria/${"procesador"}`}>
            <p className='link'>PROCESADORES</p>
          </Link>
          <Link to={`/categoria/${"grafica"}`}>
            <p className='link'>GRAFICA</p>
          </Link>
          <Link to={`/categoria/${"memoria"}`}>
            <p className='link'>MEMORIA</p>
          </Link>
          <Link to={`/categoria/${"fuente"}`}>
            <p className='link'>FUENTE</p>
          </Link>
          <Link to={`/categoria/${"mother"}`}>
            <p className='link'>MOTHER</p>
          </Link>
          <Link to={`/categoria/${"gabinete"}`}>
            <p className='link'>GABINETE</p>
          </Link>
        </div>
        <CartWidget/>
    </Flex>
    
  )
}

export default NavBar