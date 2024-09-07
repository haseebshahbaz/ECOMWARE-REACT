import React from 'react';

const SpecialOffers = () => {
  const offers = [
    {
      title: '50% Off on All Electronics',
      description: 'Get the latest electronics at half price! Limited time offer on selected items.',
      imageUrl: 'https://dummyimage.com/600x400/000/fff&text=Electronics+Sale',
      discount: '50% OFF',
    },
    {
      title: 'Buy 1 Get 1 Free on Fashion',
      description: 'Upgrade your wardrobe with our exclusive Buy 1 Get 1 Free offer on selected fashion items.',
      imageUrl: 'https://dummyimage.com/600x400/000/fff&text=Fashion+Sale',
      discount: 'BOGO',
    },
    {
      title: 'Up to 70% Off on Home Appliances',
      description: 'Save big on home appliances with up to 70% off. Don’t miss out on this incredible deal!',
      imageUrl: 'https://dummyimage.com/600x400/000/fff&text=Appliance+Sale',
      discount: 'Up to 70% OFF',
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Special Offers & Discounts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={offer.imageUrl} alt={offer.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <span className="inline-block bg-red-500 text-white py-1 px-3 rounded-full text-sm font-medium">
                  {offer.discount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
