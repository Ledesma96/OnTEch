import React from 'react'
import logo from "../assets/logo-gradiente-tecnologia_52683-8564.png";
import { Flex, Img, Spacer , Box } from '@chakra-ui/react'
import CartWidget from './CartWidget';


const NavBar = ({brand}) => {
    
  return  (
    <Flex className='navBar'>
        <Box className='div-navBar'>
            <Img className='logo' src={logo} alt="" />
            <p className='brand'><b>{brand}</b></p>
        </Box>
        <div className='div-menu' >
            <a className='link' href="">PROCESADORES</a>
            <a className='link' href="">GRAFICA</a>
            <a className='link' href="">MEMORIA</a>
            <a className='link' href="">GRAFICA</a>
            <a className='link' href="">FUENTE</a>
            <a className='link' href="">MOTHER</a>
            <a className='link' href="">GABINETE</a>
        </div>
        <CartWidget/>
    </Flex>
    
  )
}

export default NavBar