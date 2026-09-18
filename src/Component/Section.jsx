import "./Section.css";
import Section1 from "./Section1";

function Section() {
  return (
    <div className="sec">
      <div className="sec1">
        <div className="sec-heading">
          <p className="sec-eyebrow">OUR WORK</p>
          <div className="sec-label">
            <span></span>
            <p>PROJECTS</p>
            <span></span>
          </div>
          <h2>
            Projects that define
            <br />
            <p>the Faridabad skyline.</p>
          </h2>
        </div>
        <button className="sec-button" type="button">
          VIEW ALL
        </button>
      </div>
      <div className="sec2">
        <div className="item1">
          <div className="img">
            <img
              src="https://achieversbuilders.com/images/project_image.webp"
              alt=""
            />
          </div>
          <div className="project-detail">
            <p>Premium Builder Floors</p>
            <h3>Elite Enclave</h3>
            <small>Sector 49, Faridabad</small>
            <br />
            <span>VIEW PROJECT</span>
          </div>
        </div>
        <div className="item2">
          <div className="img">
            <img
              src="https://achieversbuilders.com/images/project_image.webp"
              alt=""
            />
          </div>
          <div className="project-detail">
            <p>Premium Builder Floors</p>
            <h3>Elite Enclave</h3>
            <small>Sector 49, Faridabad</small>
            <br />
            <span>VIEW PROJECT</span>
          </div>
        </div>
        <div className="item3">
          <div className="img">
            <img
              src="https://achieversbuilders.com/images/project_image.webp"
              alt=""
            />
          </div>
          <div className="project-detail">
            <p>Premium Builder Floors</p>
            <h3>Elite Enclave</h3>
            <small>Sector 49, Faridabad</small>
            <br />
            <span>VIEW PROJECT</span>
          </div>
        </div>
        <div className="item4">
          <div className="img">
            <img
              src="https://achieversbuilders.com/images/project_image.webp"
              alt=""
            />
          </div>
          <div className="project-detail">
            <p>Premium Builder Floors</p>
            <h3>Elite Enclave</h3>
            <small>Sector 49, Faridabad</small>
            <br />
            <span>VIEW PROJECT</span>
          </div>
        </div>
        <div className="item5">
          <div className="img">
            <img
              src="https://achieversbuilders.com/images/project_image.webp"
              alt=""
            />
          </div>
          <div className="project-detail">
            <p>Premium Builder Floors</p>
            <h3>Elite Enclave</h3>
            <small>Sector 49, Faridabad</small>
            <br />
            <span>VIEW PROJECT</span>
          </div>
        </div>
      </div>
      <Section1 />
    </div>
  );
}

export default Section;
