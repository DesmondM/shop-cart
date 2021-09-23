import React from 'react'

const Header = ({countCartItems}) => {
    return (
        <header className="row block center">
        <div>
           <h1>Shopping Cart</h1> 
        </div>

        <div>
            <a href="#/cart">
            Cart{' '}
            {countCartItems?(
                <button className = "badge">{countCartItems}</button>
            ):('' )}

            </a>
        </div>
        </header>
    )
}

export default Header
