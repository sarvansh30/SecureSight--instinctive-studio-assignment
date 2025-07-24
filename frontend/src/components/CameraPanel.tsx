"use client";

import { useState } from 'react';
import Image from 'next/image';
import RecordingIcon from '@/icons/RecordingIcon'; // Custom icon
import CalendarIcon from '@/icons/CalendarIcon';   // Custom icon
// import MoreOptionsIcon from '@/icons/MoreOptionsIcon'; // Custom icon
import MoreOptionsIcon from '@/icons/MoreOptionsIcon';

const cameraFeeds = [
  { id: 1, name: 'Camera - 01', imageUrl: '/camera-angles/camera1.png' },
  { id: 2, name: 'Camera - 02', imageUrl: '/camera-angles/camera2.png' },
  { id: 3, name: 'Camera - 03', imageUrl: '/camera-angles/camera3.png' },
];

const CameraPanel = () => {
  const [activeCameraId, setActiveCameraId] = useState(1);

  const activeCamera = cameraFeeds.find(cam => cam.id === activeCameraId);
  const otherCameras = cameraFeeds.filter(cam => cam.id !== activeCameraId);

  return (
    <div className=' w-4/7 rounded-lg text-white p-1 relative h-full'>
      {activeCamera && (
        <div className="relative w-full h-full">
          <Image
            src={activeCamera.imageUrl}
            alt={activeCamera.name}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-black bg-opacity-50 px-3 py-1 rounded-md">
            <CalendarIcon className="h-5 w-5" />
            <span>11/7/2025 - 03:12:37</span>
          </div>
          <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black bg-opacity-50 px-3 py-1 rounded-full">
            <RecordingIcon className="h-5 w-5" />
            <p>{activeCamera.name}</p>
          </div>
        </div>
      )}

      <div className="absolute bottom-4 right-4 flex gap-3">
        {otherCameras.map(camera => (
          <div
            key={camera.id}
            className="w-48 h-30 cursor-pointer rounded-md bg-black"
            onClick={() => setActiveCameraId(camera.id)}
          >
            <div className="flex justify-between items-center p-1 bg-black bg-opacity-70">
              <span className="text-xs">{camera.name}</span>
              <MoreOptionsIcon className="h-4 w-4" />
            </div>
            <div className="relative w-full h-24">
              <Image
                src={camera.imageUrl}
                alt={camera.name}
                layout="fill"
                objectFit="cover"
                className="rounded-b-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CameraPanel;