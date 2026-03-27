export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold">Edit Product</h1>
      <p className="text-neutral-400">Editing product {id} — form coming soon.</p>
    </div>
  );
}
