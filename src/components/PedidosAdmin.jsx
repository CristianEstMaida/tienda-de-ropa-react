import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const PedidosAdmin = () => {
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        // Referencia a la colección 'pedidos'
        const pedidosRef = collection(db, "pedidos");

        getDocs(pedidosRef)
            .then((resp) => {
                // Mapea los documentos para incluir el ID del pedido
                setPedidos(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                );
            })
    }, []);

    return (
        <div className="container">
            <h1 className="main-title">Panel de Administración de Pedidos</h1>

            {pedidos.length === 0 && <h2>Cargando pedidos o no hay pedidos.</h2>}

            {pedidos.map((pedido) => (
                <div key={pedido.id} className="carrito-producto" style={{ marginBottom: '1.5rem', border: '1px solid var(--clr-main-dark)' }}>
                    <p><strong>ID de Pedido:</strong> {pedido.id}</p>
                    <p><strong>Email Cliente:</strong> {pedido.cliente.email}</p>
                    <p><strong>Teléfono:</strong> {pedido.cliente.telefono}</p>
                    <p><strong>Total:</strong> ${pedido.total}</p>
                    <p><strong>Productos:</strong></p>
                    <ul>
                        {pedido.productos.map((prod, index) => (
                            <li key={index}>
                                {prod.titulo} x {prod.cantidad} (Subtotal: ${prod.precio * prod.cantidad})
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default PedidosAdmin;
