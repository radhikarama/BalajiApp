
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import CartItems from './Components/CartItems';
import About from './Components/About';
import Contact from './Components/Contact'
import QuickProduct from './Components/QuickProduct';
import BuyProduct from './Components/BuyProduct';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<CartItems />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/viewProduct' element={<QuickProduct />} />
        <Route path='/buy' element={<BuyProduct />} />
      </Routes>

    </div >
  );
}

export default App;
