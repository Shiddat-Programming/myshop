import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import { AuthProvider } from './context/AuthContext';
import {CartProvider } from './context/CartContext'
import Navbar from './components/Navbar';

const App = () => {
  return (
 
    <AuthProvider>  
      <CartProvider>   
      <Router>
        <Navbar/>
        <Routes>
             <Route path='/' element={ <Home/> } />
             <Route path='/cart' element={ <Cart/> } />
             <Route path='/login' element={ <Login/> } />
             <Route path='/register' element={ <Register/> } />
             <Route path='/products/:id' element={ <ProductDetails/> } />
        </Routes>

      </Router>
      </CartProvider>
      </AuthProvider>



   
  )
}

export default App
