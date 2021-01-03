const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('categories', {title:'Categories'});
});

module.exports = router;
