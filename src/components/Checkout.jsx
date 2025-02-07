import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/config';

const Checkout = () => {

    
    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido);

        

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })

    }

    if (pedidoId) {
        return (
            <div className="container">
                {/* <h1 className="main-title">Muchas gracias por tu compra</h1> */}
                <p>Tu número de pedido es: {pedidoId}</p>
                <h2>En espera de pago</h2>
                <p>¡Hola! ¿Cómo estás?</p>
                <p>Nos vamos a poner en contacto por correo electrónico para arreglar los detalles del pago.</p>
                <p>¡Gracias por tu compra!</p>
                <h2>Cómo seguir el pedido</h2>
                <p>Te enviaremos un correo electrónico con un link a esta página para seguir la entrega de tu compra</p>
                <h2>Informaciones del pedido</h2>
                <h2>Forma de entrega</h2>
                <p>Nos comunicaremos para coordinar la entrega del producto</p>
                <Link className="enviar" to="/">Seguir comprando</Link>
                {/* <h2>Pedido realizado</h2>
                <p>Dia mes, horas minutos</p> */}
            </div>
        )
    }

  return (
    <div className="container">
        <h1 className="main-title">Finalizar compra</h1>
        <form className="formulario" onSubmit={handleSubmit(comprar)}>
            <h2>Datos de contacto</h2>
            <input type="email" placeholder="Ingresá tu correo electrónico" {...register("email")} />
            <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />
            
            <h2>Datos de Facturación y entrega</h2>
            <input type="text" placeholder="Ingresá tu código postal" {...register("postal")} />

            <h2>Datos del destinatario</h2>
            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input type="text" placeholder="Ingresá tu apellido" {...register("apellido")} />
            <input type="text" placeholder="Ingresá tu calle" {...register("calle")} />
            <input type="text" placeholder="Ingresá tu numero" {...register("numero")} />
            <input type="text" placeholder="Ingresá tu departamento" {...register("departamento")} />
            <input type="text" placeholder="Ingresá tu barrio" {...register("barrio")} />
            <input type="text" placeholder="Ingresá tu ciudad" {...register("ciudad")} />
            <h2>Medio de pago</h2>
            <p>A convenir</p>
            <p>Cuando termines la compra vas a ver la información para el pago</p>
            {/* <p>Tarjeta de crédito o débito</p>
            <p>Tarjetas aceptadas</p>
            <a className="enviar" href='http://link.mercadopago.com.ar/colorium' target="_blank" rel="noopener noreferrer" type='submit'>Pagar</a> */}

            <button className="enviar" type="submit">Comprar</button>

        </form>


    </div>
  )
}

export default Checkout
