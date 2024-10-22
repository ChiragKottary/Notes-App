import express from "express";
import { Notes } from "../db/db";

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const body = req.body;
    const data = await Notes.create({
      title: body.title,
      description: body.description,
    });

    res.json({
        message:"Notes added SucessFully"
    })
  } catch (error) {
    res.json({
        message: error
    })
  }
});

router.get('/notes',async (req,res)=>{
    try {
        const data = await Notes.find();

        res.json({
            res : data
        })
    } catch (error) {
        
    }
})

export default router;
