import { useState } from "react";
import Swal from "sweetalert2";

const ItemCount = ({stock}) => {
    const [contador , setContador] = useState(0);
    console.log(stock)
    

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
    </>
  )
}

export default ItemCount