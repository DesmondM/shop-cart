import React from 'react'

const Products = (props) => {
    const {product} = props
    return (
        <div>
            <img className ="small" src={product.image} alt  ={product.name}></img>
            <h3>{product.name}</h3>
            <div>R{product.price}</div>        
        <div>
        <button>Add to cart</button>
        </div>
        </div>
    )
}

export default Products
