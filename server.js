const express = require('express');
const flexjson = require('jsonflex')();
//const compression = require('compression');

const app = express();

//app.use(compression());
app.use(flexjson);
app.use(express.static('./'));



app.listen(3000,()=>{console.log("Server started on port 3000.")});