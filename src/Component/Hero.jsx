import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="hlo">
        <div className="hero">
          <p className="hero-eyebrow">SINCE 2003 - FARIDABAD, HARYANA</p>
          <h1>
            Building <span>Faridabad's</span>
            <br />
            Finest Township.
          </h1>
          <p className="hero-copy">
            23 years. 5 landmark projects. 27 acres of planned living in Sector
            49. Over 500 families trust us - and our commitment has never
            wavered.
          </p>
          <div className="hero-actions">
            <button type="button">EXPLORE PROJECTS</button>
            <button type="button">BOOK SITE VISIT</button>
          </div>
        </div>
        <div className="hero1">
          <form className="form">
            <input type="text" placeholder="Full Name" required />
            <input type="text" placeholder="Phone Number" required />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Enter your message"></textarea>
            <button
              type="submit"
              onSubmit={() => {
                alert("Form submitted successfully!");
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="hero2">
        <div className="hero2ma">
          <div className="hero2p1"></div>
          <div className="hero2p2">
            <p className="about-eyebrow">ABOUT US</p>
            <div className="about-divider">
              <span></span>
              <p>OUR STORY</p>
              <span></span>
            </div>
            <h2>
              Faridabad's most trusted
              <br />
              developer <em>since 2003.</em>
            </h2>
            <p className="about-copy">
              We don't just build projects. We create landmarks. With over 23
              years of excellence, Achievers has delivered spaces that stand the
              test of time. Spread across 27 acres of thoughtfully developed
              land, we are proud to be home to 500+ happy families. From
              eco-friendly living to commercial excellence, every project
              reflects our commitment to quality, innovation, and integrity.
            </p>
            <p className="about-copy">
              Founded by <strong>Mr. Vijay Bhardwaj</strong> with a single
              belief - that every family deserves a home built with the same
              care you'd put into your own. That belief hasn't changed in 23
              years.
            </p>
            <div className="about-features">
              <div>Premium Quality</div>
              <div>Transparent Pricing</div>
              <div>On-Time Delivery</div>
              <div>Relationship-First</div>
            </div>
            <button className="about-button" type="button">
              KNOW MORE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
