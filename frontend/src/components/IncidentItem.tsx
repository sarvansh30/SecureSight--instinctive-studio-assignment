import type { ComponentType } from 'react';
import Image from 'next/image';
import type { Incident } from '@/types/IncidentType';
import CameraIcon from '@/icons/CameraIcon';
import ClockIcon from '@/icons/ClockIcon';
import GreaterIcon from '@/icons/GreaterIcon';
import UnauthorisedIcon from '@/icons/UnauthorisedIcon';
import GunIcon from '@/icons/GunIcon';
import FaceRecognisedIcon from '@/icons/FaceRecognisedIcon';
import { motion } from 'framer-motion';

const iconMap: { [key: string]: ComponentType<any> } = {
  "Unauthorised Access": UnauthorisedIcon,
  "Gun Threat": GunIcon,
  "Face Recognised": FaceRecognisedIcon,
  "Safety Hazard": UnauthorisedIcon,
};

const cameraMap: { [key: string]: string } = {
  13: "Shop Floor A",
  14: "Vault",
  15: "Entrance"
};

function formatIncidentTime(tsStart: string, tsEnd: string): string {
  const startDate = new Date(tsStart);
  const endDate = new Date(tsEnd);
  const startTime = `${startDate.getHours()}:${String(startDate.getMinutes()).padStart(2, '0')}`;
  const endTime = `${endDate.getHours()}:${String(endDate.getMinutes()).padStart(2, '0')}`;
  const dateOptions: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' };
  const formattedDate = startDate.toLocaleDateString('en-GB', dateOptions).replace(/ /g, '-');
  return `${startTime} - ${endTime} on ${formattedDate}`;
}

const IncidentItem = ({
  incident,
  onResolve,
}: {
  incident: Incident;
  onResolve: (id: number) => void;
}) => {
  const IconType = iconMap[incident.type];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-3 p-2 mb-1.5 text-white hover:bg-[#0f0f0f]"
    >
      <Image
        src={incident.thumbnailUrl}
        alt={`Thumbnail for ${incident.type}`}
        width={120}
        height={120}
        className="h-[85px] w-[140px] rounded-md object-cover"
      />
      <div className="flex flex-col h-[85px] justify-between flex-grow">
        <div>
          <div className="flex items-center gap-2">
            {IconType && <IconType className="w-5 h-5" />}
            <p className="font-inter font-bold text-sm">{incident.type}</p>
          </div>
          <div className="flex text-white items-center gap-1">
            <CameraIcon className="fill-white" />
            <p className="text-xs">{cameraMap[incident.cameraId]}</p>
          </div>
        </div>
        <div className="flex text-white items-center gap-1">
          <ClockIcon className="fill-white" />
          <p className="text-xs font-bold">
            {formatIncidentTime(incident.tsStart, incident.tsEnd)}
          </p>
        </div>
      </div>
      <div
        className="flex items-center p-1.5 rounded-2xl hover:cursor-pointer hover:bg-[#000000]"
        onClick={() => onResolve(incident.id)}
      >
        {!incident.resolved ? (
          <p className="text-[#FFCC00] text-sm">Resolve</p>
        ) : (
          <p className="text-[#22C55E] text-sm">Resolved</p>
        )}
        <GreaterIcon className={`w-5 h-5 ${incident.resolved ? "fill-[#22C55E]" : "fill-[#FFCC00]"}`} />
      </div>
    </motion.div>
  );
};

export default IncidentItem;