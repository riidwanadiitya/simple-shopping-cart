import React from 'react'

export default function Cart({ cart, removeFromCart }) {
    return (
        <>
            <h1>Cart</h1>
            <div className="products">
                {cart.map((product, idx) => (
                    <div className="product" key={idx}>
                        <h3>{product.name}</h3>
                        <h4>{product.cost}</h4>
                        <img alt={product.name} src={product.image} /><br />
                        <button onClick={() => removeFromCart(product)}>Remove</button>
                    </div>
                ))}
            </div>
        </>
    )
}
