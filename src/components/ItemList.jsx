import Item from "./Item"


const ItemList = ({productos}) => {
    
  return (
    <div className="tarjetero">
        {productos?.map((producto)=>{
            return (
            <Item
                key={producto.id}
                id={producto.id}
                nombre={producto.nombre}
                precio={producto.precio}
                imagen={producto.imagen}
            />)
        })}   
    </div>
  )
}

export default ItemList