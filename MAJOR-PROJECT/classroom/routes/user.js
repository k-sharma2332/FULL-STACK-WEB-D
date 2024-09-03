const express = require("express");
const router = express.Router();



// Index Route
router.get("/", (req,res)=>{
    res.send("Get for users")
})

//Show Route
router.get("/:id", (req,res)=>{
    res.send("GET for show users")
})

//Post Route
router.post("/", (req,res)=>{
    res.send("POST for show users")
})

//Delete Route
router.delete("/:id", (req,res)=>{
    res.send("Delete for show users")
});


module.exports = router;