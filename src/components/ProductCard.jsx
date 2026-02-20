export default function ProductCard({ product }) {
  return (
    <div className="card">
      <div className="imageWrapper">
        <img
          src={product.image}
          alt={`${product.title} product image`}
          loading="lazy"
        />
      </div>

      <div className="cardContent">
        <h3 className="productTitle">{product.title.substring(0, 25)}...</h3>

        <div className="priceRow">
          <p className="signinText">
            Sign in or Create an account to see pricing
          </p>

          <span className="wishlist">♡</span>
        </div>
      </div>
    </div>
  );
}
