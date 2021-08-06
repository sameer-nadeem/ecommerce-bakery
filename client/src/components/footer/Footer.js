import React from "react";

const Footer = () => {
  return (
    <>
      <section
        className="footer bg-img"
        style={{ backgroundImage: "url('assets/footer.jpg')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-6 col-xs-12">
              <h1>BR Bakers</h1>
              <br />
              <p>
                BR Bakers is the first bakery in the town that prepares all of
                its products in desi ghee and butter and its our primary
                priority to serve hygenic food to our valuable customers.
              </p>
              <br />
              <p>Email: Email</p>
              <p>Phone: Phone</p>
              <p>Website: Website</p>
            </div>
            <div className="col-2 col-xs-12">
              <h1>About Us</h1>
              <br />
              <p>
                <a href="">Chefs</a>
              </p>
              <p>
                <a href="">Testimonials</a>
              </p>
              <p>
                <a href="">Chefs</a>
              </p>
              <p>
                <a href="">Chefs</a>
              </p>
            </div>
            <div className="col-4 col-xs-12">
              <h1>Subscribe & Media</h1>
              <br />
              <p>
                BR Bakers is the first bakery in the town that prepares all of
                its products in desi ghee and butter and its our primary
                priority to serve hygenic food to our valuable customers.
              </p>
              <div className="input-group">
                <input type="text" placeholder="Enter Your Email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
