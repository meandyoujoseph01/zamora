import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";

const categories = [
  "Electronics",
  "Fashion",
  "Phones",
  "Beauty",
  "Home",
  "Food",
  "Automotive",
  "Agriculture",
];

const featuredProducts = [
  {
    name: "Smart Electronics",
    description: "Discover modern technology",
  },
  {
    name: "Fashion Collection",
    description: "Style for every occasion",
  },
  {
    name: "Home Essentials",
    description: "Make your home better",
  },
  {
    name: "Beauty & Care",
    description: "Products for your lifestyle",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main>
        <Hero />

        {/* Categories */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Explore
              </p>

              <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                Shop by category
              </h2>
            </div>

            <a
              href="/categories"
              className="hidden text-sm font-semibold underline sm:block"
            >
              View all
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {categories.map((category) => (
              <a
                key={category}
                href="/categories"
                className="group rounded-2xl border p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex aspect-square items-center justify-center rounded-xl bg-gray-100">
                  <span className="text-center text-sm font-bold">
                    {category}
                  </span>
                </div>

                <p className="mt-4 font-semibold">{category}</p>

                <p className="mt-1 text-sm text-gray-500">
                  Explore products
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Featured */}
        <section className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Discover
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Featured on ZAMORA
            </h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product) => (
                <div
                  key={product.name}
                  className="overflow-hidden rounded-2xl border bg-white"
                >
                  <div className="flex aspect-square items-center justify-center bg-gray-100">
                    <span className="px-4 text-center text-lg font-bold">
                      {product.name}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold">{product.name}</h3>

                    <p className="mt-2 text-sm text-gray-500">
                      {product.description}
                    </p>

                    <button className="mt-5 w-full rounded-xl bg-black py-3 text-sm font-semibold text-white">
                      Explore
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="text-3xl">🛡️</div>
              <h3 className="mt-4 font-bold">Trusted Marketplace</h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Connect with trusted sellers and discover quality products.
              </p>
            </div>

            <div>
              <div className="text-3xl">💳</div>
              <h3 className="mt-4 font-bold">Secure Payments</h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Multiple payment options designed for African customers.
              </p>
            </div>

            <div>
              <div className="text-3xl">🚚</div>
              <h3 className="mt-4 font-bold">Reliable Delivery</h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Get your orders delivered wherever you are.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}