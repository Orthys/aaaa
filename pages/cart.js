import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShoppingCart from '../components/ShoppingCart';
import { getCartItems, removeFromCart } from '../lib/cart';
import styles from '../styles/Cart.module.css';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const items = getCartItems();
    setCartItems(items);
  }, []);

  const handleRemove = (id) => {
    removeFromCart(id);
    const updatedItems = getCartItems();
    setCartItems(updatedItems);
  };

  const handleCheckout = () => {
    router.push('/checkout');
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Shopping Cart</h1>
        {cartItems.length > 0 ? (
          <div className={styles.cart}>
            {cartItems.map((item) => (
              <ShoppingCart key={item.id} item={item} onRemove={handleRemove} />
            ))}
            <button className={styles.checkout} onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        ) : (
          <p className={styles.empty}>Your cart is empty.</p>
        )}
      </main>
      <Footer />
    </div>
  );
}