const express = require('express')
const app = express();
const port = process.env.PORT || 5000;



app.get('/', (req, res) => {
    console.log('user managment server Runing');
})

app.listen(port, () => {
    console.log(`server is running on port is: ${port}`);
})