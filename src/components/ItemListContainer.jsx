 import ItemList from "./ItemList"
 import Loading from "./Loading"
 import { useState, useEffect } from "react"
 import { useParams } from "react-router-dom"
 import { collection, getDocs, getFirestore} from "firebase/firestore";

 const ItemListContainer = () => {
  const {categoria} = useParams();
  const [spinner, setSpinner] = useState(true)
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
      })
      setProductos(documents)
      setSpinner(false)
    })
    
  }, [])
   if (spinner){
    return(
      <>
        <Loading/>
      </>
    )
   }
   

 const catFilter = productos.filter((prod) => prod.categoria === categoria)

   return (
     <div>
         {categoria ? <ItemList productos={catFilter} /> : <ItemList productos={productos} />}
     </div>
   )
 }

 export default ItemListContainer