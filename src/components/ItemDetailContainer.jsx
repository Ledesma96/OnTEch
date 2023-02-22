import { useState, useEffect } from 'react'
import Data from "../data.json"
import React from 'react'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () =>{
  const [productos, setProductos] = useState([]);


  useEffect(() => {
     async function fetchData() {
       try {
         const response = await fetch(Data);
         const data = await response.json();
         setProductos(data);
       } catch (error) {
         error= "Ah ocurrido un error"
       }
     }
     fetchData();
  }, []);

  return (
    <div>
        <ItemDetail productos={Data}/>
    </div>
  )
}

export default ItemDetailContainer