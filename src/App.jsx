import { Route, Routes, useLocation } from 'react-router-dom';
import { createContext, useState } from 'react';
import './App.css'
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import Order from './components/order/Order';
import OrderInventory from './components/orderInventory/OrderInventory';
import Shop from './components/shop/Shop';
import SignInUp from './components/SignInUp/SignInUp';
import SingIn from './components/SignIn/SingIn';
import SignUp from './components/SignUp/SignUp';

export const UserDetailsContext = createContext()

function App() {
  let [userDetails, setUserDetails] = useState({})
  return (
    <UserDetailsContext.Provider value={[userDetails, setUserDetails]}>
      <div className="App">
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<SignUp></SignUp>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/Signin' element={<SingIn></SingIn>}></Route>
          <Route path='/Signup' element={<SignUp></SignUp>}></Route>
          <Route path='/shop' element={<Shop></Shop>}></Route>
          <Route path='/order' element={<Order></Order>}></Route>
          <Route path='/orderInventory' element={<OrderInventory></OrderInventory>}></Route>
        </Routes>
      </div>
    </UserDetailsContext.Provider>

  )
}

export default App
