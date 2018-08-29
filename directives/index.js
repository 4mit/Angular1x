const http = require('http');
const fs  = require('fs');
const express = require('express');
const app = express();


app.use(express.static('public'));				// Public Folder will be available as static folder where all files could be stored to server

app.get('/',(req,res)=>{
	res.sendFile(__dirname+'/index.html');		// __dirname returns current folder location(path)

})
app.listen(3000,()=>{
	console.log("server running on 3k");
})
