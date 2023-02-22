import ItemList from "./ItemList"
import Data from "../data.json"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
  const {categoria} = useParams();
  
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

const catFilter = Data.filter((prod) => prod.categoria === categoria)

  return (
    <div>
        {categoria ? <ItemList productos={catFilter} /> : <ItemList productos={Data} />}
    </div>
  )
}

export default ItemListContainer