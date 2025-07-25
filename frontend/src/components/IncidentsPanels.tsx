"use client";

import { useState } from 'react';
import type { Incident } from '@/types/IncidentType';
import IncidentHeader from './IncidentsHeader';
import IncidentItem from './IncidentItem';
import { AnimatePresence } from 'framer-motion';

export default function IncidentsPanels({
  incidents: initialUnresolved,
  resolvedIncidents: initialResolved,
}: {
  incidents: Incident[];
  resolvedIncidents: Incident[];
}) {
  const [unresolved, setUnresolved] = useState(initialUnresolved);
  const [resolved, setResolved] = useState(initialResolved);

  const handleToggleResolve = async (incidentId: number) => {
    let incidentToMove: Incident | undefined;

    const isUnresolved = unresolved.some(inc => inc.id === incidentId);

    if (isUnresolved) {
      incidentToMove = unresolved.find(inc => inc.id === incidentId);
      if (!incidentToMove) return;

      setUnresolved(current => current.filter(inc => inc.id !== incidentId));
      setResolved(current => [...current, { ...incidentToMove!, resolved: true }]);
    } else {
      incidentToMove = resolved.find(inc => inc.id === incidentId);
      if (!incidentToMove) return;

      setResolved(current => current.filter(inc => inc.id !== incidentId));
      setUnresolved(current => [...current, { ...incidentToMove!, resolved: false }]);
    }
    
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/incidents/${incidentId}/resolve`, {
        method: 'PATCH',
      });
    } catch (error) {
      console.error("Failed to toggle incident status:", error);
    }
  };

  return (
    <div className='bg-[#131313] w-1/3 rounded-lg p-4 flex flex-col'>
      <IncidentHeader unresolved={unresolved.length} resolved={resolved.length} />
      <div className="mt-4 flex-grow flex flex-col gap-3 overflow-y-auto custom-scrollbar">
        <AnimatePresence>
          {unresolved.map((incident) => (
            <IncidentItem
              key={incident.id}
              incident={incident}
              onResolve={handleToggleResolve}
            />
          ))}
          {resolved.map((incident) => (
            <IncidentItem
              key={incident.id}
              incident={incident}
              onResolve={handleToggleResolve}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};