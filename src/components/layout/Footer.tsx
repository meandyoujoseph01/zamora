import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">

        <div>
          <h2 className="text-2xl font-black">ZAMORA</h2>

          <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
            A modern marketplace connecting customers and trusted sellers
            across Africa.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Shop</h3>

          <div className="mt-4 space-y-3 text-sm text-gray-400">
            <Link href="/shop" className="block hover:text-white">
              All Products
            </Link>

            <Link href="/categories" className="block hover:text-white">
              Categories
            </Link>

            <Link href="/cart" className="block hover:text-white">
              Cart
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Sell on ZAMORA</h3>

          <div className="mt-4 space-y-3 text-sm text-gray-400">
            <Link href="/vendor" className="block hover:text-white">
              Become a Seller
            </Link>

            <Link href="/vendor" className="block hover:text-white">
              Seller Dashboard
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Support</h3>

          <div className="mt-4 space-y-3 text-sm text-gray-400">
            <p>Help Center</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-gray-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 ZAMORA. All rights reserved.</p>

          <p>Built for Africa 🌍</p>
        </div>
      </div>
    </footer>
  );
}