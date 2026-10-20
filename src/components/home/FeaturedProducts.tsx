import Link from "next/link"

const products = [
  {
    id: "handbag",
    name: "Elegant Handbag",
    price: "25,000 RWF",
  },
  {
    id: "table-lamp",
    name: "Modern Table Lamp",
    price: "35,000 RWF",
  },
  {
    id: "perfume",
    name: "Premium Perfume",
    price: "30,000 RWF",
  },
  {
    id: "backpack",
    name: "Modern Backpack",
    price: "40,000 RWF",
  },
  {
    id: "coffee",
    name: "Premium Coffee",
    price: "12,000 RWF",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
            ZAMORA Marketplace
          </p>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Featured Products
          </h2>

          <p className="mt-2 text-gray-600">
            Discover products from trusted sellers on ZAMORA.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex aspect-square items-center justify-center bg-gray-100">
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
                    🛍️
                  </div>

                  <p className="text-sm font-medium text-gray-500">
                    Product Image
                  </p>
                </div>
              </div>

              <div className="p-4">
                <h3 className="truncate font-semibold text-gray-900">
                  {product.name}
                </h3>

                <p className="mt-2 font-bold text-gray-900">
                  {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/shop"
            className="inline-block rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}