const express = require("express");
const router = express.Router();

router.get("/articles", (req, res) => {
    res.send("articles routes");
});

router.get("/admin/articles/new", (req, res) =>{
    res.send("route to create a new category");
});

module.exports = router;