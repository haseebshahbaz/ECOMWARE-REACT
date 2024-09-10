import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch featured products from the DummyJSON API
    fetch('https://dummyjson.com/products?limit=4')  // Fetch only 4 products as featured
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching featured products:", error));
  }, []);

  return (
    <section className="featured-products py-2">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-40 w-full object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4 text-blue-600">{product.title}</h3>
            <p className="text-gray-500 mt-2">{product.description}</p>
            <p className="text-lg font-bold text-blue-600 mt-4">${product.price}</p>
            <Link
              to={`/product/${product.id}`}
              className="inline-block mt-4 text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
