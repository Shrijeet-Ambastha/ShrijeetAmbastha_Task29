import React, { useState } from 'react';
import { CartProvider } from './CartContext';
import ProductList from './ProductList';
import Cart from './Cart';
import PaymentForm from './PaymentForm';

export default function App() {
  // Simple state to toggle between 'shop' and 'checkout' views
  const [view, setView] = useState('shop'); 

  return (
    <CartProvider>
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
          <h1>My Dummy Shop 🛒</h1>
          <div>
            <button onClick={() => setView('shop')} style={{ marginRight: '10px' }}>Shop</button>
            <button onClick={() => setView('checkout')}>Cart / Checkout</button>
          </div>
        </header>

        {view === 'shop' ? (
          <div>
            <ProductList />
          </div>
        ) : (
          <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
            <Cart onProceedToCheckout={() => alert('Please fill out the payment form below!')} />
            <PaymentForm onOrderSuccess={() => setView('shop')} />
          </div>
        )}
      </div>
    </CartProvider>
  );
}
