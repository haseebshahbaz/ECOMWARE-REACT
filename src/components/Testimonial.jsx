// Testimonial.js
import React from 'react';

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, Example Co.",
    text: "This platform has been a game-changer for my business. The team is amazing, and their product quality is top-notch!",
    img: "/path/to/img1.jpg",
  },
  {
    name: "Jane Smith",
    position: "Marketing Head, Sample Inc.",
    text: "I am incredibly impressed with the service and professionalism. Highly recommend to anyone looking for quality!",
    img: "/path/to/img2.jpg",
  },
  {
    name: "Alice Johnson",
    position: "Product Manager, ABC Ltd.",
    text: "Outstanding experience from start to finish. The level of care and attention to detail is beyond expectations!",
    img: "/path/to/img3.jpg",
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center">{testimonial.name}</h3>
              <p className="text-center text-gray-600 mb-4">{testimonial.position}</p>
              <p className="text-center text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
