var a = 3/4;
var b = 5/7;

var theBiggest = function(a, b) {
  var result;
  a > b ? result = ["a", a] : ["b", b];
  console.log(result);
}

theBiggest(7/9, 13/25);
