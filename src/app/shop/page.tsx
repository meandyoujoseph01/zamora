import ProductGrid from "@/components/products/ProductGrid";
import { products } from "@/data/products";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            ZAMORA Marketplace
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Shop
          </h1>

          <p className="mt-3 max-w-2xl text-gray-600">
            Discover quality products from trusted sellers on ZAMORA.
          </p>
        </div>

        <ProductGrid products={products} />
      </section>
    </main>
  );
}