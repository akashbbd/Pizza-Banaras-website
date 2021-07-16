import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About Us</h3>
            <h1>WELCOME TO PIZZA BANARAS</h1>
            <p>
              PIZZA BANARAS is all about quality you can trust. As one of the original founding Pizza brands and the 3rd largest Pizza chain in India, our sole mission is making the freshest, tastiest and funnest Pizza around. Our classic pan pizza will always be a fan favourite, with a soft and chewy crust perfectly balancing out the healthy tomato puree and mozzarella - cheddar blended cheese. Our authentic Italian crust for those who would prefer a light and airy crust to more fully enjoy the toppings. Thin, light and delicious.
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              {/* /img/pizza.jpg */}
              <img src="https://c4.wallpaperflare.com/wallpaper/205/168/868/dinner-food-pie-pizza-wallpaper-preview.jpg" alt="Pizza" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
