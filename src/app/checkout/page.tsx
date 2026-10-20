export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-gray-900">
            Checkout
          </h1>

          <p className="mt-2 text-gray-600">
            Complete your order securely.
          </p>

          <div className="mt-10 rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Order Information
            </h2>

            <div className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Full name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
              />

              <input
                type="text"
                placeholder="Phone number"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
              />

              <input
                type="text"
                placeholder="Delivery address"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <h3 className="font-semibold text-gray-900">
                Payment
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Payment methods will be connected in a later step.
              </p>
            </div>

            <button
              type="button"
              className="mt-8 w-full rounded-lg bg-black px-6 py-3 font-semibold text-white"
            >
              Place Order
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}