import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import Order from './components/order/Order';
import OrderInventory from './components/orderInventory/OrderInventory';
import Shop from './components/shop/Shop';

function App() {

  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
        <Route path='/orderInventory' element={<OrderInventory></OrderInventory>}></Route>
      </Routes>
    </div>
  )
}

export default App
