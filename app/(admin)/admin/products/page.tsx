export default function AdminProductsPage() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Products</h1>
        <a
          href="/admin/products/new"
          className="border border-neutral-950 px-4 py-2 text-sm hover:bg-neutral-950 hover:text-white transition-colors"
        >
          + New Product
        </a>
      </div>
      <p className="text-neutral-400">No products yet.</p>
    </div>
  );
}
