export default function HintBox({ hints, level, next }: any) {
  return (
    <div className="mt-4">
      <button
        onClick={next}
        className="text-yellow-400"
      >
        Need a hint?
      </button>

      {hints.slice(0, level).map((h: string, i: number) => (
        <p key={i} className="text-yellow-300">
          {h}
        </p>
      ))}
    </div>
  );
}
