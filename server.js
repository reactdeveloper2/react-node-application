const express = require('express');

const morgan = require('morgan')

const app = express();

const port = 3000 
app.use(morgan("method:status:url"))
app.use(morgan("method:status"))
app.use(morgan("method:status:url*HTTP/:http-version*"))
app.use(morgan("method"))
app.use(morgan("tiny"))
app.use(morgan("combined"))
app.use(morgan("dev"))

app.get('/',(req,res)=>{
    res.end("Morgan loader App")
})

app.listen(port,()=>{
    console.log(`server listening on port  ${port}`);
})