var express = require('express');
var app =  express();

// Mock Posts:
const posts = [
   {
      name:'Hello'
   },{
      name:'World'
   },
];

app.get('/', (req,res) => {
   res.send('Hello World and Nodemon is working!');
});

app.get('/posts', (req,res) => {
   res.send(posts);
});

// Only works on 3000 regardless of what I set environment port to or how I set
// [value] in app.set('port', [value]).
// app.listen(3000);
app.listen(3000);
