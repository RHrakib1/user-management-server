const express = require('express')
const cros =require('cors')
const app = express();
const port = process.env.PORT || 5000;

//midelware
app.use(cros())


const empoloyes = [
    {id:1,name:'rakib',email:'rakib@gmil.com'},
    {id:2,name:'raju',email:'raju@gmil.com'},
    {id:3,name:'alamin',email:'alamin@gmil.com'},
]


app.get('/', (req, res) => {
    console.log('user managment server Runing');
     res.send('Server is running!');
})
app.get('/user',(req,res)=>{
    res.send(empoloyes)
})


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});




