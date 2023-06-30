import React from 'react';
import Link from 'next/link';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className={styles.card} id="product-card">
      <Link href={`/product/${product.id}`}>
        <a>
          <img src={`/images/${product.image}`} alt={product.name} />
          <h2>{product.name}</h2>
        </a>
      </Link>
      <p>{product.description}</p>
      <div className={styles.price}>
        <span>${product.price}</span>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;