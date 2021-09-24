const express = require("express");
const router = express.Router();

router.get("/categories", (req, res) => {
    res.send("categories routes");
});

router.get("/admin/categories/new", (req, res) =>{
    res.send("route to create a new category");
});

module.exports = router;