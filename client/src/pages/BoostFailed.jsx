export default function BoostFailed() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow text-center">
        <h1 className="text-xl font-bold text-red-600">Boost Cancelled ❌</h1>
        <p className="mt-4">You cancelled the payment or something went wrong.</p>
      </div>
    </div>
  );
}
