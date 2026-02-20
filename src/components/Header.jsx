export default function Header() {
  return (
    <header className="header container">
      <div className="headerLeft">
        <span>◼</span>
      </div>

      <div className="headerCenter">
        <h2 className="mainLogo">LOGO</h2>
      </div>

      <div className="headerRight">
        <span>Search</span>
        <span>Wishlist</span>
        <span>Cart</span>
        <span>Profile</span>
      </div>
    </header>
  );
}
