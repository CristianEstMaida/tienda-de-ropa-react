import Contacto from "./components/Contacto";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import Nosotros from "./components/Nosotros";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import PedidosAdmin from "./components/PedidosAdmin";
import { AuthProvider } from "./context/AuthContext"; 
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <CartProvider>
       <AuthProvider>
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/nosotros" element={<Nosotros />}/>
            <Route path="/contacto" element={<Contacto />}/>
            <Route path="/carrito" element={<Carrito />}/>
            <Route path="/checkout" element={<Checkout />}/>
            <Route path="/admin" element={<Login />} />
            <Route element={<PrivateRoute />}>
                  {/* Esta ruta solo será accesible si PrivateRoute permite el paso (si el usuario está logueado) */}
                  <Route path="/admin/pedidos" element={<PedidosAdmin />} /> 
                  {/* Aquí añadiría otras rutas de admin, ej: /admin/productos/nuevo */}
              </Route>
          </Routes>
          
        </BrowserRouter>
       </AuthProvider>
      </CartProvider>
    </div>
  );
}

export default App;
