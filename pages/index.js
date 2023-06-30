import React from 'react';
import Link from 'next/link';
import { getProducts } from '../lib/products';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import styles from '../styles/Home.module.css';

export default function Home({ products }) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to our Knitted Toy Animals Store!</h1>
        <div className={styles.grid}>
          {products.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <a className={styles.card}>
                <ProductCard product={product} />
              </a>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: {
      products,
    },
  };
}