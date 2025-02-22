const express = require('express');
const router = express.Router();

Category = require('../models/Category.js');

router.get('/', (req, res, next) => {
  Category.getCategories((err, categories) => {
    if(err){
      res.send(err);
    }

    res.render('categories', {
      title:'Categories',
      categories: categories
    });
  });
});

router.post('/add', (req, res, next) => {
  let category = new Category();
  category.title = req.body.title;
  category.description = req.body.description;

  Category.addCategory(category, (err, category) => {
    if(err){
      res.send(err);
    }
    res.redirect('/manage/categories');
  });
});

module.exports = router;
