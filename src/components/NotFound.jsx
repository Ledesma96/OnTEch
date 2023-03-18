import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='notFound'>
        <div className='nouFoud__error'>
            <h1 className='ups'>UPS! Algo salió mal.</h1>
            <ul>
                <li>
                    <h3>Ah ocurrido un error inesperado</h3>
                </li>
                <li>
                    <h3>Intente denuevo mas tarde</h3>
                    <Link to={`/`}>
                    <Button className='volver' variant='solid' colorScheme='blue'>Volver al inicio</Button>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NotFound