import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="max-w-6xl mx-8 md:mx-auto">
      <Slider {...settings}>
        <div className="text-amber-200">
          <img
            className="w-full p-8 aspect-4/3 object-cover"
            src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"
            alt="foods"
          />
        </div>
        <div className="text-amber-200">
          <img
            className="w-full p-8 aspect-4/3 object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjkm5XF5dTHkAYhv1AZ1RG0ck8kz4evw9NnZUtbhvwHhB70lwW8s9uB6FlTHJ7rkG9ABM&usqp=CAU"
            alt="foods"
          />
        </div>
        <div className="text-amber-200">
          <img
            className="w-full p-8 aspect-4/3 object-cover"
            src="https://media-cdn.tripadvisor.com/media/photo-s/11/3d/be/b7/tasty-restaurant.jpg"
            alt="foods"
          />
        </div>
        <div className="text-amber-200">
          <img
            className="w-full p-8 aspect-4/3 object-cover"
            src="https://i.pinimg.com/originals/4b/5d/d7/4b5dd7c3bbec631075ceefd64e7e09f6.jpg"
            alt="foods"
          />
        </div>
        <div className="text-amber-200 text-2xl">
          <img
            className="w-full p-8 aspect-4/3 object-cover"
            src="https://i.pinimg.com/736x/9b/2e/16/9b2e1651e6d9c185289f2e5b8e1d6fe6.jpg"
            alt="foods"
          />
        </div>
        <div className="text-amber-200 text-2xl">
          <img
            className="w-full p-8 aspect-4/3 object-cover"
            src="https://p0.pikist.com/photos/947/734/thai-food-restorant-asian-restaurant-healthy-tasty-salad-lunch.jpg"
            alt="foods"
          />
        </div>
        <div className="text-amber-200 text-2xl">
          <img
            className="w-full p-8 aspect-4/3 object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAGstGxcu_o2QSWOwxpwAcSP2mZB2raYIHLA&usqp=CAU"
            alt="foods"
          />
        </div>
        <div className="text-amber-200">
          <img
            className="w-full p-8 aspect-4/3 object-cover"
            src="https://s3.envato.com/files/329130063/top%20view%20(tasty%20vegetable%20salad)%20inside%20plate%20with%20fork%20on%20dark%20background%20restaurant%20meal%20color%20health%20diet%20cuisine%20lunch%20food.jpg"
            alt="foods"
          />
        </div>
        <div className="text-amber-200">
          <img
            className="w-full p-8 aspect-4/3 object-cover"
            src="https://thumbs.dreamstime.com/b/pub-menu-snack-meat-group-friends-tasty-delicious-snacks-restaurant-food-beer-wooden-board-french-fries-fish-sticks-burrito-138740249.jpg"
            alt="foods"
          />
        </div>
        <div className="text-amber-200">
          <img
            className="w-full p-8 aspect-4/3 object-cover"
            src="https://media-cdn.tripadvisor.com/media/photo-s/03/d3/9d/1e/wtf-what-tasty-food.jpg"
            alt="foods"
          />
        </div>
        <div className="text-amber-200">
          <img
            className="w-full p-8 aspect-4/3 object-cover"
            src="https://demwvw9lpu8ak.cloudfront.net/attachments/dae7265a26802788d7d853e101a2b3cccd91c0d4/store/acbf197d32dc30dae3ddef8754633032b01b1e60064d71213280dbe0c61e/22.jpg"
            alt="foods"
          />
        </div>
        <div className="text-amber-200">
          <img
            className="w-full p-8 aspect-4/3 object-cover"
            src="https://media-cdn.tripadvisor.com/media/photo-s/05/17/ce/43/beas-vegetarian-dhaba.jpg"
            alt="foods"
          />
        </div>
      </Slider>
    </div>
  );
}
