const express = require('express');

const app = express();

app.set('view engine', 'ejs');


app.listen(3000);

app.get('/',(req, res) => {
  res.render('index', {title: 'index'});
});

app.get('/about',(req, res) => {
  res.render('about',{title: 'about'});
});

app.get('/blogs/create', (req, res) => {
  res.redirect('create',{title: 'blogs'});
});

app.use((req,res) => {
  res,status(404), render('404',{title: '404'});
}); 