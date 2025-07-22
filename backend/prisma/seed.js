// prisma/seed.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // Create Cameras
  const camera1 = await prisma.camera.create({
    data: { name: 'Shop Floor A', location: 'Main Warehouse' },
  });
  const camera2 = await prisma.camera.create({
    data: { name: 'Vault', location: 'High-Security Zone' },
  });
  const camera3 = await prisma.camera.create({
    data: { name: 'Entrance', location: 'Main Lobby' },
  });

  console.log('Created cameras...');

  // Create Incidents
  await prisma.incident.createMany({
    data: [
      // Incidents for Camera 1
      {
        cameraId: camera1.id,
        type: 'Unauthorised Access',
        tsStart: new Date(new Date().setHours(new Date().getHours() - 20)),
        tsEnd: new Date(new Date().setHours(new Date().getHours() - 19, 55)),
        thumbnailUrl: '/thumbnails/thumb1.jpg',
      },
      {
        cameraId: camera1.id,
        type: 'Face Recognised',
        tsStart: new Date(new Date().setHours(new Date().getHours() - 15)),
        tsEnd: new Date(new Date().setHours(new Date().getHours() - 14, 58)),
        thumbnailUrl: '/thumbnails/thumb2.jpg',
      },
      // Incidents for Camera 2
      {
        cameraId: camera2.id,
        type: 'Gun Threat',
        tsStart: new Date(new Date().setHours(new Date().getHours() - 10)),
        tsEnd: new Date(new Date().setHours(new Date().getHours() - 9, 59)),
        thumbnailUrl: '/thumbnails/thumb3.jpg',
      },
      {
        cameraId: camera2.id,
        type: 'Gun Threat',
        tsStart: new Date(new Date().setHours(new Date().getHours() - 9)),
        tsEnd: new Date(new Date().setHours(new Date().getHours() - 8, 59)),
        thumbnailUrl: '/thumbnails/thumb4.jpg',
      },
      // Incidents for Camera 3
      {
        cameraId: camera3.id,
        type: 'Unauthorised Access',
        tsStart: new Date(new Date().setHours(new Date().getHours() - 5)),
        tsEnd: new Date(new Date().setHours(new Date().getHours() - 4, 50)),
        thumbnailUrl: '/thumbnails/thumb5.jpg',
      },
      {
        cameraId: camera3.id,
        type: 'Face Recognised',
        tsStart: new Date(new Date().setHours(new Date().getHours() - 2)),
        tsEnd: new Date(new Date().setHours(new Date().getHours() - 1, 59)),
        thumbnailUrl: '/thumbnails/thumb6.jpg',
      },
      // Add 6 more incidents to reach 12+
      { cameraId: camera1.id, type: 'Safety Hazard', tsStart: new Date(new Date().setMinutes(new Date().getMinutes() - 90)), tsEnd: new Date(new Date().setMinutes(new Date().getMinutes() - 85)), thumbnailUrl: '/thumbnails/thumb7.jpg' },
      { cameraId: camera2.id, type: 'Face Recognised', tsStart: new Date(new Date().setMinutes(new Date().getMinutes() - 80)), tsEnd: new Date(new Date().setMinutes(new Date().getMinutes() - 75)), thumbnailUrl: '/thumbnails/thumb8.jpg' },
      { cameraId: camera3.id, type: 'Unauthorised Access', tsStart: new Date(new Date().setMinutes(new Date().getMinutes() - 70)), tsEnd: new Date(new Date().setMinutes(new Date().getMinutes() - 65)), thumbnailUrl: '/thumbnails/thumb9.jpg' },
      { cameraId: camera1.id, type: 'Gun Threat', tsStart: new Date(new Date().setMinutes(new Date().getMinutes() - 60)), tsEnd: new Date(new Date().setMinutes(new Date().getMinutes() - 55)), thumbnailUrl: '/thumbnails/thumb10.jpg' },
      { cameraId: camera2.id, type: 'Safety Hazard', tsStart: new Date(new Date().setMinutes(new Date().getMinutes() - 50)), tsEnd: new Date(new Date().setMinutes(new Date().getMinutes() - 45)), thumbnailUrl: '/thumbnails/thumb11.jpg' },
      { cameraId: camera3.id, type: 'Face Recognised', tsStart: new Date(new Date().setMinutes(new Date().getMinutes() - 40)), tsEnd: new Date(new Date().setMinutes(new Date().getMinutes() - 35)), thumbnailUrl: '/thumbnails/thumb12.jpg' },
    ],
  });
  console.log('Created incidents...');
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });