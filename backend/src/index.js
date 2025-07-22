import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3005;

app.get('/',(req,res)=>{
    res.send("SecureSight backend is up and running");
});

app.listen(PORT,()=>{
    console.log(`Backend server running on PORT: ${PORT}`);
});

