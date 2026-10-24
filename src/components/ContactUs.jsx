import { useState } from "react";
import { sendEmails } from "../email";
import AOS from "aos";
import "aos/dist/aos.css";
import { Switch } from "@headlessui/react";
import { FaWhatsapp } from "react-icons/fa";

const contactDetails = [
  {
    id: "01",
    title: "Phone",
    icon: "📞",
    info: "+91 9810508355",
    link: "tel:+919810508355",
  },
  {
    id: "02",
    title: "Email",
    icon: "✉️",
    info: "askombilliard@gmail.com",
    link: "mailto:askombilliard@gmail.com",
  },
  {
    id: 3,
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    info: "+91 81784 55277",
    link: `https://wa.me/918178455277?text=${encodeURIComponent(
      "Hello, I would like to know more about your products and services "
    )}`,
  },
  {
    id: "03",
    title: "Address",
    icon: "🏢",
    info: "Gali No. 2, Fng Vihar 2, near Garhi, Chokhandi, Sector 121, Noida, Uttar Pradesh 201309",
    link: "https://www.google.com/maps/search/?api=1&query=Gali+No.+2%2C+Fng+Vihar+2%2C+near+Garhi%2C+Chokhandi%2C+Sector+121%2C+Noida%2C+Uttar+Pradesh+201309",
  },
  { id: "04", title: "Working Hours", icon: "⏰", info: "Mon-Sat: 9AM - 7PM" },
];

export default function ContactUs() {
  AOS.init({
    duration: 200,
    easing: "ease-in-out",
    once: false,
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [agreed, setAgreed] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("Sending...");

    // Call the email wrapper function
    const result = await sendEmails(formData);

    // Update the UI based on the result
    if (result.success) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }

    setStatusMessage(result.message);
  };

  return (
    <div
      id="#contact"
      className="px-4 py-12 bg-gray-50 sm:px-6 mt-9 lg:px-8 mb-8"
    >
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2
          className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl"
          data-aos="fade-up"
        >
          Get In Touch
        </h2>
        <p
          className="mt-2 text-lg text-gray-600"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          We are here to help! Reach out to us via phone, email, or visit us in
          person.
        </p>
      </div>

      {/* Contact Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {contactDetails.map((detail, index) => (
          <a
            href={detail.link}
            target="_blank"
            key={detail.id}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <span className="text-4xl">{detail.icon}</span>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              {detail.title}
            </h3>
            <p className="mt-2 text-lg text-gray-600">{detail.info}</p>
          </a>
        ))}
      </div>

      {/* Contact Form */}
      <div className="isolate bg-white px-6 py-12 sm:py-16 lg:px-8 mt-12 mb-12">
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Great efforts to escape from the pleasure of any great desire.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 max-w-xl sm:mt-16 border border-gray-300 p-6 rounded-lg shadow-lg bg-white"
          data-aos="fade-up"
        >
          {/* First Name */}
          <div data-aos="fade-up" data-aos-delay="100">
            <label
              htmlFor="first-name"
              className="block text-lg font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <input
              id="first-name"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              className="block w-full rounded-md border px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              required
            />
          </div>

          {/* Last Name */}
          <div data-aos="fade-up" data-aos-delay="150" className="mt-6">
            <label
              htmlFor="last-name"
              className="block text-lg font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <input
              id="last-name"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              className="block w-full rounded-md border px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              required
            />
          </div>

          {/* Email */}
          <div data-aos="fade-up" data-aos-delay="200" className="mt-6">
            <label
              htmlFor="email"
              className="block text-lg font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full rounded-md border px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              required
            />
          </div>

          {/* Phone */}
          <div data-aos="fade-up" data-aos-delay="250" className="mt-6">
            <label
              htmlFor="phone"
              className="block text-lg font-semibold leading-6 text-gray-900"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="block w-full rounded-md border px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              required
            />
          </div>

          {/* Message */}
          <div data-aos="fade-up" data-aos-delay="300" className="mt-6">
            <label
              htmlFor="message"
              className="block text-lg font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="block w-full rounded-md border px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              required
            ></textarea>
          </div>

          {/* Agreement Checkbox */}
          <div className="mt-6 flex items-center gap-x-4">
            <Switch
              checked={agreed}
              onChange={setAgreed}
              className={`${
                agreed ? "bg-indigo-600" : "bg-gray-200"
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out`}
            >
              <span
                className={`${
                  agreed ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out`}
              />
            </Switch>
            <span className="text-sm leading-6 text-gray-600">
              I agree to the{" "}
              <a href="#" className="font-semibold text-indigo-600">
                terms and conditions
              </a>
              .
            </span>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              disabled={!agreed}
              className="w-full flex justify-center rounded-md bg-indigo-600 py-2 px-4 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 disabled:bg-gray-300"
            >
              Submit
            </button>
          </div>

          {/* Status Message */}
          <div
            data-aos="fade-up"
            className="mt-4 text-center text-sm text-gray-500"
          >
            {statusMessage && <p>{statusMessage}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
