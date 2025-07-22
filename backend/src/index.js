import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
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

app.patch('/api/incidents/:id/resolve',async (req,res)=>{

    try{
    const {id} = req.params;

    const resolveFlip = await prisma.incident.update({
        where:{
            id:Number(id),
        },
        data:{
            resolved:true,
        }
    });
    res.send(resolveFlip);
    }
    catch(error){
        res.status(500).json({error:"Failed to resolve incident"});
    }

});

app.listen(PORT,()=>{
    console.log(`Backend server running on PORT: ${PORT}`);
});

