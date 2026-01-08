export default function Tabs({ tab, setTab }: any) {
  return (
    <div className="flex gap-2 mb-4">
      {["challenge", "headers", "writeup"].map(t => (
        <button
          key={t}
          onClick={() => setTab(t)}
          className={`px-4 py-2 rounded ${
            tab === t ? "bg-purple-600" : "bg-gray-700"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
