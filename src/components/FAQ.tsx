import { useState, useEffect } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import AOS from "aos";


const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "If there is any damage or the product is not accurate we, will return it 24 hours.",
  },
  {
    question: "Do you offer pan India shipping?",
    answer:
      "Yes, we ship to all over the India. We provide free delivery on 5k+ under 10km ",
  },
  {
    question: "How can I track my order?",
    answer: "You will receive an email with update of your product.",
  },
  {
    question: "Can I change my order after it has been placed?",
    answer: "You can change your order within 24 hours of placing it.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div
      className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 p-6 lg:p-10"
      style={{
        background: "rgb(204,232,238)",
        backgroundColor:
          "linear-gradient(90deg, rgba(204,232,238,1) 17%, rgba(171,231,243,1) 92%)",
      }}
    >
      <div className="container mx-auto">
        <h2
          className="text-5xl font-extrabold text-center  bg-clip-text mb-10"
          data-aos="fade-up"
        >
          Got Questions? We have Answers!
        </h2>

        <div className="flex flex-col items-center justify-center space-y-6">
          {faqs.map((faq, index) => (
            <Disclosure
              key={index}
              as="div"
              className="w-full max-w-3xl"
              data-aos="fade-up"
            >
              {({ open }) => (
                <div
                  className={`transform hover:scale-105 transition duration-500 ease-in-out p-1 rounded-xl shadow-primary bg-gradient-secondary ${
                    open ? "shadow-1xl" : ""
                  }`}
                >
                  <DisclosureButton
                    className={`flex w-full justify-between items-center p-5 text-lg lg:text-2xl font-semibold text-gray-800 bg-white rounded-xl focus:outline-none hover:bg-opacity-90 transition-transform duration-300 ease-in-out ${
                      open ? "bg-opacity-80 shadow-inner" : ""
                    }`}
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <span>{faq.question}</span>
                    <ChevronUpIcon
                      className={`${
                        openIndex === index
                          ? "transform rotate-180 text-yellow-300"
                          : "text-gray-600"
                      } h-6 w-6 transition-transform duration-300 ease-in-out`}
                    />
                  </DisclosureButton>

                  {openIndex === index && (
                    <DisclosurePanel className="px-6 pb-5 pt-3 text-base lg:text-lg text-gray-700 bg-white bg-opacity-70 rounded-b-xl shadow-inner transition-all duration-500">
                      <p>{faq.answer}</p>
                    </DisclosurePanel>
                  )}
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;

