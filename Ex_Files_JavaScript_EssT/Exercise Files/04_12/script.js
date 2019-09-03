function giveMeEms(pixels) {
	var baseValues = 16;

		function doSomeMath() {
			return pixels/baseValues;
		}

	return doSomeMath;
}

var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var xlargeSize = giveMeEms(36);

console.log("Small size: ", smallSize());
console.log("Medium size: ", mediumSize());
console.log("Large size: ", largeSize());
console.log("Extra Large size: ", xlargeSize());
