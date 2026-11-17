function ProductCard({ name, price }) {
  return (
    <div className="product-card">
      <p>{name} — KSh {price}</p>
    </div>
  );
}

export default ProductCard;