type ProductPageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <p className="mb-2 text-sm text-gray-500">
            Product ID
          </p>

          <h1 className="text-3xl font-bold text-gray-900">
            Product Details
          </h1>

          <p className="mt-4 text-gray-600">
            Product ID: {id}
          </p>
        </div>
      </div>
    </main>
  )
}