import React from 'react'

const Basket = ({cartItems, onAdd, onRemove}) => {

    const itemsPrice =cartItems.reduce((a, c)=>c.price *c.qty, 0);
    const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice = itemsPrice + shippingPrice;

    return (
        <aside className="block col-1">
       <h2>Cart Items</h2>
        <div>
           {
               cartItems.length===0 &&  <div>Cart is empty</div>
           }
        </div>
        {
            cartItems.map((item)=>(
                <div key ={item.id} className="row">
                    <div>{item.name}</div>
                    <div>
                        <button onClick={()=>onAdd(item)} className="add">+</button>
                        <button onClick={()=>onRemove(item)} className="remove">-</button>
                    </div>
                    <div className ="col-2 text-right">
                        {item.qty} x R{item.price}
                    </div>
                </div>
            ))
        }
        {
            cartItems.length>0&&(
                <>
                    <hr></hr>
                    <div className="row">
                    <div className="col-2">Items Price</div>
                    <div className="col-1 text-right">R{itemsPrice}</div>
                    </div>
                    <div className="row">
                    <div className="col-2">Shipping Price</div>
                    <div className="col-1 text-right">R{shippingPrice}</div>
                    </div>
                    <div className="row">
                    <div className="col-2"><strong>Total Price</strong></div>
                    <div className="col-1 text-right"><strong>R{totalPrice}</strong></div>
                    </div>

                </>
            )
        }

        </aside>
    )
}

export default Basket
