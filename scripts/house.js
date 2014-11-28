var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var width = myCanvas.width;
var height = myCanvas.height;
var startX = 190;
var startY = 92;
var radius = 8;
var timesRun = 0;
var checker = true;

function drawSky() {
	//sky
	ctx.beginPath();
	ctx.rect(0, 0, 300, 250);
	ctx.fillStyle="#E0EEEE";
	ctx.fill();
	ctx.closePath();
 }

function drawSun(){
	//Create a gradient to fill the sun.
	var grade = ctx.createRadialGradient(50,50,40,50,50,0);
	grade.addColorStop(0,"#E0EEEE");
	grade.addColorStop(1,"yellow");
	
	//Fills the sun using the created gradient.
	ctx.fillStyle= grade;
	
	ctx.beginPath();
	ctx.arc(50, 50, 40, 0, 2 * Math.PI);
	ctx.closePath();
	ctx.fill();
}

function drawGround() {
	ctx.beginPath();
	ctx.rect(0, 230, 300, 150);
    ctx.fillStyle = "green";
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
	
	//Front window
	ctx.beginPath();
	ctx.rect(124, 200, 30, 30);
	ctx.closePath();
	ctx.lineWidth=0.5;
	ctx.stroke();
	ctx.fillStyle="#FFFF33";
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(138, 200);
	ctx.lineTo(138, 230);
	ctx.lineWidth = 0.5;
	ctx.stroke();
	ctx.closePath();
	ctx.beginPath();
	ctx.moveTo(124, 216);
	ctx.lineTo(154, 216);
	ctx.lineWidth = 0.5;
	ctx.stroke();
	ctx.closePath();
	
}
	
function drawSmoke() {
	ctx.beginPath();
	ctx.arc(startX, startY, radius, 0, 2 * Math.PI);
	ctx.fillStyle="#AAAAAA";
	ctx.closePath();
	ctx.fill();
	
	//Moves the smoke left or right to depending on the boolean value.
	if (checker) {
		startX += 5;
		checker = false;
	} else {
		startX -= 10;
		checker = true;
	}
	
	radius += 3;
	startY += -10;
	timesRun++;
	
	/*Once the smoke function runs five times, it will reset 
	everything and start again.*/
	if (timesRun == 7) {
		ctx.clearRect(0, 0, 300, 300);
		drawSky();
		drawSun();
		drawGround();
		drawHouse();
		startX = 190;
		startY = 92;
		radius = 8;
		timesRun=0;
	}
}