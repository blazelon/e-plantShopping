function ProductItem({ item, addedToCart = false, onClickAddToCart }) {
  return (
    <div className="product-card">
      <img className="product-image" src={item.image} alt={item.name} />
      <div className="product-title">{item.name}</div>
      <div className="product-description">{item.description}</div>
      <div className="product-cost">{item.cost}</div>
      <button
        className="product-button"
        onClick={onClickAddToCart}
        disabled={addedToCart}
      >
        {`Add${addedToCart ? 'ed' : ''} to Cart`}
      </button>
    </div>
  );
}

export default ProductItem;
