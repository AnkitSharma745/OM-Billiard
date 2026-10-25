import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "../Data/data";
import type { CustomArrowProps } from "react-slick";

const Carousel = () => {
  const MotionDiv: any = motion.div;
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    fade: true,
  };

  return (
    <div className="carousel-container w-full">
      <Slider {...settings}>
        {images.map((image, index) => (
          <MotionDiv
            key={index}
            className="slide px-2"
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="rounded-lg object-cover w-full h-[400px] sm:h-[500px] lg:h-[600px]"
            />
          </MotionDiv>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props: CustomArrowProps) => {
  // eslint-disable-next-line react/prop-types
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-70 p-2 rounded-full cursor-pointer hover:bg-opacity-90"
      onClick={onClick}
    >
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};

const SamplePrevArrow = (props: CustomArrowProps) => {
  // eslint-disable-next-line react/prop-types
  const { onClick } = props; // Extract onClick from props
  return (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-70 p-2 rounded-full cursor-pointer hover:bg-opacity-90"
      onClick={onClick}
    >
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
};

export default Carousel;
