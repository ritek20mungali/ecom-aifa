import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
// import { Counter } from './features/counter/Counter';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
// import { Cart } from './features/cart/Cart';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetails from './features/product-list/components/ProductDetails';
import Navbar from './features/navbar/Navbar';
import Protected from './features/auth/components/Protected';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsByUserIdAsync } from './features/cart/CartSlice';
import { selectLoggedInUser } from './features/auth/authSlice';
import PageNotFound from './pages/404';
import OrderSuccessPage from './pages/OrderSuccessPage';
import { UserOrder } from './features/user/component/UserOrder';
import UserOrderPage from './pages/UserOrderPage';
import Logout from './features/auth/components/Logout';
function App() {
  const dispatch=useDispatch();
  const user=useSelector(selectLoggedInUser);
  const [add,setAdd]=useState([]);
  console.log(add);

  useEffect(()=>{
    if(user){
      dispatch(fetchItemsByUserIdAsync())
    }
        
  },[dispatch])
  return (

    <div className="App">

       <BrowserRouter>
         <Routes>
            <Route path='/' element={ <Protected><Home/></Protected>}/>
             <Route path="/login" element={<LoginPage />}/>
             <Route path="/signup" element={<SignupPage />}/>
             <Route path="/cart" element={<Protected> <CartPage /></Protected>}/>
             <Route path='/checkout' element={<Checkout setAdd={setAdd}/>}/>
             <Route path='/pd/:id' element={<Protected><ProductDetails/></Protected>}/>
             <Route path='*' element={<PageNotFound/>}/>
             <Route path='/success/:id' element={<Protected><OrderSuccessPage add={add}/></Protected>}/>
             <Route path='/orders' element={<UserOrderPage/>}/>
             <Route path='/logout' element={<Logout/>}/>


         </Routes>
       </BrowserRouter>
    </div>
      
  );
}

export default App;
