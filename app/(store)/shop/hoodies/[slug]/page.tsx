export default async function HoodieDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="grid gap-10 md:grid-cols-2">
      {/* Image gallery placeholder */}
      <div className="aspect-square bg-neutral-100" />
      <div>
        <h1 className="text-2xl font-semibold">{slug}</h1>
        <p className="mt-2 text-neutral-400">Product details coming soon.</p>
      </div>
    </div>
  );
}
