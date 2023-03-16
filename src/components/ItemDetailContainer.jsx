import { useState, useEffect } from 'react'
import React from 'react'
import ItemDetail from './ItemDetail'
import { collection, getDocs, getFirestore} from "firebase/firestore";


const ItemDetailContainer = () =>{
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const dataBase = getFirestore();
   
    const items = collection(dataBase, "productos");
    getDocs(items).then((snapshot) => {
      const documents = snapshot.docs.map((doc) =>{
        return{
          id:doc.id,
          ...doc.data()
        }
      } )
      setProductos(documents)
    })
    
  }, [])
  return (
    <div>
        <ItemDetail productos={productos}/>
    </div>
  )
}

export default ItemDetailContainer