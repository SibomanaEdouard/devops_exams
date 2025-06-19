const express = require('express');
require('dotenv').config();
const app = express();


const port = process.env.PORT || 3000

// Middleware to parse JSON
app.use(express.json());


app.get('', (req,res)=>{
    res.send("Hello, DevOps");

});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port :${port} `);
});