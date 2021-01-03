const express = require('express');
const router = express.Router();

Category = require('../models/Category.js');

router.get('/articles', (req, res, next) => {
  res.render('manage_articles', {title: 'Manage Articles'});
});

router.get('/categories', (req, res, next) => {
  Category.getCategories((err, categories) => {
    if(err){
      res.send(err);
    }

    res.render('manage_categories', {
      title:'Categories',
      categories: categories
    });
  });
});

router.get('/articles/add', (req, res, next) => {
  Category.getCategories((err, categories) => {
    if(err){
      res.send(err);
    }
    res.render('add_article',
    {title: 'Create Article',
    categories: categories});
  });
});

router.get('/categories/add', (req, res, next) => {
  res.render('add_category', {title: 'Create Category'});
});

router.get('/articles/edit/:id', (req, res, next) => {
  res.render('edit_article', {title: 'Edit Article'});
});

router.get('/categories/edit/:id', (req, res, next) => {
  Category.getCategoryById(req.params.id, (err, category) => {
    if(err){
      res.send(err);
    }
    res.render('edit_category', {
      title: 'Edit Category',
      category:category
    });
  });

});

module.exports = router;
