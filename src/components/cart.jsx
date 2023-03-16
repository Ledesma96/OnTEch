import {
    Center,
    Heading,
    Alert,
    AlertTitle,
    AlertDescription,
    AlertIcon
  } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/ShoppingCartContext";
  
  const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const [total, setTotal] = useState([])
    const tot = cart.map((productos)=>productos.precio*productos.cantidad)
    setTotal[tot]
    const totalCarrito = tot.reduce((total, item)=>total + item, 0);
    
    const removeItem = (id) =>{
      setCart(cart.filter((item) => item.id !== id))
      console.log(id)
    }

      
    return (
      <>
        <Center bg="#D6EAF8" h="100px" color="black">
          <Heading as="h2" size="2xl">
            Carrito de compras
          </Heading>
        </Center>
        {cart.map((item) => {
          return (
              <div key={item.id}>
               <div className="cart">
                 <img className="cart__img" src={item.foto}  alt={item.nombre}/>
                 <div className="cart__info">
                     <h5 className="h5 cart__info__name">{item.nombre}</h5>
                     <div className="cart__info__cantidad">
                        <p><b>{item.cantidad}</b></p>
                     </div>
                     <p>${item.precio * item.cantidad}</p>
                 </div>
                 <Link to={`/cart`}>
                  <img src="../imagenes/trash.svg" onClick={()=> removeItem(item.id)} alt="papelera"/>
                 </Link>
                </div>
              </div>
          );
        })}
        {totalCarrito > 0 ? <div className="cart"><h2>Total</h2><h2>${totalCarrito}</h2></div> : 
        <Alert className="vacio" status='error'>
          <AlertIcon />
          <AlertTitle>Error!</AlertTitle>
          <AlertDescription>Su carrito se encuenta vacio.</AlertDescription>
        </Alert> } 
        
      </>
    );
  };
  
  export default Cart;