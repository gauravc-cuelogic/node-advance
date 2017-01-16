var express = require('express');
var pug = require('pug');
var app = express();

app.set('views', __dirname + '/views_pug')
app.set('view engine', 'pug');
app.locals.pageTitle = 'Hello Pug';
app.get('/', function (req, res){
    var fn = pug.compileFile(__dirname + '/views_pug/partials/page/head.pug');
    var html = fn({ pageTitle: 'Hello Pug'});
    console.log(html)
    res.render('index', {
            /*pageTitle: 'Hello Pug',*/ 
            youAreUsingJade: true,
            headerlabel: "Pug - node template engine"
        });
});

app.get('/about', function (req, res){
   
    res.render('index', {
                youAreUsingJade: true,
                headerlabel: "About Pug - node template engine"
            });
});
app.get('/who/:name?', function (req, res){
    var name = req.params.name;
    res.send(`Hello ${name}`);
});

app.get('/who/:name?/:title?', function (req, res){
    var name = req.params.name;
    var title = req.params.title;
    res.send(`Hello ${name} ${title}`);
});

app.get('*', function (req, res){
    
    res.send(`Bad Route :(`);
});

app.listen(3000, function(){
    console.log('Listening to localhost:3000');
});