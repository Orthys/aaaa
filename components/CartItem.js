import React from 'react';
import styles from '../styles/CartItem.module.css';
import { removeFromCart } from '../lib/cart';

const CartItem = ({ item }) => {
  return (
    <div className={styles.cartItem} id="cart-item">
      <img src={`/images/${item.product.image}`} alt={item.product.name} />
      <div className={styles.productDetails}>
        <h2>{item.product.name}</h2>
        <p>{item.product.description}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Total: ${item.totalPrice.toFixed(2)}</p>
      </div>
      <button className={styles.removeButton} onClick={() => removeFromCart(item.product.id)}>
        Remove from Cart
      </button>
    </div>
  );
};

export default CartItem;