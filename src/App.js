import React, {useState} from 'react'
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data'

function App() {
  const {products} = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd =(product) =>{
    const existInCart = cartItems.find((clickedProduct)=>clickedProduct.id===product.id);
    if(existInCart){
      setCartItems(
        cartItems.map((clickedProduct)=> clickedProduct.id ===product.id?{...existInCart, qty: existInCart.qty +1} : clickedProduct)
      )
    } else {
      setCartItems([...cartItems, {...product, qty: 1}])
    }
  

  }

  const onRemove = (product) =>{
      const exist = cartItems.find((clickedProduct)=>clickedProduct.id===product.id);
      if(exist.qty ===1){
        setCartItems(cartItems.filter((clickedProduct)=>clickedProduct.id!==product.id))
      }else{
        setCartItems(
          cartItems.map((clickedProduct)=>
          clickedProduct.id===product.id? {...exist, qty: exist.qty -1} : clickedProduct
          )
        );
      }
    }

  return (
    <div className="App">
      <Header countCartItems = {cartItems.length}></Header>
      <div className="row">
        <Main products= {products} onAdd ={onAdd} ></Main>
        <Basket cartItems={cartItems} onAdd ={onAdd} onRemove = {onRemove}></Basket>
        
      </div>
    </div>
  );
}

export default App;
