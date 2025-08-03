const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

//midelware
app.use(cors())
app.use(express.json())

const empoloyes = [
    { id: 1, name: 'rakib', email: 'rakib@gmil.com' },
    { id: 2, name: 'raju', email: 'raju@gmil.com' },
    { id: 3, name: 'alamin', email: 'alamin@gmil.com' },
]


app.get('/', (req, res) => {
    console.log('user managment server Runing');
    res.send('Server is running!');
})


app.get('/user', (req, res) => {
    res.send(empoloyes)
})

app.post('/users', (req, res) => {
    console.log('post api is hetting')
    console.log(req.body)
    const newuser = req.body
    newuser.id = empoloyes.length + 1;
    empoloyes.push(newuser);
    res. send(newuser)
})




app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});




