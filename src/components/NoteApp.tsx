import { useState } from "react";
export default function NoteApp({ flag, onSolve }: any) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [hintLevel, setHintLevel] = useState(0);

  function run() {
    const sanitized = input.replace(/script/gi, "");
    const success =
      /<img/i.test(input) && /onerror/i.test(input);

    if (success) {
      onSolve();
      setOutput(`<b>FLAG:</b> ${flag}`);
    } else {
      setOutput(sanitized);
    }
  }

  return (
    <div>
      <input
        className="w-full p-2 bg-gray-800 border rounded mb-2"
        onChange={e => setInput(e.target.value)}
      />
      <button
        onClick={run}
        className="bg-purple-600 w-full py-2 rounded"
      >
        Save Note
      </button>

      <div
        className="mt-4"
        dangerouslySetInnerHTML={{ __html: output }}
      />

    </div>
  );
}
