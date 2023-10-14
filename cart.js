function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (product) {
    cart.push(product);
    renderCart();
  }
}
