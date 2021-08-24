import React, { Fragment } from "react";

const Foodmenu = () => {
  return (
    <Fragment>
      <section
        className="my-align-items-center my-bg-img my-bg-img-fixed"
        id="food-menu-section"
        style={{ backgroundImage: "url('assets/food-menu-bg.jpg')" }}
      >
        <div className="my-container">
          <div className="my-food-menu" id="food-menu">
            <h1>What will you eat Today?</h1>
            <p>
              BR Bakers is the first bakery in the town that prepares all of its
              products in desi ghee and butter and its our primary priority to
              serve hygenic food to our valuable customers.
            </p>
            <div className="my-food-category">
              <button className="active my-col-1 my-col-xs-3">All</button>
              <button className="my-col-1 my-col-xs-3">Fast Food</button>
              <button className="my-col-1 my-col-xs-3">Cakes</button>
              <button className="my-col-1 my-col-xs-3">Breads</button>
              <button className="my-col-1 my-col-xs-3">Sweets</button>
              <button className="my-col-1 my-col-xs-3">Sweets</button>
            </div>
            <div className="my-food-item-wrap">
              <div className="my-food-item">
                <div className="my-item-wrap">
                  <div className="my-item-img">
                    <div
                      className="my-image-holder my-bg-img"
                      style={{ backgroundImage: "url('assets/salad.jpg')" }}
                    ></div>
                  </div>
                  <div className="my-item-info">
                    <div>
                      <h3>Cake</h3>
                      <span>500rps</span>
                    </div>
                    <div className="cart-btn">
                      <i className="bx bx-cart"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-food-item">
                <div className="my-item-wrap">
                  <div className="my-item-img">
                    <div
                      className="my-image-holder my-bg-img"
                      style={{ backgroundImage: "url('assets/salad.jpg')" }}
                    ></div>
                  </div>
                  <div className="my-item-info">
                    <div>
                      <h3>Cake</h3>
                      <span>500rps</span>
                    </div>
                    <div className="cart-btn">
                      <i className="bx bx-cart"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-food-item">
                <div className="my-item-wrap">
                  <div className="my-item-img">
                    <div
                      className="my-image-holder my-bg-img"
                      style={{ backgroundImage: "url('assets/salad.jpg')" }}
                    ></div>
                  </div>
                  <div className="my-item-info">
                    <div>
                      <h3>Cake</h3>
                      <span>500rps</span>
                    </div>
                    <div className="cart-btn">
                      <i className="bx bx-cart"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-food-item">
                <div className="my-item-wrap">
                  <div className="my-item-img">
                    <div
                      className="my-image-holder my-bg-img"
                      style={{ backgroundImage: "url('assets/salad.jpg')" }}
                    ></div>
                  </div>
                  <div className="my-item-info">
                    <div>
                      <h3>Cake</h3>
                      <span>500rps</span>
                    </div>
                    <div className="cart-btn">
                      <i className="bx bx-cart"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-food-item">
                <div className="my-item-wrap">
                  <div className="my-item-img">
                    <div
                      className="my-image-holder my-bg-img"
                      style={{ backgroundImage: "url('assets/salad.jpg')" }}
                    ></div>
                  </div>
                  <div className="my-item-info">
                    <div>
                      <h3>Cake</h3>
                      <span>500rps</span>
                    </div>
                    <div className="cart-btn">
                      <i className="bx bx-cart"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-food-item">
                <div className="my-item-wrap">
                  <div className="my-item-img">
                    <div
                      className="my-image-holder my-bg-img"
                      style={{ backgroundImage: "url('assets/salad.jpg')" }}
                    ></div>
                  </div>
                  <div className="my-item-info">
                    <div>
                      <h3>Cake</h3>
                      <span>500rps</span>
                    </div>
                    <div className="cart-btn">
                      <i className="bx bx-cart"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-food-item">
                <div className="my-item-wrap">
                  <div className="my-item-img">
                    <div
                      className="my-image-holder my-bg-img"
                      style={{ backgroundImage: "url('assets/salad.jpg')" }}
                    ></div>
                  </div>
                  <div className="my-item-info">
                    <div>
                      <h3>Cake</h3>
                      <span>500rps</span>
                    </div>
                    <div className="cart-btn">
                      <i className="bx bx-cart"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-food-item">
                <div className="my-item-wrap">
                  <div className="my-item-img">
                    <div
                      className="my-image-holder my-bg-img"
                      style={{ backgroundImage: "url('assets/salad.jpg')" }}
                    ></div>
                  </div>
                  <div className="my-item-info">
                    <div>
                      <h3>Cake</h3>
                      <span>500rps</span>
                    </div>
                    <div className="cart-btn">
                      <i className="bx bx-cart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Foodmenu;
