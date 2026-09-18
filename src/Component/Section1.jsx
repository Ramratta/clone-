import { useState } from "react";
import "./Section1.css";

const Section1 = () => {
  const testimonials = [
    {
      quote:
        "We looked at over ten builders before choosing Achievers. The planning, roads, parks, and complete ecosystem made the decision easy.",
      name: "Suresh Malhotra",
      project: "Expandable Villas",
      initials: "SM",
    },
    {
      quote:
        "The quality of construction and the attention to detail gave our family complete confidence from the first visit.",
      name: "Neha Sharma",
      project: "Elite Enclave",
      initials: "NS",
    },
    {
      quote:
        "A well-planned community with thoughtful spaces, reliable support, and a home we are proud to share.",
      name: "Amit Verma",
      project: "Gardenia",
      initials: "AV",
    },
  ];
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonial = testimonials[activeTestimonial];

  return (
    <>
      <section className="section1">
        <div className="section1p1">
          <strong>23+</strong>
          <h3>Years of Excellence</h3>
          <p>Trusted since 2003</p>
        </div>
        <div className="section1p1">
          <strong>500+</strong>
          <h3>Happy Families</h3>
          <p>Proud homeowners</p>
        </div>
        <div className="section1p1">
          <strong>27</strong>
          <h3>Acres Developed</h3>
          <p>Planned township</p>
        </div>
        <div className="section1p1">
          <strong>5+</strong>
          <h3>Projects Delivered</h3>
          <p>Landmark developments</p>
        </div>
      </section>

      <section className="testimonial-section">
        <p className="testimonial-kicker">WHAT FAMILIES SAY</p>
        <p className="testimonial-label">TESTIMONIALS</p>
        <h2>
          Trusted by 500+ families
          <em>across Faridabad.</em>
        </h2>
        <span className="testimonial-mark">99</span>
        <blockquote>“{testimonial.quote}”</blockquote>
        <div className="testimonial-person">
          <span className="testimonial-avatar">{testimonial.initials}</span>
          <div>
            <strong>{testimonial.name}</strong>
            <small>{testimonial.project}</small>
          </div>
        </div>
        <div className="testimonial-controls">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() =>
              setActiveTestimonial(
                (activeTestimonial - 1 + testimonials.length) %
                  testimonials.length,
              )
            }
          >
            &#8592;
          </button>
          {testimonials.map((item, index) => (
            <button
              className={index === activeTestimonial ? "is-active" : ""}
              key={item.name}
              type="button"
              aria-label={`Show testimonial ${index + 1}`}
              onClick={() => setActiveTestimonial(index)}
            />
          ))}
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() =>
              setActiveTestimonial(
                (activeTestimonial + 1) % testimonials.length,
              )
            }
          >
            &#8594;
          </button>
        </div>
      </section>

      <section className="story-section">
        <strong className="story-years">23+</strong>
        <h2>
          Years of building homes, <em>not just structures.</em>
        </h2>
        <p>
          Walk the site. Meet the team. See why 500+ families chose Achievers.
        </p>
        <div className="story-actions">
          <button type="button">
            BOOK A SITE VISIT <span>→</span>
          </button>
          <button type="button">OUR STORY</button>
        </div>
      </section>

      <section className="section3">
        <div className="sectionimg" aria-label="Green landscaped park" />
        <div className="section-content">
          <h2>
            Experience Green Living
            <em>with Beautiful Parks</em>
          </h2>
          <p>
            Strategically located amidst the serene Aravalli Hills, this project
            offers a perfect blend of nature and modern living. With a
            thoughtfully designed in-house mall and access to all essential
            amenities, it ensures convenience at every step.
          </p>
        </div>
      </section>

      <section className="section4">
        <div className="section4p1">
          <strong>500+</strong>
          <h2>
            Families call our township home.
            <em>Yours could be next.</em>
          </h2>
          <p>
            Experience premium living with modern infrastructure, peaceful
            surroundings, and a community designed for comfort, safety, and
            long-term value.
          </p>
          <button type="button">VIEW PROJECTS</button>
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
      </section>
    </>
  );
};

export default Section1;
