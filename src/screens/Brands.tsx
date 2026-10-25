import Aramith from "../assets/Brands/Aramith_Logo_Brand.avif";
import Wiraka from "../assets/Brands/Wiraka_Image.png";
import Talisman from "../assets/Brands/TalisMan.jpeg";
import OptimizedImage from "../components/OptimizedImage";

const brands = [
  {
    name: "Aramith",
    description: "Best high quality billiard balls",
    logo: Aramith, // Replace with actual image URL
  },
  {
    name: "Wiraka",
    description:
      "Wiraka, specializes in billiards, snooker, and pool, and has been  leader in the billiard for over 40 years.",
    logo: Wiraka, // Replace with actual image URL
  },
  {
    name: "Talisman",
    description:
      "Talisman Billiards is a company that produces high-quality cue tips for snooker",
    logo: Talisman,
  },
];

const Brands = () => {
  return (
    <div className="bg-blue-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Brands</h1>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              data-aos="flip-left"
              data-aos-delay={`${index * 100}`}
            >
              <OptimizedImage
                src={brand.logo}
                alt={brand.name}
                className="w-52 h-auto m-auto"
                sizes="(max-width: 768px) 70vw, 17rem"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{brand.name}</h2>
                <p className="text-gray-600">{brand.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;

