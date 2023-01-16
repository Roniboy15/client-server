const express = require("express");
const router = express.Router();
// main route 
router.get("/", (req, res) => {
    res.json({ msg: "Welcome to my API YARIN" });
})

module.exports = router;