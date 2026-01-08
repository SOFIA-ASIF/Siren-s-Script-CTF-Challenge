export default function Writeup() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Solution</h2>
      <p>
        CSP only blocks inline scripts, not inline event handlers.
      </p>
      <pre className="bg-black p-4 rounded text-green-400">
        {`<img src="x" onerror="alert(document.domain)">`}
      </pre>
    </div>
  );
}
