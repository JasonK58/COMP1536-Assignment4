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
	ctx.rect(0, 230, 300, 150);
    ctx.fillStyle = "green";
    ctx.fill();
	ctx.closePath();
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

function drawHouse() {
	//Walls
	ctx.beginPath();
	ctx.rect(90, 180, 100, 100);
	ctx.closePath();
	ctx.fillStyle="#B0B5A1";
	ctx.fill();
	ctx.fillStyle="black"
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(190, 180);
	ctx.lineTo(250, 130);
	ctx.lineTo(250, 230);
	ctx.lineTo(190, 280);
	ctx.closePath();
	ctx.fillStyle="#B0B5A1";
	ctx.fill();
	ctx.fillStyle="black";
	ctx.stroke();

	//Roof
	ctx.beginPath();
	ctx.moveTo(90, 180);
	ctx.lineTo(140, 110);
	ctx.lineTo(190, 180);
	ctx.closePath();
	ctx.fillStyle="#4c4c4c";
	ctx.fill();
	ctx.fillStyle="black";
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(140, 110);
	ctx.lineTo(195, 70);
	ctx.lineTo(250, 130);
	ctx.lineTo(190, 180);
	ctx.closePath();
	ctx.fillStyle="#4c4c4c";
	ctx.fill();
	ctx.fillStyle="black";
	ctx.stroke();
	
	//Door
	ctx.beginPath();
	ctx.rect(126, 245, 25, 35);
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle="#FFD89B";
	ctx.fill();
	ctx.beginPath();
	ctx.arc(145, 263, 3, 0, 2 * Math.PI);
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle="#cd7f32";
	ctx.fill();
	
	//Chimney
	ctx.beginPath();
	ctx.rect(180, 100, 25, 10);
	ctx.closePath();
	ctx.fillStyle="#b20000";
	ctx.fill();
	ctx.fillStyle="black";
	ctx.stroke();
	ctx.beginPath();
	ctx.rect(185, 110, 15, 25);
	ctx.closePath();
	ctx.fillStyle="#b20000";
	ctx.fill();
	ctx.fillStyle="black";
	ctx.stroke();

	//Side window
	ctx.beginPath();
	ctx.moveTo(200, 210);
	ctx.lineTo(240, 175);
	ctx.lineTo(240, 215);
	ctx.lineTo(200, 250);
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle="#FFFF33";
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(220, 192);
	ctx.lineTo(220, 233);
	ctx.closePath();
	ctx.lineWidth=0.5;
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(200, 231);
	ctx.lineTo(241, 196);
	ctx.closePath();
	ctx.lineWidth=0.5;
	ctx.stroke();
}