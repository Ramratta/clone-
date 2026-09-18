import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img
            src="https://achieversbuilders.com/images/achievers.webp"
            alt=""
          />
        </div>
        <div className="nav-links">
          <ul className="nav-ul">
            <li className="h">Home</li>
            <li className="A">About</li>
            <li>Content</li>
            <li>Project</li>
            <li>Blog</li>
            <li>Amwnties</li>
          </ul>
        </div>
        <div className="nav-btn">
          <button>+91 9876543210</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
