const http = require ('http');

const host = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {

    
    req.on('error', (err)=>{
        console.log('An error has occured!');
    });

    req.on('error', (err)=>{
        console.log('An error has occured!');
    });
 
});
