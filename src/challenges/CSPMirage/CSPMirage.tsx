import { useState } from "react";
import { FLAG, CSP_HEADER } from "./constants";
import { hints } from "./hints";
import Header from "../../components/header";
import Tabs from "../../components/Tabs";
import NoteApp from "../../components/NoteApp";
import Writeup from "./writeup";

export default function CSPMirage() {
  const [tab, setTab] = useState("challenge");
  const [solved, setSolved] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <Header />
      <Tabs tab={tab} setTab={setTab} />
<p>hello</p>
      {tab === "challenge" && (
        <NoteApp
          flag={FLAG}
          hints={hints}
          onSolve={() => setSolved(true)}
        />
      )}

      {tab === "headers" && (
        <pre className="bg-black p-4 rounded text-purple-400">
          {CSP_HEADER}
        </pre>
      )}

      {tab === "writeup" && <Writeup />}
    </div>
  );
}
