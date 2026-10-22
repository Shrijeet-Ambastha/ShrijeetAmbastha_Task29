import React, { useState } from 'react';
import { useCart } from './CartContext';

export default function PaymentForm({ onOrderSuccess }) {
  const { totalAmount } = useCart();
  const [formData, setFormData] = useState({ name: '', cardNumber: '', address: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Payment of $${totalAmount} processed successfully for ${formData.name}!`);
    onOrderSuccess();
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '10px' }}>
      <h2>Checkout (Total: \${totalAmount})</h2>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Card Number:
        <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
      </label>
      <label>
        Address:
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
      </label>
      <button type="submit">Pay Now</button>
    </form>
  );
}
