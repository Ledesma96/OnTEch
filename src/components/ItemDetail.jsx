import React from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount';
import { doc, getDoc, getFirestore} from "firebase/firestore";
import { useState, useEffect } from 'react'
import Loading from "./Loading"
;

const ItemDetail = ({productos}) => {
  const [produuct, setProduuct] = useState([]);
  const [spinner, setSpinner] = useState(true)
  const { id } = useParams();

  useEffect(() => {
    const dataBase = getFirestore();

    const item = doc(dataBase, "productos", `${id}`)
    getDoc(item).then((snapshot)=>{
      if(snapshot.exists()){
        setProduuct({
          ...snapshot.data(),
          id:snapshot.id
        })
        setSpinner(false)
      }
    })
  }, [])

  if (spinner){
    return (
      <>
        <Loading/>
      </>
    )
  }


  const idFilter = productos.filter((prod) => prod.id == id);
    return (
      <>
      {idFilter.map((prod)=>(
        <div className='contenedorDetail' key={prod.id}>
          <div className='detailImg'>
            <img className='imagen'  src={prod.imagen} alt={prod.nombre}/>
          </div>
          <div className='detailInfo'>
            <div>
              <h1 className='h1 titulo'>{prod.nombre}</h1>
            </div>
            <div className='detailInfoprecio'>
              <h2 className='h2'>${prod.precio}</h2>
              <h4 className='h4'> 12 coutas sin interes </h4>
            </div>
            <div className='detailIcon'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path  d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"/>
              </svg>
              <h6 className='h6 detailIconText' > garantia - 12 meses </h6>
            </div>
            <div className='detailIcon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
              <h6 className='h6 detailIconText'> stock disponible {prod.stock} </h6>
            </div>
            <div className='detailIcon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
              </svg>
              <h6 className='h6 detailIconText'> envios a todo el país </h6>
              <div>
              </div>
            </div>
            <div className='divButton'>
              <ItemCount  stock= {prod.stock}
                          precio={prod.precio}
                          nombre={prod.nombre}
                          id={prod.id}
                          foto={prod.imagen}
                          />
            </div>
          </div>
        </div>
      ))}
      </>
    )
}

export default ItemDetail