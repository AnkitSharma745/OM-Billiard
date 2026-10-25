import { poolTableBalls } from "../Data/data";
import AOS from "aos";

import { useEffect } from "react";
import OrderNowModal from "./OrderFormModal";
import OptimizedImage from "./OptimizedImage";

const Balls = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="mb-12 p-4 lg:p-8">
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-600">
        Pool Table Balls
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {poolTableBalls.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <div className="flex justify-center items-center bg-gray-100">
              <OptimizedImage
                src={product.img}
                alt={product.name}
                className="w-full h-48 object-contain p-4 transition-transform duration-300 transform hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-green-500">{`₹${product.price.toLocaleString()}`}</span>
                <OrderNowModal />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Balls;

