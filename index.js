const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Cook it server is running');
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courses/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const course = courses.find(ht => ht.id === id );
    res.send(course);
})

app.listen(port, () => {
    console.log(`Cook it running on the port ${port}`);
});