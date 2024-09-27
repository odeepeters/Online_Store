import { Routes, Route, useLocation } from "react-router-dom";
import ProtectedRoute from "./component/ProtectedRoute";
import Admin from "./pages/Admin";
import DeleteProduct from "./pages/DeleteProduct";
import EditProduct from "./pages/EditProduct";
import CreateProduct from "./pages/CreateProduct";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Cart from './pages/cart';
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import Shop from "./pages/Shop";
import Footer from "./component/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminNavbar from "./component/AdminNavbar";
 function App() {

    const location = useLocation();
    const isAdminRoute = location.pathname.startWith('/admin');

  return (
    <>
    {isAdminRoute ? <AdminNavbar/> : <Navbar/>}
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        
    
    <Route
    path="/admin/*"
    element={
      <ProtectedRoute>
        <AdminRoutes />
      </ProtectedRoute>
    }
    />
    </Routes>
    {isAdminRoute ? '' : <Footer/>}
    </>
  )
}

const AdminRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Admin/>} />
            <Route path="/product/create" element={<CreateProduct />} />
            <Route path="/product/edit/:id" element={<EditProduct/>} />
            <Route path="/product/delete/:id" element={<DeleteProduct/>} />

        </Routes>
    );
};
export default App