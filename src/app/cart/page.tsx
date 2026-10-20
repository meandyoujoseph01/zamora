export default function CartPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Shopping Cart
        </h1>

        <p className="mt-2 text-gray-600">
          Review the products you want to purchase.
        </p>

        <div className="mt-10 rounded-2xl bg-white p-10 text-center shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            Your cart is empty
          </h2>

          <p className="mt-2 text-gray-600">
            Products you add to your cart will appear here.
          </p>

          <button
            type="button"
            className="mt-6 rounded-lg bg-black px-6 py-3 font-semibold text-white"
          >
            Continue Shopping
          </button>
        </div>
      </section>
    </main>
  );
}