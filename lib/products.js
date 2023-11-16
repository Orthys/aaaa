const products = [
  {
    id: '1',
    name: 'Knitted Bunny',
    description: 'A cute knitted bunny toy.',
    price: 25.00,
    image: '/images/bunny.jpg'
  },
  {
    id: '2',
    name: 'Knitted Bear',
    description: 'A lovely knitted bear toy.',
    price: 30.00,
    image: '/images/bear.jpg'
  },
  // Add more products as needed
];

function getProduct(id) {
  return products.find(product => product.id === id);
}

function getProducts() {
  return products;
}

module.exports = {
  getProduct,
  getProducts
};