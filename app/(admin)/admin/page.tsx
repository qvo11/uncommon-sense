export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-semibold">Dashboard</h1>
      <div className="grid gap-4 sm:grid-cols-3">
        {["Total Orders", "Revenue", "Products"].map((label) => (
          <div key={label} className="rounded border border-neutral-200 p-4">
            <p className="text-xs text-neutral-400">{label}</p>
            <p className="mt-1 text-2xl font-semibold">—</p>
          </div>
        ))}
      </div>
    </div>
  );
}
