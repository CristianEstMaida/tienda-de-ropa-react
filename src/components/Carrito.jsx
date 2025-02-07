import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className="container">
        <div className='contenedor-carrito'>
        <h1 className="main-title">Carrito</h1>

        {
            carrito.map((prod) => (
                <div className='carrito-producto' key={prod.id}>
                    <br />
                    <img class="carrito-producto-imagen" src={prod.imagen} alt={prod.titulo} />
                    <h3 className='carrito-producto-titulo'>{prod.titulo}</h3>
                    <p className='carrito-producto-precio'>Precio unitario: ${prod.precio}</p>
                    <p className='carrito-producto-subtotal'>Precio total: ${prod.precio * prod.cantidad}</p>
                    <p className='carrito-producto-cantidad'>Cantidad: {prod.cantidad}</p>
                    <br />
                </div>
            ))
        }

        {  
            carrito.length > 0 ?
            <>
                <div className='carrito-acciones'>
                    <div className="carrito-acciones-izquierda">
                    <button className="carrito-acciones-vaciar" onClick={handleVaciar}>Vaciar</button>
                    </div>
                    <div className="carrito-acciones-derecha">
                    <h2>Precio total: ${precioTotal()}</h2>
                        <Link className='carrito-acciones-comprar' to="/checkout">Finalizar compra</Link>
                    </div>
                </div>
            </> :
            <h2>El carrito está vacío :(</h2>
        }
        </div>
        
        
    </div>
  )
}

export default Carrito
