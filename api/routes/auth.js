import express from "express";

const router = express.Router();

router.get("/", (req,res)=>{
    res.send("Yahya!")
})
router.get("/register", (req,res)=>{
    res.send("Yahya AbdulKadir!")
})

export default router