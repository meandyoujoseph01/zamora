export default function AccountPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">
          My Account
        </h1>

        <p className="mt-2 text-gray-600">
          Manage your ZAMORA account, orders and personal information.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              Profile
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Manage your personal information.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              My Orders
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              View and track your orders.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              Settings
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Manage your account settings.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}