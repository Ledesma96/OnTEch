import { useContext, useState } from "react"
import { CartContext } from "../contexts/ShoppingCartContext"
import {collection, getFirestore, addDoc } from "firebase/firestore"

const Buy = () => {
     const [cart] = useContext(CartContext);
     const [orederId, setOrderId] = useState("")
     const [name, setName] = useState("")
     const [email, setEmail] = useState("")
     const [dni, setDni] = useState(0)
     const [numTarjet, setNumTarjet] = useState(0)
     const [codSeg, setCodSeg] = useState(0)
     const [venc, setVenc] = useState(0)
     const dataBase = getFirestore()
     console.log(cart)

     const total = () => {
         return cart.reduce((total, item)=>total += item.precio, 0);
     }
   

     const handleSubmit = (e) => {
         e.preventDefault();
         addDoc(ordersCollection, order).then(({id}) =>setOrderId(id))
     }

     const order = {
         titular:{
             nombre:name,
             email: email,
             dni: dni
         },
         tarjeta:{
             numero:numTarjet,
             codSeguridad: codSeg,
             venc: venc
         },
         productos:{cart},
     }
    console.log(order)
    const ordersCollection = collection (dataBase, "order")

  return (
    <div className="contenedor">
        <form action="" className="formulario" onSubmit={handleSubmit}>
            <div className="formulario__datos">
                <div className="formulario__datos__div1">
                    <input className="input" type="text" placeholder="titular de tarjeta" id="tituular" required onChange={(e) => setName(e.target.value)}/>
                    <input className="input"  type="number" placeholder="numero de tarjeta"  required onChange={(e) => setNumTarjet(e.target.value)}/>
                </div>
                <div className="formulario__datos__div2">
                <input className="input"  type="number" placeholder="vencimiento" required  onChange={(e) => setVenc(e.target.value)}/>
                <input className="input" type="text" placeholder="codigo de seguridad" required onChange={(e) =>setCodSeg(e.target.value)}/>
                </div>
                <div className="formulario__datos__div3">
                    <input className="input dni" type="text" placeholder="DNI titular" required id="dni" onChange={(e) => setDni(e.target.value)}/>
                    <input className="enviar" type="submit" value="comprar" id="enviar" /> 
                </div>
            </div>
            <div className="formulario__tarjeta" >
                <div className="formulario__tarjeta__div">
                    <img className="visa" src="../public/imagenes/visa.png" width="64" height="32" alt="logo de tarjeta visa"/>
                    <div className="info">
                        <p className="info__numero" id="numeroTarjeta">  ****  ****  ****  ****  </p>
                        <div className="info__tit" >
                            <p id="titular" > nombre y apellido</p>
                            <p id="vencimiento" > ** / ** </p>
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
                        <h1>{orederId}</h1>
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