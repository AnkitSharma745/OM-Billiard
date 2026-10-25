import { useState } from "react";
import type { ChangeEvent, FormEvent, MouseEvent } from "react";
import ReactDOM from "react-dom"; // For React Portals
import { Switch } from "@headlessui/react"; // For the agreement toggle
 // For animations (optional)
import { sendEmails } from "../email";


const OrderNowModal = () => {
  // Form state and modal state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Modal visibility
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false); // Thank you modal

  // Input change handler
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form submit handler
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage("Sending...");

    const result = await sendEmails(formData); // Function to send the email

    if (result.success) {
      setStatusMessage("Order placed successfully!");
      setTimeout(() => {
        setIsOpen(false); // Close the form modal
        setIsThankYouModalOpen(true); // Open Thank You modal
      }, 1000); // Delay for better UX
    } else {
      setStatusMessage("Failed to place the order. Please try again.");
    }
  };

  // Open/close modal functions
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Close modal if user clicks outside modal content
  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLElement && e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  const closeThankYouModal = () => setIsThankYouModalOpen(false);

  // Modal content
  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75 modal-overlay"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full">
        <h2 className="text-2xl font-semibold mb-4">Place Your Order</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name */}
          <div data-aos="fade-up">
            <label
              htmlFor="first-name"
              className="block text-lg font-semibold text-gray-900"
            >
              First Name
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
          <div data-aos="fade-up">
            <label
              htmlFor="last-name"
              className="block text-lg font-semibold text-gray-900"
            >
              Last Name
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
          <div data-aos="fade-up">
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-gray-900"
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
          <div data-aos="fade-up">
            <label
              htmlFor="phone"
              className="block text-lg font-semibold text-gray-900"
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

          {/* Address */}
          <div data-aos="fade-up">
            <label
              htmlFor="address"
              className="block text-lg font-semibold text-gray-900"
            >
              Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
              className="block w-full rounded-md border px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              required
            />
          </div>

          {/* Agreement Switch */}
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
              className="w-full flex justify-center rounded-md bg-indigo-600 py-2 px-4 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600 disabled:bg-gray-300"
            >
              Submit Order
            </button>
          </div>

          {/* Status Message */}
          <div className="mt-4 text-center text-sm text-gray-500">
            {statusMessage && <p>{statusMessage}</p>}
          </div>
        </form>

        {/* Close Modal Button */}
        <button
          onClick={closeModal}
          className="mt-4 text-sm text-gray-500 hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  );

  // Thank You Modal
  const thankYouModalContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75 modal-overlay"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full">
        <h2 className="text-2xl font-semibold mb-4">Thank You!</h2>
        <p>Your order has been placed successfully.</p>
        <button
          onClick={closeThankYouModal}
          className="mt-6 w-full flex justify-center rounded-md bg-indigo-600 py-2 px-4 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600"
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative">
      {/* Button to open modal */}
      <button
        onClick={openModal}
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
      >
        Order Now
      </button>

      {/* Render the modal using React Portal */}
      {isOpen && ReactDOM.createPortal(modalContent, document.body)}

      {/* Render Thank You modal */}
      {isThankYouModalOpen &&
        ReactDOM.createPortal(thankYouModalContent, document.body)}
    </div>
  );
};

export default OrderNowModal;


