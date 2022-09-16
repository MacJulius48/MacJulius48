
    // res.end("Greetings Sidehustle from the server side")

    // res.writeHead(200, {'Content-Type':'text/plain'});
    // res.setHead(200, {'Content-Type':'text/plain'});
    // res.end('Hello from Sidehustle!');
    
    // res.statusCode=200;
    // res.setHeader('Content-Typoe', 'application/json');

    // const serializedData =JSON.stringify({
    //     name: 'Jenom',
    //     age:24,
    //     country:'Nigeria'
    // });
    // res.write(serializedData);
    // res.end();



// server.listen(port, host, () => {
//     console.log(`Runnning at ${host}:${port}`);
// })

const http = require('http');

const data = JSON.stringify({
    username : 'jenom'
})

const options = {
    hostname: '',
    port: '',
    method : 'POST',
    path : '',
    heraders: {
        'Content-Type':'application/json'
    }
};

const request = http.get(options, (response) => {
    console.log(`Status code: ${response.statusCode}`);
    console.log(`Headers: ${response.headers}`);

    response.on('data', (chunk) => console.log(`Chunk received: $(chunk)`));
});

response.on('error', (err) => console.log(err));
response.write(data);
response.on();