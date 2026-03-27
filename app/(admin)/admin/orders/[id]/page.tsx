export default async function AdminOrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold">Order #{id}</h1>
      <p className="text-neutral-400">Order details coming soon.</p>
    </div>
  );
}
