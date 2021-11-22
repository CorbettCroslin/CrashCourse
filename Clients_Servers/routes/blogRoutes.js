const expree = required('express');
const router = express.Router();

router.get('/add-blog', (req,res) => {
  const blog = new blog({
    title:'new blog'
    snippet: 'about my new blog'
    body: 'more about my new blog'
  });
  blog.save()
  then((results) => {
    res.send(results)
  })
  .catch((err) => {
    console.log(err);

  });
})

router.get('/all-blog', (req,res) => {
  Blog.find()
    .then ((result) => {
      res.send(results);
    })
    catch((err) => {
      console.log;
    });
})

router.get('/single-blog', (req,res) => {
  Blog.findByID('')
    .then ((result) => {
      res.send(results);
    })
    catch((err) => {
      console.log;
    });
})

// routes
router.get('/', (req, res) => {
  const blogs = [
    (tile: 'Yoshi', snippet:'Lorem')
    (tile: 'Princess', snippet:'Lorem')
    (tile: 'Mario', snippet:'Lorem')
  ]
  res.render('index',{ title: 'Home', blogs});
});


router.get('/about',(req, res) => {
  res.render('about',{title: 'about'});
});

// blog routes
router.get('/blogs', (req, res) => {
  const blog = new Blog(req.body);
  Blog.find() .sort({created: -1})
    .then((results) => {
      res.redirect('index',{the: 'All Blogs', blog: result})
    })
    catch((err) => {
      console.log(err)
      render('index', { tittle: 'All blogs' blogs: resulots})
    })
}) 


app.use(blogRoutes)

router.get('/blogs/create', (req, res) => {
  res.redirect('create',{title: 'blogs'});
});