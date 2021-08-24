import React, { Fragment } from "react";

const Intro = () => {
  return (
    <Fragment>
      <section
        id="home"
        className="my-align-items-center my-fullheight my-bg-img my-bg-img-fixed"
        style={{ backgroundImage: "url('assets/home.jpg')" }}
      >
        <div className="my-container">
          <div className="my-row">
            <div className="my-col-6 my-col-xs-12">
              <div className="my-slogan">
                <h1>BR BAKERS</h1>
                <p>
                  BR Bakers is the first bakery in the town that prepares all of
                  its products in desi ghee and butter and its our primary
                  priority to serve hygenic food to our valuable customers.
                </p>
                <button>Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Intro;
