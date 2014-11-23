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
	ctx.closePath();
}

function drawGround() {
	ctx.beginPath();
	ctx.rect(0, 200, 300, 150);
    ctx.fillStyle = "green";
    ctx.fill();
	ctx.closePath();
}

function drawCloud() {
	ctx.beginPath();
	ctx.moveTo(150, 50);
	ctx.bezierCurveTo(100, 100, 50, 75, 200, 100);
	ctx.lineWidth=1.5;
	ctx.stroke();
	ctx.closePath();
     // context.lineWidth = 5;
     // context.fillStyle = '#8ED6FF';
     // context.fill();
     // context.strokeStyle = '#0000ff';
     // context.stroke();
}

function drawCloud() {
  ctx.beginPath();
  ctx.moveTo(219, 44);
  ctx.bezierCurveTo(229, 11, 287, 62, 243, 85);
  ctx.bezierCurveTo(252, 110, 201, 118, 196, 90);
  ctx.bezierCurveTo(181, 131, 125, 97, 144, 82);
  ctx.bezierCurveTo(108, 43, 182, 21, 171, 43);
  ctx.bezierCurveTo(173, 9, 228, 23, 220, 45);
  ctx.fillStyle = "#F5F5F5";
  ctx.fill();
  ctx.closePath();
}
