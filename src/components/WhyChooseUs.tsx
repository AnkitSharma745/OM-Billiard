
import AOS from "aos";
import { useEffect } from "react";

const features = [
  { id: "01", title: "Quality", icon: "💡" },
  { id: "02", title: "Variety", icon: "🔍" },
  { id: "03", title: "Service", icon: "👥" },
  { id: "04", title: "Expertise", icon: "📄" },
  { id: "05", title: "Support", icon: "👍" },
];

export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({ duration: 600, easing: "ease-in-out", once: false });
  }, []);

  return (
    <div className="px-4 py-12 bg-gray-50 sm:px-6 lg:px-8 mb-8">
      <div className="text-center mb-12">
        <h2
          className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl"
          data-aos="fade-up"
        >
          Why Choose Us?
        </h2>
        <p
          className="mt-2 text-lg text-gray-600"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Your one-stop shop for all things pool! Quality, service, and style
          await!
        </p>
      </div>

      <div
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <span className="text-4xl">{feature.icon}</span>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

