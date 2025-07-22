

export default function Home() {
  return (
    <main className="flex h-screen bg-gray-100">
      {/* Left Column: Incident Player */}
      <div className="w-2/3 p-4">
        <h1 className="text-xl font-bold">Incident Player</h1>
        {/* The large video/image frame will go here */}
      </div>

      {/* Right Column: Incident List */}
      <div className="w-1/3 bg-white p-4 border-l border-gray-300">
        <h1 className="text-xl font-bold">Incidents</h1>
        {/* The list of incidents will go here */}
      </div>
    </main>
  );
}
