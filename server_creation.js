var server_helper = require('http')
var fs = require('fs')
var path = '/Users/johnsmac/Desktop/node_training/test.html'

function error_page(response) {
	 response.writeHead(404,{
                    'Content-Type':'text/plain'
                })
	 response.write('page not found ')
	 response.end()
}


var server = server_helper.createServer(function (request, response){
        console.log('request is made : ',request.url)

        if (request.method =='GET'&& request.url=='/') {

             response.writeHead(200,{
                    'Content-Type':'text/html'
                })
              var readStream = fs.createReadStream(path)
              readStream.on('open', function () {
            // This just pipes the read stream to the response object (which goes to the client)
                  readStream.pipe(response);
                  //注意 这里  不能 调用response.end()，否则html 不显示，可能原因pipe函数输出是异步的
                  console.log('here the html file should be rendered')
              });

            // This catches any errors that happen while creating the readable stream (usually invalid names)
             readStream.on('error', function(err) {
                   response.end('err is happened : '+ err.message);
                   console.log(err)
             }); 

        } else {
            error_page(response)
        }


})

server.listen(8080)

console.log('server is running now')

// =========================================Connect==============================================================

var connect_helper = require('connect')
var app = connect_helper()

// app.use('/h',function (request,response) {
// 	console.log('this is happey request')
// })

// app.use('/j',function (request,response) {
// 	console.log('this is jack  request')
// })
// app.use(function (request,response,next) {
//    	    var error = new Error('not found')
//    	    error.status = 404
//    	    next(error)
// })

// app.use(function (err,req,res,next) {
//      res.status(err.status||500)
//      res.render('error',{

//         message:err.message
//         error: err
//      })
	
// })



// var server = server_helper.createServer(app)

// server.listen(8080)

// // server.on('error',onError)
// // server.on('listening',onListening)




// console.log('server is running now')

// ======================================== HTTPS SERVER ===========================================================

const https = require('https');
// const fs = require('fs');

// const options = {
//   key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
//   cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')
// };

// https.createServer(options, (req, res) => {
//   res.writeHead(200);
//   res.end('hello world\n');
// }).listen(8000);
// =========================== OR ============================================
// const options = {
//   pfx: fs.readFileSync('server.pfx') //pfx: Certificate, Private key and CA certificates to use for SSL. Default null.
// };

// https.createServer(options, (req, res) => {
//   res.writeHead(200);
//   res.end('hello world\n');
// }).listen(8000);
// ==================================================================
// https.get('https://google.com/', (res) => {
//   console.log('statusCode:', res.statusCode);
//   console.log('headers:', res.headers);

//   res.on('data', (d) => {
//     process.stdout.write(d);
//     console.log(d)
//   });

// }).on('error', (e) => {
//   console.error(e);
// });


// ====================================================================



// var options = {
//   hostname: 'encrypted.google.com',
//   port: 443,
//   path: '/',
//   method: 'GET'
// };

// var req = https.request(options, (res) => {
//   console.log('statusCode:', res.statusCode);
//   console.log('headers:', res.headers);

//   res.on('data', (d) => {
//     process.stdout.write(d);
//   });
// });
// req.end();

// req.on('error', (e) => {
//   console.error(e);
// });












