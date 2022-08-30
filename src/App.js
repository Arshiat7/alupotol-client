import { Routes, Route, Link } from "react-router-dom";
import AllProduct from "./Pages/AllProduct/AllProduct";
import NotFoundPage from "./Pages/AllProduct/NotFoundPage/NotFoundPage";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import ManageInventory from "./Pages/ManageInventory/ManageInventory";


import Footer from "./Pages/Shared/Header/Footer";
import Navbar from "./Pages/Shared/Header/Navbar";
import Signup from "./Pages/Signup/Signup";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";


function App() {
  
  return (
    <div>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        
        
        <Route path="inventory" element={<ManageInventory />} />
        <Route path="allProduct" element={<AllProduct />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
      <Footer/>

    </div>

  );
}

export default App;
