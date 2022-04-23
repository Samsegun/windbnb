import data from "../../stays.json";
import star from "../../assets/star.png";
import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState(data);

  return products.map((product, idx) => (
    <article key={idx} className="cursor-pointer">
      <div className="w-full h-[240px]">
        <img
          src={product.photo}
          alt="apartment"
          className="object-cover object-center w-full h-full rounded-3xl"
        />
      </div>
      {/* product info */}
      <div className="flex items-center justify-between mt-4 text-xs font-montserrat text-product-desc">
        {product.superHost ? (
          <div
            className="px-2 py-1 w-[89px] font-bold border border-small-headings
           rounded-xl text-small-headings text-[10px]"
          >
            SUPER HOST
          </div>
        ) : null}

        {/* product type and number of birds */}
        <div className="min-w-[160px]">
          {product.type}
          {product.beds ? <span>.{product.beds} beds</span> : null}
        </div>
        <div className="flex justify-around min-w-[49px]">
          <img src={star} alt="star icon" />
          <span> {product.rating}</span>
        </div>
      </div>

      {/* product title */}
      <h3 className="mt-3 text-sm font-bold text-big-headings font-montserrat">
        {product.title}
      </h3>
    </article>
  ));
};

export default Products;
