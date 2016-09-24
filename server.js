var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    

   'article-one' : {
    title: 'Article-One | Riya Jindal',
    heading: 'Article-One',
    date: '21 Sept 2016',
    content:  
       `<p>
            Hey there! Welcome to my first article. This is where you get all the concerned information. Hey there! Welcome to my first article. This is where you get all the concerned information. Hey there! Welcome to my first article. This is where you get all the concerned information. Hey there! Welcome to my first article. This is where you get all the concerned information.
        </p>
        <p>
            Hey there! Welcome to my first article. This is where you get all the concerned information. Hey there! Welcome to my first article. This is where you get all the concerned information. Hey there! Welcome to my first article. This is where you get all the concerned information. Hey there! Welcome to my first article. This is where you get all the concerned information.
        </p>
        <p>
            Hey there! Welcome to my first article. This is where you get all the concerned information. Hey there! Welcome to my first article. This is where you get all the concerned information. Hey there! Welcome to my first article. This is where you get all the concerned information. Hey there! Welcome to my first article. This is where you get all the concerned information.
        </p>`,
   
  },
  
  
   'article-two' : { 
    title: 'Article-Two | Riya Jindal',
    heading: 'Article-Two',
    date: '23 Sept 2016',
    content:  
       `<p>
            Hey there! Welcome to my second article. This is where you get all the concerned information. 
        </p>`,
   },
   
   
   'article-three' : {
    title: 'Article-Three | Riya Jindal',
    heading: 'Article-Three',
    date: '28 Sept 2016',
    content:  
       `<p>
            Hey there! Welcome to my third article. This is where you get all the concerned information. 
        </p>`,
   
 },


};


function createTemplate (data) {
    
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    
    var htmlTemplate = 
    `<html>

    <head>
    <title>
       ${title}
    </title>
    
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    
    <link href="/ui/style.css" rel="stylesheet" />
    
    
    </head>


    <body>

    <div class="container">
    <div>
        <a href="/">Home</a>
    </div>
    
    <hr />
    
    <div>
        <h3>${heading}</h3>
    </div>
    
    <div>
         ${date}
    </div>
    
    <div>
        
         ${content}
        
    </div>
    </div>
</body>

</html>`
;

return htmlTemplate;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    
    var articleName = req.params.articleName;
    
  res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'mainjs'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
