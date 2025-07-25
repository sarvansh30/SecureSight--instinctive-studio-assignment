import CameraPanel from "@/components/CameraPanel";
import EclipseGlow from "@/components/EclipseGlow";
import IncidentsPanels from "@/components/IncidentsPanels";
import { Incident } from "@/types/IncidentType";
async function getIncidents() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/incidents`, {
    cache: 'no-cache',
  });
  if (!res.ok) throw new Error('Failed to fetch incidents');
  return res.json();
}

export default async function Home() {
  const allIncidents = await getIncidents();

  // Filter the incidents into two separate lists
  const unresolvedIncidents = allIncidents.filter((incident:Incident) => !incident.resolved);
  const resolvedIncidents = allIncidents.filter((incident:Incident) => incident.resolved);


  return (
    <main className="flex h-screen ">
     <div className="flex gap-6 min-w-full  h-4/7 justify-center">
            <CameraPanel/>
            <IncidentsPanels
            incidents={unresolvedIncidents}
            resolvedIncidents={resolvedIncidents} />
        </div>
    </main>
  );
}
