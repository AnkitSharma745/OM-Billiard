
import WhyChooseUs from "../components/WhyChooseUs";
import CounterShow from "../components/Counter";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import Slider from "react-slick";
import { Link } from "../lib/navigation";
import Balls from "../assets/Product_Category/Balls.jpg";
import { placeholderProduct, images } from "../Data/data";
import NavBar from "../components/NavBar";
import ContactUs from "../components/ContactUs";
import { Helmet } from "react-helmet";
import OptimizedImage from "../components/OptimizedImage";

function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
  };
  return (
    <>
      <Helmet>
        <title>Om Billiard - Premium Pool Tables</title>
        <meta
          name="description"
          content="Explore premium pool tables, cues, and accessories at Om Billiard. Shop for high-quality billiard products."
        />
        <meta
          name="keywords"
          content="billiards, pool tables, cues, accessories, Om Billiard"
        />
        <meta name="author" content="Om Billiard" />
      </Helmet>
      <NavBar />
      <div
        className="relative w-full h-screen"
        style={{ marginTop: "-100px", height: "600px" }}
      >
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <div className="relative h-[600px] w-full overflow-hidden">
                <OptimizedImage
                  src={image}
                  alt=""
                  fill
                  preload={index === 0}
                  sizes="100vw"
                  className="h-full w-full scale-105 object-cover object-center transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>
          ))}
        </Slider>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center space-y-4 px-4">
          <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl transform transition duration-700 ease-in-out hover:scale-105">
            Game On!
          </h1>

          <p className="text-white text-sm sm:text-lg md:text-xl max-w-2xl opacity-90 transition-opacity duration-700 ease-in-out">
            Dive into the world of billiards with OM Billiards
          </p>
          <button className="mt-4 px-6 py-3 text-2xl font-semibold text-white rounded-full border-2 border-transparent bg-gradient-to-r from-indigo-500 to-purple-600 hover:border-indigo-600 hover:text-yellow-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl hover:scale-110">
            Join Us
          </button>
        </div>
      </div>

      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-11">Latest Buzz</h2>
          <div className="grid w-[90%] grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-9 px-6 m-auto justify-items-center">
            {placeholderProduct.map((product) => (
              <div
                key={product.id}
                className="rounded-3xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                <OptimizedImage
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-96 w-full object-cover rounded-3xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="p-6 flex flex-col justify-center text-center">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button className="m-auto mt-1 px-4 py-2 w-40 border-sky-900 border-2 font-semibold rounded-3xl hover:bg-blue-400 hover:text-white hover:border-none text-2xl transition duration-300 transform hover:scale-105">
                    <Link to={product.path}>Explore</Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-[98%] sm:h-2 m-auto flex items-center justify-center min-h-screen bg-yellow-300 px-4">
        <div className="w-full max-w-2xl flex flex-col items-center text-center space-y-6 p-6 rounded-lg">
          <OptimizedImage
            src={Balls}
            className="w-96 h-auto transition-transform transform hover:scale-105 "
            alt="Center Image"
            sizes="(max-width: 768px) 80vw, 24rem"
          />
          <h1
            className="text-5xl
     font-bold text-gray-800"
          >
            Elevate Your Game Today!
          </h1>
          <p className="text-gray-700 text-lg">
            Discover premium tables and accessories that redefine your play.
          </p>
          <button className="p-3 w-40 border-sky-900 border-2 font-semibold rounded-3xl hover:bg-blue-400 hover:text-white hover:border-none text-xl transition duration-300">
            <Link to="/products">Shop Now</Link>
          </button>
        </div>
      </div>

      <WhyChooseUs />

      <Carousel />

      {/* Counter Section */}
      <CounterShow />

      <ContactUs />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;




