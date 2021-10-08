const express = require("express");
const router = express.Router();
const Category = require("./Category");
const slugify  = require("slugify");

router.get("/admin/categories/new", (req, res) => {
    res.render("admin/categories/new");
});

router.post("/categories/save", (req, res) => {
    let title = req.body.title;
    if(title != undefined){
        Category.create({
            title: title,
            slug: slugify(title)
        }).then(() => {
            res.redirect("/");
        });
    }else{
        res.redirect("admin/categories/new");
    }
});

router.get("/admin/categories", (req, res) => {
    Category.findAll().then((categories) =>{
        res.render("admin/categories/index", {categories: categories});
    });
});

router.get("/categores/delete/:id", (req, res) =>{
    let id = req.params.id;

    if(id != undefined){
        if(!isNaN(id)){
            Category.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.render("admin/categorias/index");
            });
        }else{
            res.render("admin/categorias/index");
        }
    }else{
        res.render("admin/categorias/index");
    }
});

//como diria o pedreiro em construção
router.get("admin/categories/edit/:id", (req, res) => {
    let id = req.params.id;
    Category.findAll({
        where: {
            id: id
        }
    }).then((category) => {
        res.render("", {category: category});
    });
});

router.post("admin/categories/edit", (req, res) => {
    
});

module.exports = router;