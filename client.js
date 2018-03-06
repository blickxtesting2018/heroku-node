// var net = require('net');
// var client = net.connect({port: 9090}, function() {
//    console.log ('Client has connected to server successfully!');
// });


// var interval=setInterval(function(){
//     client.on('data', function(data) {
//    console.log(data.toString());
// });
// },1000);

// interval();
var net = require('net');
//var moment = require('moment');

var client = new net.Socket();

// function getRandomInRange(from, to, fixed) {
//     return (Math.random() * (to - from) + from).toFixed(fixed);
// }

client.connect(3000, '127.0.0.1', function() {
    console.log('Connected');
    setInterval(function() {

    }, 3000);
});

client.on('data', function(data) {
    console.log('Received: ' + data);
    //client.destroy(); // kill client after server's response
});

client.on('close', function() {
    console.log('Connection closed');
});

