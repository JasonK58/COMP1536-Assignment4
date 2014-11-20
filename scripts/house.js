var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var width = myCanvas.width;
var height = myCanvas.height;

//To move the sun, change the centerX and CenterY values.
//To change the size of the sun, change the radius.
function drawSun() {
	var centerX = 50;
	var centerY = 50;
	var radius = 30;
	var startAngle = 0;
	var endAngle = 2 * Math.PI;
	ctx.beginPath();
	ctx.arc(centerX, centerY, radius, startAngle, endAngle);
	ctx.fillStyle="yellow";
	ctx.fill();
	ctx.fillStyle="black";
	ctx.lineWidth=1.5;
	ctx.stroke();
	
}