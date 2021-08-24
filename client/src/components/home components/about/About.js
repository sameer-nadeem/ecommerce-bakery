import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <section
        id="about"
        className="my-fullheight my-align-items-center my-about"
      >
        <div className="my-container">
          <div className="my-row">
            <div className="my-col-7 my-h-xs">
              <img
                src="assets/about.jpg"
                alt="About Img"
                className="my-fullwidth"
              />
            </div>
            <div className="my-col-5 my-col-xs-12 my-align-items-center ">
              <div className="my-about-slogan">
                <h3>We made most delicious food in the town.</h3>
                <p>
                  BR Bakers is the first bakery in the town that prepares all of
                  its products in desi ghee and butter and its our primary
                  priority to serve hygenic food to our valuable customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
