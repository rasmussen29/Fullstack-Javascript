const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
]


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/api/courses', (req, res) => {

    const { error } = validateCourse(req.body); // result.error
    if(error){
        res.status(400).send(error.details[0].message)
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    
    const { error } = validateCourse(req.body); // result.error
    if(error){
        res.status(400).send(error.details[0].message)
        return;
    }
    course.name = req.body.name;
    res.send(course);
});

function validateCourse(course){
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

     return schema.validate(course);
    
}
app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.param);
});

// PORT 
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))


