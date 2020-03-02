// All Requires at top
// we require the express module
// without ./ means global within project (-g global within VS Code)
const express = require('express');  // npm i express - this allows me to use express server in my project
const request = require('request');  // npm i request - API Calls, use request as fetch is very new - will be replaced

const app = express();   // now a function we are calling - initialised express to use its features

const getWeather = () => {
    request({
        uri: `https://api.openweathermap.org/data/2.5/weather?q=Blackpool,uk&APPID=${process.env.APPID}`,
        json: true  // true returns json formatted, false will return just a string
    }, (err, res) => {
        if (err) throw err;     // ; signify end of statement this is a complete if
        console.log(res.body);  // Will show me any error
    })
}

// APPID="34ab9a0e7ae72e9609dc4e4d6dd8cb19" node index.js   // Paste this into console

getWeather();

// four http methods: GET, POST , PUT & DELETE - You may see CRUD for some other stacks (Create, Read, Update & Delete)

// get is a function inside of express - for more info look at module on NPMJS
// for each file you want to load, you need a get.
app.get('/', (req, res) => {                    // each get method should have a req (Request) & res (Response). 
    // sendFile is for express only, no templating engine used.
    res.sendFile(__dirname + '/index.html');    // double underscore '__' for directory name not to get confused with snake_case
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html'); 
})

app.listen(3000, () => {    // listen is all about ports - creates a connection on a specified port (localhost:3000 - Response 'cannot GET /', looking for '/')
    console.log('I am listening on port 3000');
})      

