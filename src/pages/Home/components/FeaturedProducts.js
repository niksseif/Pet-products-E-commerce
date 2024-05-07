import { ProductCard } from "../../../components/Elements/ProductCard"

export function FeaturedProducts() {
  return (
    <section className="my-20">
        <h1 className="text-1xl text-center font-semibold dark:text-slat-100 mb-5 underline underline-offset-8 ">Feature products
        </h1>
        <div className="flex flex-wrap justify-center lg:flex-row">
       <ProductCard/>
       <ProductCard/>
       <ProductCard/>
        </div>
    </section>
  )
}
