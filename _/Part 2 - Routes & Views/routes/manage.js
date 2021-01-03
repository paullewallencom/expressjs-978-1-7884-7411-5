const express = require('express');
const router = express.Router();

router.get('/articles', (req, res, next) => {
  res.render('manage_articles', {title: 'Manage Articles'});
});

router.get('/categories', (req, res, next) => {
  res.render('manage_categories', {title: 'Manage Categories'});
});

router.get('/articles/add', (req, res, next) => {
  res.render('add_article', {title: 'Create Article'});
});

router.get('/categories/add', (req, res, next) => {
  res.render('add_category', {title: 'Create Category'});
});

router.get('/articles/edit/:id', (req, res, next) => {
  res.render('edit_article', {title: 'Edit Article'});
});

router.get('/categories/edit/:id', (req, res, next) => {
  res.render('edit_category', {title: 'Edit Category'});
});

module.exports = router;
