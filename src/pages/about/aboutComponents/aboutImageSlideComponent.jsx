import Slider from "react-slick";


function ImageSlide() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <section className="max-w-6xl">
      <Slider {...settings}>
        
      </Slider>
    </section>
  );
}

export default ImageSlide;
