import React, { useState } from 'react';

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is your return policy?',
      answer:
        'We offer a 30-day return policy on all products. If you are not satisfied with your purchase, you can return it for a full refund or exchange.',
    },
    {
      question: 'How long does shipping take?',
      answer:
        'Shipping usually takes 5-7 business days. You will receive a tracking number once your order has been dispatched.',
    },
    {
      question: 'Do you offer international shipping?',
      answer:
        'Yes, we offer international shipping to select countries. Shipping fees and delivery times may vary depending on your location.',
    },
    {
      question: 'Can I cancel or change my order?',
      answer:
        'Orders can be canceled or changed within 24 hours of placing the order. Please contact our support team for assistance.',
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-600">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                <span className={`text-xl transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                  &#9660;
                </span>
              </div>
              {openFaq === index && <p className="mt-4 text-gray-600">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
