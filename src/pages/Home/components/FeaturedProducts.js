import { useState, useEffect } from "react";
import { ProductCard } from "../../../components";

export function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  async function fetchProducts() {
    const result = await fetch("http://localhost:3000/featured_products");
    const data = await result.json();
    setFeaturedProducts(data);
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="my-20">
      <h1 className="text-1xl text-center font-semibold dark:text-slat-100 mb-5 underline underline-offset-8 ">
        Feature products
      </h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {featuredProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}
