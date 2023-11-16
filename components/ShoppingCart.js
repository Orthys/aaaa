import React from 'react';
import { cartItems } from '../lib/cart';
import CartItem from './CartItem';
import styles from '../styles/ShoppingCart.module.css';

const ShoppingCart = () => {
  const total = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <div className={styles.shoppingCart} id="shopping-cart">
      <h2>Your Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className={styles.total}>
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default ShoppingCart;