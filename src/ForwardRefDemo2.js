import React, { useState } from 'react';
import InputModal from './input-modal.js';
import './ForwardRef2.css';

export default function ForwardRefDemo2() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const price = 20;
  const onClose = () => setModalOpen(false);
  const onSubmit = (value) => setQuantity(value);
  return (
    <div className="ForwardRefDemo2">
      <h1>Checkout</h1>
      <table>
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Unit price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{quantity}</td>
            <td>${price}</td>
            <td>${price * quantity}</td>
            <td>
              <button onClick={() => setModalOpen(!isModalOpen)}>
                Edit quantity
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {isModalOpen && (
        <InputModal
          onSubmit={onSubmit}
          initialValue={quantity}
          onClose={onClose}
        />
      )}
    </div>
  );
}
