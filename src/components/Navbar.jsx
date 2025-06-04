import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
    
    const { user, logout } = useContext(AuthContext);
     console.log(user.name);
     
     
    
  return (
    <div>
      
      <div className='navbar'>
        <Link to="/"> 
        
           <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" />
           </Link>
       

          <Link to="/">Home</Link>
          <Link to="/cart">Cart(2)</Link>

          {

            user ? (
            <div>
            
                <span>Hi, {user.name}</span>
                  <button onClick={logout}>Logout</button>

            </div>
            ) :
            
               (
               <div> 
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
               </div> 

               )
          }
    
      </div>

    </div>
  )
}

export default Navbar
