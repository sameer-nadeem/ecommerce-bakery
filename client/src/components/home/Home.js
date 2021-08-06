import React from "react";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="align-items-center fullheight bg-img bg-img-fixed"
        style={{ backgroundImage: "url('assets/home.jpg')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-6 col-xs-12">
              <div className="slogan">
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
    </>
  );
};

export default Home;
