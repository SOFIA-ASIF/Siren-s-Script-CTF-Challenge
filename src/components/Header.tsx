import { Shield } from "lucide-react";

export default function Header() {
  return (
    <div className="text-center mb-6">
      <Shield className="mx-auto text-purple-400 w-12 h-12" />
      <h1 className="text-4xl font-bold">CSP Mirage</h1>
      <p className="text-gray-400">
        CSP is not a silver bullet.
      </p>
    </div>
  );
}
