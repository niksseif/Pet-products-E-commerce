import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { Rating } from "../components/Elements/Rating";


export const ProductDetail = () => {
  let [product, setProduct] = useState({});
  const { id } = useParams();
  const { name, overview, price, rating, image_local, in_stock, best_seller } =
    product;
  useTitle(product.name)

  useEffect(() => {
    async function getProduct() {
      const result = await fetch(`http://localhost:3000/products/${id}`);
      const data = await result.json();
      setProduct(data);
    }
    getProduct();
  }, [id]);
  return (
    <main>
      <section>
        <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">
          {name}
        </h1>
        <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">
          {overview}
        </p>
        <div className="flex flex-wrap justify-around">
          <div className="max-w-xl my-3">
            <img className="rounded" src={image_local} alt={name} />
          </div>
          <div className="max-w-xl my-3">
            <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
              <span className="mr-1">$</span>
              <span className="">{price}</span>
            </p>
            <p className="my-3">
              <span>
                <Rating rating={rating} />
              </span>
            </p>
            <p className="my-4 select-none">
              {best_seller && (
                <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">
                  BEST SELLER
                </span>
              )}
              {in_stock && (
                <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                  INSTOCK
                </span>
              )}
              {!in_stock && (
                <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                  OUT OF STOCK
                </span>
              )}
            </p>

            <p className="my-3"></p>
            <p className="text-lg text-gray-900 dark:text-slate-200"></p>
            <p className="text-lg text-gray-900 dark:text-slate-200">
              {product.long_description}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
