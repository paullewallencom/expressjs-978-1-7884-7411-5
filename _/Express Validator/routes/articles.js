const express = require('express');
const router = express.Router();

const Article = require('../models/Article.js');

router.get('/', (req, res, next) => {
  res.render('articles', {title: 'Articles'});
});

router.get('/show/:id', (req, res, next) => {
  res.render('article', {title: 'Article'});
});

router.get('/category/:category_id', (req, res, next) => {
  res.render('articles', {title: 'Category Articles'});
});

// Add Article - POST
router.post('/add', (req, res, next) => {
  req.checkBody('title', 'Title is required').notEmpty();
  req.checkBody('author', 'Author is required').notEmpty();
  req.checkBody('body', 'Body is required').notEmpty();
  req.checkBody('category', 'Category is required').notEmpty();

  let errors = req.validationErrors();

  if(errors){
    Category.getCategories((err, categories) => {
      res.render('add_article', {
        errors: errors,
        title: 'Create Article',
        categories: categories
      });
    });
  } else {
    let article = new Article();
    article.title = req.body.title;
    article.subtitle = req.body.subtitle;
    article.category = req.body.category;
    article.body = req.body.body;
    article.author = req.body.author;

    Article.addArticle(article, (err, article) => {
      if(err){
        res.send(err);
      }
      res.redirect('/manage/articles');
    });
  }
});

// Edit Article - POST
router.post('/edit/:id', (req, res, next) => {
  req.checkBody('title', 'Title is required').notEmpty();
  req.checkBody('author', 'Author is required').notEmpty();
  req.checkBody('body', 'Body is required').notEmpty();
  req.checkBody('category', 'Category is required').notEmpty();

  let errors = req.validationErrors();

  if(errors){
    Category.getCategories((err, categories) => {
      res.render('edit_article', {
        errors: errors,
        title: 'Edit Article',
        categories: categories
      });
    });
  } else {
    let article = new Article();
    const query = {_id: req.params.id}
    const update = {
      title: req.body.title,
      subtitle: req.body.subtitle,
      category: req.body.category,
      author: req.body.author,
      body: req.body.body
    }
    Article.updateArticle(query, update, {}, (err, article) => {
      if(err){
        res.send(err);
      }
      res.redirect('/manage/articles');
    });
  }
});

// Delete Article - Delete
router.delete('/delete/:id', (req, res, next) => {
  const query = {_id: req.params.id}

  Article.removeArticle(query, (err, article) => {
    if(err){
      res.send(err);
    }
    res.status(200);
  });
});

module.exports = router;
