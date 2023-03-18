import { useContext, useEffect, useState } from "react"
import { CartContext } from "../contexts/ShoppingCartContext"
import {collection, getFirestore, addDoc} from "firebase/firestore"
import Swal from "sweetalert2";
const Buy = () => {

     const [cart] = useContext(CartContext);
     const [orederId, setOrderId] = useState("")
     console.log(cart)

     const [name, setName] = useState("")
     const [dni, setDni] = useState(0)
     const [numTarjet, setNumTarjet] = useState(0)
     const [codSeg, setCodSeg] = useState(0)
     const [venc, setVenc] = useState(0)
     const [titular, setTitular] = useState("nombre y apellido")
     const [numeroTarj, setNumeroTarj] = useState(" ****  ****  ****  ****  ")
     const [vencimiento, setVencimiento] = useState("** / **")

     const total = () => {
         return cart.reduce((total, item)=>total += item.precio, 0);
     }
   
     const dataBase = getFirestore()
     const handleSubmit = (e) => {
         e.preventDefault();
     }

    

    useEffect(() => {
        const cambiar = (e) => {
            document.getElementById("titular").innerHTML = e.key.value;
            setTitular(e.targer.value)
        }
    }, [])

    const putOrder = () => {
        
        const order = {
            buyer: {
             nombre:name,
             dni: dni
            },
            tarjeta:{
                numero:numTarjet,
                codSeguridad: codSeg,
                venc: venc
            },
            items:cart,

            total: total()
        }
        const ordersCollection = collection(dataBase, 'order')
        
            if (titular == "" || dni == "" || venc == 0 || numeroTarj == 0 || codSeg == 0){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Parece que algunos campos estan vacios!'
                  })
            } else{
                addDoc(ordersCollection, order).then(({ id }) => {
                    setOrderId(id)
                    const pedido = "tu numero de pedido es: " + id
                    setTimeout(()=>{
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Compra exitosa',
                            text: pedido ,
                            showConfirmButton: true,
                          })
                        
                    },2000) 
                }) 
            }
    }
 
  return (
    <div  className="contenedor">
        <form action="" className="formulario" onSubmit={handleSubmit}>
            <div className="formulario__datos">
                <div className="formulario__datos__div1">
                    <input className="input" type="text" onKeyUp={(e) => setTitular(e.target.value)} placeholder="titular de tarjeta" id="tituular" required onChange={(e) => setName(e.target.value)}/>
                    <input className="input"  type="number" onKeyUp={(e) => setNumTarjet(e.target.value)}placeholder="numero de tarjeta"  required onChange={(e) => setNumeroTarj(e.target.value)}/>
                </div>
                <div className="formulario__datos__div2">
                <input className="input"  type="number" onKeyUp={(e) => setVencimiento(e.target.value)} placeholder="vencimiento" required  onChange={(e) => setVenc(e.target.value)}/>
                <input className="input codSeg" type="text" placeholder="codigo de seguridad" required onChange={(e) =>setCodSeg(e.target.value)}/>
                </div>
                <div className="formulario__datos__div3">
                    <input className="input dni" type="text"  placeholder="DNI titular" required id="dni" onChange={(e) => setDni(e.target.value)}/>
                    <input onClick={putOrder} className="enviar" type="submit" value="comprar" id="enviar" /> 
                </div>
            </div>
            <div className="formulario__tarjeta" >
                <div className="formulario__tarjeta__div">
                    <img className="visa" src="../public/imagenes/visa.png" width="64" height="32" alt="logo de tarjeta visa"/>
                    <div className="info">
                        <p className="info__numero" id="numeroTarjeta"> {numeroTarj} </p>
                        <div className="info__tit" >
                            <p id="titular" > {titular} </p>
                            <p id="vencimiento" >{vencimiento} </p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <div className="productos">
        <h3>PRODUCTOS</h3>
            {cart.map((item)=>{
                return(
                <div key={item.id}>
                    <div className="productos__cantidad">
                        <img className="productos__cantidad__img" src={item.foto} alt={item.nombre} />
                        <h5 className="productos__cantidad__nom" >{item.nombre}</h5>
                        <h4 className="productos__cantidad__pre" >${item.precio * item.cantidad}</h4>
                    </div>
                </div>
                )
            })}
            <h3> Total : ${total()} </h3>
        </div>
    </div>
  )
}

export default Buy