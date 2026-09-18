import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="top-foot">
      <div className="footer-m">
        <div className="footer-sm">
          <img
            src="https://achieversbuilders.com/images/achievers.webp"
            alt="Achievers Builders"
          />
          <p>
            Faridabad's trusted township developer since 2003. 23+ years. 500+
            families. 27 acres of planned living.
          </p>
          <div className="social">
            <p>in</p>
            <p>f</p>
            <p>ig</p>
          </div>
        </div>

        <div className="column1">
          <h2>Navigate</h2>
          <p>Home</p>
          <p>About</p>
          <p>Projects</p>
          <p>Amenities</p>
          <p>Contact</p>
        </div>

        <div className="column1">
          <h2>Projects</h2>
          <p>Elite Enclave</p>
          <p>Expandable Villas</p>
          <p>Gardenia</p>
          <p>Status Enclave</p>
          <p>Centre Point Mall</p>
        </div>

        <div className="contact">
          <h2>Contact</h2>
          <p>
            ☎ <span>+91 87961 53330</span>
          </p>
          <p>
            ☎ <span>+91 93110 53330</span>
          </p>
          <p>
            ✉{" "}
            <span>
              achievers_blds@rediffmail.com
              <br />
              achieversbuildersmarketing@gmail.com
            </span>
          </p>
          <p>
            ⌖{" "}
            <span>
              97W8+9Q8, Kalindi Hill, Nawada Village, Sector 49, Faridabad,
              Haryana 121001
            </span>
          </p>
          <p>
            ◷ <span>Mon-Sun: 9AM - 6PM</span>
          </p>
        </div>
      </div>

      <div className="last">
        <p>
          © 2026 Achievers Builders Pvt. Ltd. All Rights Reserved | Designed By
        </p>
        <div className="p">
          <p>Privacy Policy</p>
          <p>Terms &amp; Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
