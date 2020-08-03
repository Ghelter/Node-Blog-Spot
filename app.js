const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { render } = require('ejs');
const blogRoutes = require('./routes/blogRoutes');

//express app 
const app = express();

//connect to Mongodb
const dbURI = 'mongodb+srv://blogspotter:blogspotter95@blogspot.67fxa.mongodb.net/note-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    //listen to requests only after this connection is completed
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))

//register view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

//Routes
app.get('/', (req,res) => {
    res.redirect('/blogs');
    //res.render('index', { title: 'Home', blogs });
})

app.get('/about', (req,res) => {
    res.render('about', { title: 'About' });
})

//blog routes
app.use('/blogs', blogRoutes);



// 404 page
// 404 page has to be at the bottom of req, res 
app.use((req, res) => {
    res.render('404', { title: '404' })
})