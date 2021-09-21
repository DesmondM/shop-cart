import React from 'react'
import Products from './Products'

const Main = (props) => {
    const {products} = props;
    return (
        <main className= "block col-2" >
            <h2>Products</h2>
            <div className="row">
            {
                products.map((product)=>(
                    <Products  key={product.id}  product ={product}></Products>
                ))
            }
        </div>
        </main>
    )
}

export default Main
