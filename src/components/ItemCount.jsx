import { useState } from "react";
import Swal from "sweetalert2";
import { CartContext } from "../contexts/ShoppingCartContext";
import { useContext } from 'react'
import { Button } from '@chakra-ui/react';


const ItemCount = ({stock, id, precio, nombre, foto}) => {
    const [contador , setContador] = useState(1);
    const [cart, setCart] = useContext(CartContext);
    console.log(cart)

    const addCart = () =>{
    setCart ((currItem) => {
      const isItemFound = currItem.find((item) => item.id === id);
      if (isItemFound){
        return currItem.map((item)=>{
          if (item.id === id){
            return {...item , cantidad: item.cantidad + contador}
          } else {
            return item
          }
        })
      } else {
        return [... currItem, {id, cantidad: contador, precio, nombre, foto}]
      }
    })
  }

 

    

    const resta = () =>{
      if (contador > 0){
        setContador ( contador - 1)
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'warning',
          title: 'Cantidad minima alcanzada'
        })
      }
    }

  

    const suma = () => {
      if (contador < stock){
        setContador(contador + 1)
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'warning',
          title: 'Cantidad maxima alcanzada'
        })
      }
    }
    
  return (
    <>
      <div className="divContador">
        <div className="contador">
          <button className="matContador"  onClick={resta}>-</button>
          <p>{contador}</p>
          <button className="matContador"  onClick={suma}>+</button>
        </div>
        <button className="reset" onClick={() => setContador(0)}>RESET</button>
      </div>
      <Button className='comprar' colorScheme='blue' onClick={() => addCart()}>agregar al carrito</Button>
    </>
  )
}

export default ItemCount