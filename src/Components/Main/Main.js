import Products from "./Products";

const Main = () => {
  return (
    <main className="mt-[37px] mb-[78px]">
      {/* heading */}
      <div className="flex justify-between font-montserrat">
        <h2 className="text-lg font-bold text-big-headings">
          Stays in Finland
        </h2>
        <h3 className="text-sm text-small-headings">12+ stays</h3>
      </div>

      {/* products */}
      <section className="grid gap-8 mt-6">
        <Products />
      </section>
    </main>
  );
};

export default Main;
