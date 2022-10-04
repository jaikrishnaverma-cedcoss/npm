import { useState } from 'react';
import './App.css';
import './BaseUI.css'
import Body from './Component/Body';
import Cart from './Component/Cart';
import Footer from './Component/Master/Footer';
import Header from './Component/Master/Header';
import products from './Data';
function App() {

  const [cart, setCart] = useState([])


  const addToCart = (newData) => {
    let newArr = { ...newData, quantity: 1 }
    let foundValue = -1
    cart.map((x, i) => { if (newData.id === x.id) { foundValue = i } return "" });
    if (foundValue === -1)
      cart.push(newArr)
    else
      cart[foundValue].quantity += 1
    setCart([...cart])
    // console.log(cart)

  }

  const empty = (index) => {
    setCart([])
  }

  const remove = (index) => {
    cart.splice(index, 1)
    setCart([...cart])
  }
  const incrDecr = (boolVal, index) => {
    (boolVal) ? cart[index].quantity += 1 : (cart[index].quantity - 1 === 0) ? cart[index].quantity = cart[index].quantity : cart[index].quantity -= 1;
    setCart([...cart])
  }

  return (
    <div className="App">
      <Header />
      <Body addToCart={addToCart} />
      <Cart arr={cart} empty={empty} remove={remove} incrDecr={incrDecr} />
      <Footer />
    </div>
  );
}

export default App;
