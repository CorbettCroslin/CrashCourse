const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');


// express app
const app = express();

// connect
const dbuRI = 'mongodb+srv://corbettcroslin:NewProject@nodetuts-del96.mongodb.net/c cluster0?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true});
  .then((result) => app.listen(3000))
  .carch((err) => console.log(err);)
// register view engin
app.set('view engine', 'ejs');

// middleewr & Static files
app.use(express.static('public'));
app.use(express.urlencoded(extends true));
app.use(morgan('dev'));


app.use((req,res) => {
  res,status(404), render('404',{title: '404'});
}); 