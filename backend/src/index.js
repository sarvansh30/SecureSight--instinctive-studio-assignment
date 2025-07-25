import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
dotenv.config();

const app = express();
const corsOptions = {
  origin: process.env.FRONTEND_URL,
};
app.use(cors(corsOptions));
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3005;

app.get('/',(req,res)=>{
    res.send("SecureSight backend is up and running");
});

app.get('/api/incidents', async (req, res) => {
  try {
    const { resolved } = req.query; 

    const whereClause = {};
    if (resolved === 'true' || resolved === 'false') {
      whereClause.resolved = (resolved === 'true');
    }

    const incidents = await prisma.incident.findMany({
      where: whereClause,
      orderBy: {
        tsStart: 'desc'
      },
    });

    res.json(incidents);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch incidents' });
  }
});

app.patch('/api/incidents/:id/resolve', async (req, res) => {
  try {
    const { id } = req.params;

    const incident = await prisma.incident.findUnique({
      where: {
        id: Number(id),
      },
      select: {
        resolved: true,
      },
    });

    if (!incident) {
      return res.status(404).json({ error: 'Incident not found' });
    }

    const updated = await prisma.incident.update({
      where: {
        id: Number(id),
      },
      data: {
        resolved: !incident.resolved,
      },
    });

    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to toggle resolve state' });
  }
});


app.listen(PORT,()=>{
    console.log(`Backend server running on PORT: ${PORT}`);
});

