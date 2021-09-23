import React from 'react'
import Products from './Products'

const Main = ({products, onAdd}) => {
    
    return (
        <main className= "block col-2" >
            <h2>Products</h2>
            <div className="row">
            {
                products.map((product)=>(
                    <Products  key={product.id}  product ={product} onAdd={onAdd}></Products>
                ))
            }
        </div>
        </main>
    )
}

export default Main
