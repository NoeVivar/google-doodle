// YOUR SCRIPTS GO HERE
//storeimage

//storeURL
var img0 = '../img/200.jpg';
var img1 = '../img/300.jpg';
var img2 = '../img/400.jpg';

// Get Random Number
var max = 3;
var numRand = Math.floor( Math.random() * max );
console.log(numRand);

//show images
$('img').attr('src', eval('img' + numRand));

