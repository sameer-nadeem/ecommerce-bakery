import React from "react";

const About = () => {
  return (
    <>
      <section id="about" className="fullheight align-items-center about">
        <div className="container">
          <div className="row">
            <div className="col-7 h-xs">
              <img
                src="assets/about.jpg"
                alt="About Img"
                className="fullwidth"
              />
            </div>
            <div className="col-5 col-xs-12 align-items-center ">
              <div className="about-slogan">
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
    </>
  );
};

export default About;
