import { useContext, useState } from "react";
import { toCapital } from "../helpers/toCapital"
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ( {item} ) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext);
    console.log(carrito);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    const showToast = () => {
        
        toast("Producto agregado", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            style: {
                background: "linear-gradient(to right, var(--clr-main), var(--clr-main-light))",
                borderRadius: "2rem",
                textTransform: "upercase",
                fontSize: ".75rem",
                color:"white"
            },
            offset: {
                x: '0.5rem', 
                y: '0.5rem' 
            }
        });
        
    }

    // const handleAgregar = () => {
        // const itemAgregado = {...item, cantidad};
        // const nuevoCarrito = [...carrito];
        // console.log( {...item, quantity: cantidad} )
        // console.log( {...item, cantidad} )
        // nuevoCarrito.push(itemAgregado);
        // setCarrito([...carrito, itemAgregado]);
    // }

  return (
    <div className="container">
        <div className="producto-detalle">
            <img src={item.imagen} alt={item.titulo} />
            <div>
                <h3 className="titulo">{item.titulo}</h3>
                <p className="descripcion">{item.descripcion}</p>
                <p className="categoria">Categoría: {toCapital(item.categoria)}</p>
                <p className="precio">${item.precio}</p>
                <ItemCount
                  cantidad={cantidad}
                  handleSumar={handleSumar}
                  handleRestar={handleRestar}
                  //handleAgregar={handleAgregar}
                  handleAgregar={() => { agregarAlCarrito(item, cantidad); showToast(); }}
                />
                <ToastContainer />
            </div>
        </div>
    </div>
  )
}

export default ItemDetail
