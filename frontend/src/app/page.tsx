import CameraPanel from "@/components/CameraPanel";
import IncidentsPanels from "@/components/IncidentsPanels";


export default function Home() {
  return (
    <main className="flex h-screen ">
     <div className="flex gap-6 min-w-full  h-4/7 justify-center">
            <CameraPanel/>
            <IncidentsPanels/>
        </div>
    </main>
  );
}
