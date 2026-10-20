export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">
            Categories
          </h1>

          <p className="mt-2 text-gray-600">
            Explore products by category on ZAMORA.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Fashion",
            "Electronics",
            "Home & Living",
            "Beauty",
            "Phones & Accessories",
            "Food & Beverages",
            "Sports",
            "Other",
          ].map((category) => (
            <div
              key={category}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h2 className="text-lg font-semibold text-gray-900">
                {category}
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Explore {category.toLowerCase()} products.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}