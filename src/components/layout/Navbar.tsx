"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  Store,
  LayoutGrid,
} from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      {/* Main Navbar */}
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="shrink-0 text-2xl font-black tracking-tight text-black"
        >
          ZAMORA
        </Link>

        {/* Desktop Search */}
        <div className="hidden flex-1 md:block">
          <div className="relative mx-auto max-w-xl">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

            <input
              type="search"
              placeholder="Search products..."
              aria-label="Search products"
              className="w-full rounded-full border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-black focus:bg-white"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-5 lg:flex">
          <Link
            href="/shop"
            className="text-sm font-medium transition hover:text-gray-500"
          >
            Shop
          </Link>

          <Link
            href="/categories"
            className="text-sm font-medium transition hover:text-gray-500"
          >
            Categories
          </Link>

          <Link
            href="/vendor"
            className="text-sm font-medium transition hover:text-gray-500"
          >
            Sell on ZAMORA
          </Link>
        </nav>

        {/* Actions */}
        <div className="ml-auto flex items-center gap-1">
          {/* Account - desktop/tablet */}
          <Link
            href="/account"
            aria-label="My account"
            className="hidden rounded-full p-2 transition hover:bg-gray-100 sm:flex"
          >
            <User className="h-5 w-5" />
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            aria-label="Shopping cart"
            className="relative rounded-full p-2 transition hover:bg-gray-100"
          >
            <ShoppingCart className="h-5 w-5" />

            <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-black text-[10px] font-bold text-white">
              0
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="rounded-full p-2 transition hover:bg-gray-100 lg:hidden"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="border-t border-gray-100 px-4 py-3 md:hidden">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

          <input
            type="search"
            placeholder="Search products..."
            aria-label="Search products"
            className="w-full rounded-full border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-black focus:bg-white"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="space-y-1">
              <Link
                href="/shop"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition hover:bg-gray-100"
              >
                <Store className="h-5 w-5" />
                Shop
              </Link>

              <Link
                href="/categories"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition hover:bg-gray-100"
              >
                <LayoutGrid className="h-5 w-5" />
                Categories
              </Link>

              <Link
                href="/vendor"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition hover:bg-gray-100"
              >
                <Store className="h-5 w-5" />
                Become a Seller
              </Link>

              <Link
                href="/account"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition hover:bg-gray-100"
              >
                <User className="h-5 w-5" />
                My Account
              </Link>
            </div>

            {/* Authentication */}
            <div className="mt-4 border-t border-gray-200 pt-4">
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/login"
                  onClick={closeMenu}
                  className="rounded-xl border border-black px-4 py-3 text-center text-sm font-semibold transition hover:bg-black hover:text-white"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  onClick={closeMenu}
                  className="rounded-xl bg-black px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                  Register
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}