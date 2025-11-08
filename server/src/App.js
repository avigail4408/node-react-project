import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from './component/Layot';
import GetAllProduct from './features/products/GetAllProduct';
import AddProduct from './features/products/AddProduct';
import UpdateProduct from "./features/products/UpdateProduct"
import GetById from "./features/products/GetById"
import Register from './features/user/Register';
import Login from './features/user/Login';
import LogOut from './features/user/LogOut';
// import GetAll from './features/basket/GetAll';
import AddToBasket from './features/basket/AddToBasket';
// import { Sidebar } from 'primereact/sidebar';
import SideBar from "./features/basket/SideBar"
import Home from './features/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Layout></Layout>}>
            <Route path="/" element={<Home></Home>}> </Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path="/logOut" element={<LogOut></LogOut>}></Route>
            <Route path="/products" element={<GetAllProduct></GetAllProduct>}></Route>
            <Route path="/addProduct" element={<AddProduct></AddProduct>}></Route>
            <Route path="/updateProduct" element={<UpdateProduct></UpdateProduct>}></Route>
            <Route path="/products/:id" element={<GetById></GetById>}></Route>
            <Route path="/basket" element={<SideBar></SideBar>}></Route>
            <Route path='/AddToBasket' element={<AddToBasket></AddToBasket>}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
