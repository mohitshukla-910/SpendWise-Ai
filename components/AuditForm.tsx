"use client";
import { useState } from "react";
export default function AuditForm() {
  const [tool, setTool] = useState("ChatGPT");
  const [plan, setPlan] = useState("Free");
  const [monthlySpend, setMonthlySpend] = useState("");
  const [result, setResult] = useState("");
  const [savings, setSavings] = useState(0);
  const [loading, setLoading] = useState(false);
  const [teamSize, setTeamSize] = useState("");
  const [seats, setSeats] = useState("");
  const [useCase, setUseCase] = useState("Coding");
  const generateAudit = () => {
    setLoading(true);

  if (
    tool === "ChatGPT" &&
    plan === "Team" &&
    Number(teamSize) <= 2
  ) {

    setResult(
      "Your team size is small enough that ChatGPT Team may be unnecessarily expensive. ChatGPT Plus could likely cover your workflows at a lower cost."
    );

    setSavings(20);
} else if (
  tool === "Cursor" &&
  useCase === "Coding" &&
  Number(monthlySpend) > 50
)
  {

    setResult(
     "Cursor appears useful for coding-heavy workflows, but your current spending may still be higher than necessary for your team size."
    );

    setSavings(15);

  } else {

    setResult(
      "Your AI spending looks reasonable based on the provided inputs."
    );

    setSavings(0);

  }
 setLoading(false);
};
  return (
    <div className="mt-20 bg-zinc-900 p-8 rounded-2xl border border-zinc-800 max-w-3xl mx-auto">

      <h2 className="text-3xl font-bold mb-6 text-center">
        Start Your AI Spend Audit
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="block mb-2 text-sm text-gray-400">
            AI Tool
          </label>
  <select
  value={tool}
  onChange={(e) => setTool(e.target.value)}
  className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3"
>
            <option>ChatGPT</option>
            <option>Claude</option>
            <option>Cursor</option>
            <option>Copilot</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-400">
            Plan
          </label>
<select
  value={plan}
  onChange={(e) => setPlan(e.target.value)}
  className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3"
>
      
            <option>Free</option>
            <option>Plus</option>
            <option>Team</option>
            <option>Enterprise</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-400">
            Monthly Spend ($)
          </label>

          <input
            type="number"
            placeholder="100"
           value={monthlySpend}
           onChange={(e) => setMonthlySpend(e.target.value)}
             className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3"

          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-400">
            Number of Seats
          </label>

          <input
            type="number"
            placeholder="5"
            value={seats}
onChange={(e) => setSeats(e.target.value)}
            className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3"
          />
        </div>

<div>
  <label className="block mb-2 text-sm text-gray-400">
    Team Size
  </label>

  <input
    type="number"
    placeholder="10"
    value={teamSize}
    onChange={(e) => setTeamSize(e.target.value)}
    className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3"
  />
</div>

<div>
  <label className="block mb-2 text-sm text-gray-400">
    Primary Use Case
  </label>

  <select
  value={useCase}
  onChange={(e) => setUseCase(e.target.value)}
  className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3"
>
    <option>Coding</option>
    <option>Writing</option>
    <option>Research</option>
    <option>Data Analysis</option>
    <option>Mixed</option>
  </select>
</div>
      </div>

      <button 
      onClick={generateAudit}
      className="mt-8 w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
      {loading ? "Generating Audit..." : "Generate Audit"}
      </button>
    {result && (
  <div>

  <div className="mt-6 bg-gradient-to-br from-zinc-900 to-black border border-green-500/30 rounded-2xl p-6">
<div className="text-lg font-semibold text-white">
  Audit Recommendation
</div>

<p className="text-gray-300 mt-3 leading-7">
  {result}
</p>
    </div>

    {savings > 0 && (
      <div className="mt-4 text-green-400 text-center font-semibold">
        Potential Savings: ${savings}/month
        <div className="text-sm text-gray-400 mt-1">
  Estimated Yearly Savings: ${savings * 12}
</div>
      </div>
    )}

  </div>
)}

    </div>
  );
}