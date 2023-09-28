import Home from "pages/Home";
import ProductDetails from "pages/ProductDetails";
import Products from "pages/Products";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchProducts } from "rtk/ProductSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(fetchProducts());
  },[]);
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/productDetails/:id" element={<ProductDetails/>}/>
    </Routes>
    </>
  );
}

export default App;
