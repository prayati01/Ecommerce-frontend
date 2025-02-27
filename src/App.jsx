import './App.css';

import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Component/Dashboard.jsx';
import Login from "./Component/Login.jsx";
import Register from './Component/Register.jsx';
import ResetPassword from "./Component/ResetPassword.jsx";
import ProductList from './Pages/ProductList.jsx';


//import Products from "./Pages/Products";
//import SingleProduct from "./Pages/SingleProduct";
//import Home from "./Pages/Home";
function App() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:8082/api/products',{
      method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
      .then(data =>{
        console.log("Fetched Products:", data);//checking in console
        setProducts(data);
      })
      .catch(error => console.error("Error fetching products:", error));
  },[]);

  
  return (
    <>
    
    <BrowserRouter>
    <Routes>

      {/* Show products ONLY on the home page */}
      <Route path='/' element={
        <div className='container'>
        
          {
            products.length ? (
              //display products
              <ProductList products={products}/>
            ) : (
              <p> No Products</p>
            )
          }
        </div>
      }/>

      {/*other routess*/}
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path ="/resetPassword" element={<ResetPassword />}/>
      
    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
//<Route path='/' element={<Home />} />
//<Route path = "/SingleProduct" element= {<SingleProduct/>}/>
//<Route path = "/Products" element= {<Products/>}/>