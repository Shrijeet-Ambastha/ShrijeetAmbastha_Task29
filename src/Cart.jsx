import React from 'react';
import { useCart } from './CartContext';

export default function Cart({ onProceedToCheckout }) {
  const { cart, addToCart, removeFromCart, deleteItem, totalAmount } = useCart();

  if (cart.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} style={{ display: 'flex', gap: '15px', marginBottom: '10px' }}>
          <span>{item.name}</span>
          <span>Qty: {item.quantity}</span>
          <span>${item.price * item.quantity}</span>
          <button onClick={() => addToCart(item)}>+</button>
          <button onClick={() => removeFromCart(item.id)}>-</button>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
      ))}
      <h3>Total: ${totalAmount}</h3>
      <button onClick={onProceedToCheckout}>Proceed to Payment</button>
    </div>
  );
}
