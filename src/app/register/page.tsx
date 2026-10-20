export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-12">
      <div className="mx-auto max-w-md">
        <h1 className="text-3xl font-bold text-gray-900">
          Create Account
        </h1>

        <p className="mt-2 text-gray-600">
          Join ZAMORA and start shopping.
        </p>

        <form className="mt-8 space-y-5">
          <input
            type="text"
            placeholder="Full name"
            className="w-full rounded-lg border px-4 py-3"
          />

          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-lg border px-4 py-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border px-4 py-3"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-black px-4 py-3 font-semibold text-white"
          >
            Create Account
          </button>
        </form>
      </div>
    </main>
  );
}