import { useState } from 'react'
import './App.css'
import Nav from './components/nav/Nav';
import Shop from './components/shop/Shop';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Nav></Nav>
      <Shop></Shop>
    </div>
  )
}

export default App
