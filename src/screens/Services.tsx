import Instalation from "../assets/Services/2024-04-12-11_3437am-Set_3__png.webp";
import Maintenance from "../assets/Services/maintenance.png";
import Custom from "../assets/Services/pool-table-repair-service-1000x1000.webp";
const services = [
  {
    title: "Table Installation",
    description:
      "Our team of certified experts ensures a seamless and professional installation of pool and foosball tables. We guarantee precise leveling, secure assembly, and attention to detail, so your table is ready for perfect gameplay from the start.",
    image: Instalation,
  },
  {
    title: "Table Maintenance",
    description:
      "Keep your investment in prime condition with our regular maintenance services. From felt replacement to pocket repairs, we provide comprehensive care to extend the life of your table and ensure consistent, high-quality play.",
    image: Maintenance,
  },
  {
    title: "Custom Design",
    description:
      "Express your personal style with our custom-designed pool and foosball tables. Whether you're looking for a classic aesthetic or a modern twist, our design team works with you to create a table that complements your space and meets your specifications.",
    image: Custom,
  },
];

const Services = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              data-aos="flip-right"
              data-aos-delay={`${index * 100}`}
            >
              <img
                src={service.image.src}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

