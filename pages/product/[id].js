import { useRouter } from 'next/router';
import { getProduct } from '../../lib/products';
import { addToCart } from '../../lib/cart';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../styles/ProductCard.module.css';

const ProductPage = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    router.push('/cart');
  };

  return (
    <div>
      <Header />
      <div className={styles.productCard}>
        <img src={`/images/${product.image}`} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>${product.price.toFixed(2)}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      <Footer />
    </div>
  );
};

export async function getStaticPaths() {
  const products = getProducts();
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const product = getProduct(params.id);

  return { props: { product } };
}

export default ProductPage;