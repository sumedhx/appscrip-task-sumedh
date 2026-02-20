
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerTop">
        <div className="newsletter">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from our shop.</p>

          <div className="subscribeBox">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="contactInfo">
          <h4>CONTACT US</h4>
          <p>+91 9876543210</p>
          <p>support@example.com</p>

          <h4 className="currencyTitle">CURRENCY</h4>
          <p>USD</p>
        </div>
      </div>

      <div className="footerDivider"></div>

      <div className="container footerBottom">
        <div>
          <h4>ABOUT</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h4>HELP</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h4>FOLLOW US</h4>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>

        <div>
          <h4>PAYMENT METHODS</h4>
          <p>Visa • MasterCard • PayPal</p>
        </div>
      </div>
    </footer>
  );
}
