import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getProducts } from '../lib/products';
import ProductCard from '../components/ProductCard';
import styles from '../styles/Shop.module.css';

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Shop</h1>
      <div className={styles.products}>
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <a>
              <ProductCard product={product} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const products = await getProducts();
  return { props: { products } };
}