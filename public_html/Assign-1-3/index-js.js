function clock() {
	var time = new Date();
	var hour = time.getHours();
	var minute = time.getMinutes();
	var second = time.getSeconds();
	hour = checkTime(hour);
	minute = checkTime(minute);
	second = checkTime(second);
	document.getElementById("clock").innerHTML = hour + ":" + minute + ":" + second;
	var update = setTimeout(clock, 1000); // update clock every second
}
function checkTime(i) {
	if (i < 10) {i = "0" + i}; // add a 0 in front of single digit numbers
	return i;
}