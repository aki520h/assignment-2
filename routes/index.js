var express = require('express');
var router = express.Router();

let travelList = []; 

/* Home Page */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'World Travel Directory', 
    items: travelList 
  });
});

/* POST: 3 Fetch Data */
router.post('/add', function(req, res) {
  const newItem = {
    name: req.body.destName,
    country: req.body.destCountry,
    attraction: req.body.destAttraction
  };
  
  if (newItem.name && newItem.country) {
    travelList.push(newItem);
  }
  res.redirect('/');
});
// About page Route
router.get('/about', function(req, res) {
  res.render('about', { title: 'About Our Directory' });
});


module.exports = router;