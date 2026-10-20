import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Featured Badge */}
          {product.featured && (
            <span className="absolute left-3 top-3 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white shadow-sm">
              Featured
            </span>
          )}

          {/* Stock Badge */}
          {product.stock <= 10 && product.stock > 0 && (
            <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-900 shadow-sm">
              Only {product.stock} left
            </span>
          )}

          {product.stock === 0 && (
            <span className="absolute right-3 top-3 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
              Out of Stock
            </span>
          )}
        </div>
      </Link>

      {/* Product Information */}
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          {product.category}
        </p>

        <Link href={`/products/${product.id}`}>
          <h2 className="mt-2 line-clamp-2 min-h-[3.5rem] text-lg font-semibold text-gray-900 transition-colors hover:text-gray-600">
            {product.name}
          </h2>
        </Link>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-900">
            ⭐ {product.rating}
          </span>

          <span className="text-sm text-gray-500">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="mt-4">
          <p className="text-xl font-bold text-gray-900">
            {product.price.toLocaleString()} {product.currency}
          </p>

          <p className="mt-1 text-xs text-gray-500">
            Sold by {product.vendor}
          </p>
        </div>

        {/* Add To Cart */}
        <button
          type="button"
          disabled={product.stock === 0}
          className="mt-5 w-full rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-gray-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
    </article>
  );
}