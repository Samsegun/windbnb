import data from "../../stays.json";
import star from "../../assets/star.png";

const Products = () => {
  return data.map((product, idx) => (
    <article key={idx}>
      <img src={product.photo} alt="apartment" className="rounded-3xl" />

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
      <h3 className="text-big-headings">{product.title}</h3>
    </article>
  ));
};

export default Products;
