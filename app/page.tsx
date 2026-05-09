import AuditForm from "../components/AuditForm";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6">

      {/* Navbar */}
      <nav className="w-full py-5 flex items-center justify-between">

        <h1 className="text-2xl font-bold">
          SpendWise AI
        </h1>

        <div className="flex items-center gap-6 text-sm text-gray-300">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>

      </nav>

      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center mt-32">

        <h1 className="text-5xl font-bold leading-tight">
          Cut Your AI Costs Smarter
        </h1>

        <p className="mt-6 text-lg text-gray-400">
          Instantly audit your AI stack and discover unnecessary spending across tools like ChatGPT, Claude, Cursor, and Copilot.
        </p>

        <button className="mt-8 bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition">
          Start Free Audit
        </button>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <h3 className="text-xl font-semibold">
              AI Spend Analysis
            </h3>

            <p className="text-gray-400 mt-3">
              Analyze your current AI tool costs and uncover unnecessary spending.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <h3 className="text-xl font-semibold">
              Smart Recommendations
            </h3>

            <p className="text-gray-400 mt-3">
              Discover cheaper plans and better alternatives based on your team size.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <h3 className="text-xl font-semibold">
              Instant Savings Report
            </h3>

            <p className="text-gray-400 mt-3">
              Get monthly and yearly savings estimates instantly with actionable insights.
            </p>
          </div>

        </div>

      </div>
<AuditForm />
    </main>
  );
}