import { products } from "../assets/constants";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Explore Our <span className="text-purple-900">Signature</span>{" "}
          Selections
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Indulge in superior taste and nutrition with our handpicked
          assortment. Discover a world of health, flavor, and satisfaction.
        </p>
      </div>
      <div
        className={`mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 `}
      >
        {products.map((product, index) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
