const express = require("express");
const router = express.Router();

//Post
//Index
router.get("/", (req,res)=>{
    res.send("Get for post")
})

//Show Route
router.get("/:id", (req,res)=>{
    res.send("GET for show post")
})

//Post Route
router.post("/", (req,res)=>{
    res.send("POST for post")
})

//Delete Route
router.delete("/:id", (req,res)=>{
    res.send("Delete for post")
});

module.exports = router;