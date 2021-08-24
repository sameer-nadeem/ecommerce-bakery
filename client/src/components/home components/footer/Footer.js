import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <section
        className="my-footer my-bg-img"
        style={{ backgroundImage: "url('assets/footer.jpg')" }}
      >
        <div className="my-container">
          <div className="my-row">
            <div className="my-col-6 my-col-xs-12">
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
            <div className="my-col-2 my-col-xs-12">
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
            <div className="my-col-4 my-col-xs-12">
              <h1>Subscribe & Media</h1>
              <br />
              <p>
                BR Bakers is the first bakery in the town that prepares all of
                its products in desi ghee and butter and its our primary
                priority to serve hygenic food to our valuable customers.
              </p>
              <div className="my-input-group">
                <input type="text" placeholder="Enter Your Email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Footer;
