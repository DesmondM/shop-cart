import React from 'react'

const Products = (props) => {
    const {product, onAdd} = props
    return (
        <div>
            <img className ="small" src={product.image} alt  ={product.name}></img>
            <h3>{product.name}</h3>
            <div>R{product.price}</div>        
        <div>
        <button onClick={()=>onAdd(product)}>Add to cart</button>
        </div>
        </div>
    )
}

export default Products
