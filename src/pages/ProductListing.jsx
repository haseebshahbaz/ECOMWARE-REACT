import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("Default");

  useEffect(() => {
    const fetchProductsAndCategories = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);

        const allCategories = [...new Set(data.products.map(product => product.category))];
        setCategories(['All', ...allCategories]);
        setFilteredProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProductsAndCategories();
  }, []);

  useEffect(() => {
    let filtered = products;
    if (selectedCategory !== "All") {
      filtered = products.filter(product => product.category === selectedCategory);
    }

    filtered = filtered.map(product => ({
      ...product,
      price: Number(product.price)
    }));

    switch (sortOption) {
      case "Price: Low to High":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "Price: High to Low":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "Name: A to Z":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Name: Z to A":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, sortOption, products]);

  return (
    <section className="product-list py-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
        {selectedCategory === "ALL" ? "ALL PRODUCTS" : `${selectedCategory.toUpperCase()} PRODUCTS`}
      </h2>

      <div className="flex justify-between items-center mb-6">
        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition duration-300 border border-gray-300 
              ${selectedCategory === category ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-blue-600'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Sorting */}
        <div className="relative ml-4">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="px-6 py-3 border rounded-lg bg-white text-blue-600 font-semibold shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Default">Sort by</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
            <option value="Name: A to Z">Name: A to Z</option>
            <option value="Name: Z to A">Name: Z to A</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
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

export default ProductList;
