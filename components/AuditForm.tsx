export default function AuditForm() {
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

          <select className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3">
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

          <select className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3">
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
    className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3"
  />
</div>

<div>
  <label className="block mb-2 text-sm text-gray-400">
    Primary Use Case
  </label>

  <select className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3">
    <option>Coding</option>
    <option>Writing</option>
    <option>Research</option>
    <option>Data Analysis</option>
    <option>Mixed</option>
  </select>
</div>
      </div>

      <button className="mt-8 w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
        Generate Audit
      </button>

    </div>
  );
}