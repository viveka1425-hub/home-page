import "../Test/Footer.css";

export default function Footer() {
  return (
    <footer style={{ width: "950pt", height: "550pt", marginTop:"80pt" }} className="footer">
      <div className="footer-top">
        <div className="brand">
          <h1 style={{ fontSize: "75pt", marginLeft: "20pt" }}>Be the First to Receive <br /> the Latest News</h1>
        </div>

        <div className="footer-links">
          <div>
            <button className="signup-btn">
              signUp <span className="arrow">➜</span>
            </button>

            <div>
              <div className="logo-B"></div>
              <h3>Brington</h3>
            </div>
          </div>
          <div className="footer-margin">
            <h3>Navigation</h3>
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
          </div>

          <div className="footer-margin">
            <h3>Social</h3>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Youtube</p>
          </div>

          <div className="footer-margin">
            <h3>Contact</h3>
            <p>info@mysite.com</p>
            <p>Tel. 123-456-7890</p>
            <p>India</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2035 by Brington Inc</p>
        <p>Built with love and caffeine by
          <div className="sign"></div>
        </p>
      </div>
    </footer>
  );
}
