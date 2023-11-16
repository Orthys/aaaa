let cartItems = [];

function addToCart(product, quantity) {
  const cartItem = cartItems.find(item => item.product.id === product.id);

  if (cartItem) {
    cartItem.quantity += quantity;
    cartItem.totalPrice = cartItem.product.price * cartItem.quantity;
  } else {
    cartItems.push({
      id: Date.now(),
      product,
      quantity,
      totalPrice: product.price * quantity
    });
  }
}

function removeFromCart(id) {
  const index = cartItems.findIndex(item => item.id === id);
  if (index !== -1) {
    cartItems.splice(index, 1);
  }
}

module.exports = {
  cartItems,
  addToCart,
  removeFromCart
};