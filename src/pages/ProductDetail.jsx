// ProductDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details from the DummyJSON API based on the product ID
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product details:", error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Show loading indicator
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image Section */}
        <div className="product-image">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Product Info Section */}
        <div className="product-info">
          <h1 className="text-3xl font-bold mb-4 text-blue-600">{product.title}</h1>
          <p className="text-lg mb-4 text-gray-700">{product.description}</p>
          <p className="text-2xl font-semibold text-blue-500 mb-4">${product.price}</p>
          <p className="mb-4">
            <span className="font-bold">Category:</span> {product.category}
          </p>

          <div className="flex space-x-4 mb-6">
            {/* Product Rating */}
            <p className="text-yellow-500 font-semibold">
              Rating: {product.rating} / 5
            </p>
            {/* Stock Information */}
            <p className={`font-semibold ${product.stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {product.stock > 0 ? `In Stock: ${product.stock}` : "Out of Stock"}
            </p>
          </div>

          {/* Add to Cart Button */}
          <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Additional Product Information */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Product Details</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li><strong>Brand:</strong> {product.brand}</li>
          <li><strong>Discount:</strong> {product.discountPercentage}%</li>
          {/* Add other product details as needed */}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
