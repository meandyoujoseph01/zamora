import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto grid min-h-[520px] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">

        <div>
          <span className="inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
            Africa's Marketplace
          </span>

          <h1 className="mt-6 text-5xl font-black tracking-tight text-black sm:text-6xl lg:text-7xl">
            Shop smarter.
            <br />
            Sell bigger.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Discover products from trusted sellers and grow your business
            through ZAMORA — a modern marketplace built for Africa.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/vendor"
              className="rounded-full border border-black px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
            >
              Start Selling
            </Link>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="aspect-square rounded-[2rem] bg-black p-10 text-white shadow-2xl">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-sm text-gray-400">WELCOME TO</p>
                <p className="mt-2 text-5xl font-black">ZAMORA</p>
              </div>

              <div>
                <p className="text-2xl font-bold">
                  One marketplace.
                </p>
                <p className="text-2xl font-bold text-gray-400">
                  Endless possibilities.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}