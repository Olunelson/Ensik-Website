import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="inner-content">
        <h1>Ensik Global Ventures</h1>
        <p>Distributor of All kinds of NBL products</p>

        <a
          href="https://api.whatsapp.com/send?phone=2348160533966&text=Hello%2C%20I'm%20contacting%20you%20from%20your%20website"
          className="hero-btn green-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect with us
        </a>
      </div>
    </div>
  );
};

export default Header;
