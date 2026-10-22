import React from 'react';
import { useCart } from './CartContext';

const dummyProducts = [
  { id: 1, name: 'Wireless Headphones', price: 50 },
  { id: 2, name: 'Smart Watch', price: 80 },
  { id: 3, name: 'Running Shoes', price: 60 },
];

export default function ProductList() {
  const { addToCart } = useCart();

  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        {dummyProducts.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '15px' }}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
