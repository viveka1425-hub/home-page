import "../Test/Footer.css";

export default function Footer() {
  return (
    <footer style={{ width: "21.5%" }} className="footer">
      <div className="footer-top">

        <div className="brand-font">
          <h1>Be the First to Receive <br /> the Latest News</h1>

          <div className="footer-column">
            <div className="left">
              <div className="brand">
                <button className="signup-btn">
                  signUp <span className="arrow">➜</span>
                </button>
              </div>

              <div className="brand-logo">
                <div className="logo-B"></div>
                <h3>Brington</h3>
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-section">
                <h3>Navigation</h3>
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
              </div>

              <div className="footer-section">
                <h3>Social</h3>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Youtube</p>
              </div>

              <div className="footer-section">
                <h3>Contact</h3>
                <p>info@mysite.com</p>
                <p>Tel. 123-456-7890</p>
                <p>India</p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2035 by Brington Inc</p>

        <p className="built-by">
          Built with love and caffeine
          <span className="sign"></span>
        </p>
      </div>
    </footer>
  );
}
