import { useNavigate } from "../lib/navigation";
import PoolTableData from "../Data/poolTable";
import OrderNowModal from "./OrderFormModal";
import FoosBall from "../assets/Product_Category/Foosball.jpg";
import type { ProductDetails } from "../lib/types";
import OptimizedImage from "./OptimizedImage";

function PoolTable() {
  const Navigate = useNavigate();
  const handleViewDetails = (details: ProductDetails) => {
    Navigate(`/pool-table/${details.title}`, { state: { details } });
  };

  return (
    <div className="mb-12 p-4 lg:p-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">
        Tables
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {PoolTableData.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <OptimizedImage
              src={product.img}
              alt={product.name}
              className="w-full h-56 object-cover transition-transform duration-300 transform hover:scale-110"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-green-500">{`₹${product.details.price.current}`}</span>
                <button
                  onClick={() => handleViewDetails(product.details)}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2">
          <OptimizedImage
            className="w-full h-56 object-cover transition-transform duration-300 transform hover:scale-110"
            src={FoosBall}
            alt="Foosball table "
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              Soker Foosball Table
            </h2>
            <p className="text-gray-600 mb-4">
              Premium Foosball table. Kick the balls get more comfort at play.
              Best premium indoor play that elevate your fun{" "}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-green-500">{`₹29999`}</span>
              <OrderNowModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PoolTable;


