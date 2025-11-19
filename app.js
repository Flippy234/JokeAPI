const express = require('express');
const app = express();
const port = 3000;

const jokes = [
    
    {
        id: 1,
        joke: "Why did the scarecrow win an award?",
        punchline: "Because he was outstanding in his field."
    },
    {
        id: 2,
        joke: "Why did the bicycle fall over?",
        punchline: "Because it was two-tired."
    },
    {
        id: 3,
        joke: "What do you call fake spaghetti?",
        punchline: "An impasta."
    },
    {
        id: 4,
        joke: "Why don't scientists trust atoms?",
        punchline: "Because they make up everything."
    },
    {
        id: 5,
        joke: "Why did the math book look sad?",
        punchline: "Because it had too many problems."
    }
];

module.exports.jokes = jokes;

app.use(express.json());
app.use(express.static('public'))

app.use('/', require('./routes/static'))
app.use('/api/v1/random-joke', require('./routes/api/v1/random-joke'))

app.listen(port, () => console.log(`http://localhost:${port}/`));