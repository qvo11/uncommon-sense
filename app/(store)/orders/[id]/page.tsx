export default async function OrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <h1 className="mb-8 text-3xl font-semibold tracking-tight">Order #{id}</h1>
      <p className="text-neutral-400">Order details coming soon.</p>
    </div>
  );
}
