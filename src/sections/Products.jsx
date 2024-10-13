import { useState } from "react";
import { products } from "../assets/constants";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";

const Products = () => {
  const categories = ["Tomato", "Jam", "Sauces"];
  const [selectedCategory, setSelectedCategory] = useState("Tomato");

  // Filter products based on selected category
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-3xl lg:text-4xl font-palanquin font-bold">
          Explore Our <span className="text-purple-900">Signature</span>{" "}
          Selections
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Indulge in superior taste and nutrition with our handpicked
          assortment. Discover a world of health, flavor, and satisfaction.
        </p>
      </div>

     {/* Category buttons */}
     <div className="mt-8 flex justify-center gap-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`py-2 px-4 font-semibold transition-all duration-300 border-b-4 ${
              selectedCategory === category
                ? "border-purple-900 text-purple-900"
                : "border-transparent text-gray-700 hover:text-purple-900"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <motion.div
        key={selectedCategory}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5 }}
        className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14"
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </motion.div>
    </section>
  );
};

export default Products;
