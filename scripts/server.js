const express=require('express');
const app=express();
const deploycontract = require('./deploy.js');

app.get('/', (req, res) => {
    res.send('Hello World!');
    res.send(deploycontract.message1);
    //res.send(deploycontract.message2);
});
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
    console.log(deploycontract.message1);
    
});
