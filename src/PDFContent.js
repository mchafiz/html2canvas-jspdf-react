import React from "react";

export default function PDFContent() {
  return (
    <div>
      {" "}
      <section className="header">
        <nav>
          <a href="index.html">
            <img src="static/images/logo.png" alt="6" />
          </a>
          <div className="nav-links" id="navLinks">
            <i className="fas fa-times" ></i>
            <ul>
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/">ABOUT</a>
              </li>
              <li>
                <a href="/">COURSE</a>
              </li>
              <li>
                <a href="/">BLOG</a>
              </li>
              <li>
                <a href="/">CONTACT</a>
              </li>
            </ul>
          </div>
          <i className="fas fa-bars" ></i>
        </nav>
        <div className="text-box">
          <h1>World's Biggest University</h1>
          <p>
            Making website is now one of the easiest thing in the world. you just need to learn HTML, CSS,
            <br />
            Javascript and you are good to go.
          </p>
          <a href="/" className="hero-btn">
            Visit Us to know More
          </a>
        </div>
      </section>
      <section className="course">
        <h1>Courses We Offer</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="row">
          <div className="course-col">
            <h3>Intermediate</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deleniti consequatur eius perspiciatis voluptatem, aperiam laudantium eaque, dignissimos pariatur ratione veniam laborum repudiandae aspernatur, excepturi tempora
              at a porro nemo?
            </p>
          </div>
          <div className="course-col">
            <h3>Degree</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deleniti consequatur eius perspiciatis voluptatem, aperiam laudantium eaque, dignissimos pariatur ratione veniam laborum repudiandae aspernatur, excepturi tempora
              at a porro nemo?
            </p>
          </div>
          <div className="course-col">
            <h3>Post Graduation</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deleniti consequatur eius perspiciatis voluptatem, aperiam laudantium eaque, dignissimos pariatur ratione veniam laborum repudiandae aspernatur, excepturi tempora
              at a porro nemo?
            </p>
          </div>
        </div>
      </section>
      <section className="campus">
        <h1>Our Global Campus</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="row">
          <div className="campus-col">
            <img src="static/images/london.png" alt="london" />
            <div className="layer">
              <h3>LONDON</h3>
            </div>
          </div>
          <div className="campus-col">
            <img src="static/images/newyork.png" alt="newyork" />
            <div className="layer">
              <h3>NEW YORK</h3>
            </div>
          </div>
          <div className="campus-col">
            <img src="static/images/washington.png" alt="wangshinton" />
            <div className="layer">
              <h3>WASHINGTON</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="facilities">
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="row">
          <div className="facilities-col">
            <img src="static/images/library.png" alt="1" />

            <h3>World className Library</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum beatae quae facere. Eius fugit atque aliquid at? Qui quam, veritatis ullam quod nihil, obcaecati provident, sint eveniet incidunt molestiae commodi.</p>
          </div>
          <div className="facilities-col">
            <img src="static/images/basketball.png" alt="2" />
            <h3>Largest Play Ground</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum beatae quae facere. Eius fugit atque aliquid at? Qui quam, veritatis ullam quod nihil, obcaecati provident, sint eveniet incidunt molestiae commodi.</p>
          </div>
          <div className="facilities-col">
            <img src="static/images/cafeteria.png" alt="3" />
            <h3>Tasty and Healty Food</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum beatae quae facere. Eius fugit atque aliquid at? Qui quam, veritatis ullam quod nihil, obcaecati provident, sint eveniet incidunt molestiae commodi.</p>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <h1>What Our Student Says</h1>
        <p>Lorem ipsum dolor sit amer, consectetur adipiscing elit.</p>

        <div className="row">
          <div className="testimonial-col">
            <img src="static/images/user1.jpg" alt="4" />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugiat maxime incidunt, a dignissimos optio in impedit obcaecati perspiciatis esse, ad illum reprehenderit qui? Maxime accusantium veritatis quisquam optio
                reiciendis.
              </p>
              <h3>Christine Berkley</h3>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
          </div>

          <div className="testimonial-col">
            <img src="static/images/user2.jpg" alt="5" />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugiat maxime incidunt, a dignissimos optio in impedit obcaecati perspiciatis esse, ad illum reprehenderit qui? Maxime accusantium veritatis quisquam optio
                reiciendis.
              </p>
              <h3>Ahmad Said</h3>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half"></i>
            </div>
          </div>
        </div>
      </section>
      <section className="cta">
        <h1>
          Enroll For Our Various Online Courses
          <br />
          Anywhere from The World
        </h1>
        <a href="/" className="hero-btn">
          CONTACT US
        </a>
      </section>
      <section className="footer">
        <h4>About Us</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, aspernatur officia! Fugit earum optio aperiam quas itaque similique voluptatum iusto dolorum quo enim eligendi, sequi in debitis excepturi eaque soluta.</p>
        <div className="icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin"></i>
        </div>
      </section>
    </div>
  );
}
