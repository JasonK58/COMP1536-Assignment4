var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var width = myCanvas.width;
var height = myCanvas.height;
var startX = 190;
var startY = 90;
var radius = 8;

function smoke(x, y, index) {
//smoke properties
    this.x = x;
    this.y = y;

    this.size = 1;
    this.startSize = 32;
    this.endSize = 50;

    this.angle = Math.random() * 359;

    this.startLife = new Date().getTime();
    this.lifeTime = 0;

    this.velY = -1 - (Math.random()*0.5);
    this.velX = Math.floor(Math.random() * (-6) + 3) / 10;
}
var parts = [],
//array for smoke
    minSpawnTime = 100,
    lastTime = new Date().getTime(),
    maxLifeTime = Math.min(5000, (myCanvas.height/(1.5*60)*1000)),
    emitterX = 180,
    emitterY = 70,
    smokeImage = new Image();
	
	
	function spawn() {
	//generating smoke
    if (new Date().getTime() > lastTime + minSpawnTime) {
        lastTime = new Date().getTime();
        parts.push(new smoke(emitterX, emitterY));
    }
}

function drawSky() {
//sky
 ctx.beginPath();
 ctx.rect(0, 0, 300, 250);
 ctx.fillStyle="#E0EEEE";
 ctx.fill();
 ctx.closePath();
 }

function drawSun(){
//sun
	var grade = ctx.createRadialGradient(50,50,40,50,50,0);
	grade.addColorStop(0,"#E0EEEE");
	grade.addColorStop(1,"yellow");
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
	var timesRun = 0;
	
function drawSmoke() {
	
	var startAngle = 0;
	var endAngle = 2 * Math.PI;
	
	ctx.beginPath();
	ctx.arc(startX, startY, radius, startAngle, endAngle);
	ctx.fillStyle="grey";
	ctx.closePath();
	ctx.fill();
	radius += 5;

	startY += -15;
	timesRun++;
	if (timesRun == 5) {
		ctx.clearRect(0, 0, 300, 300);
		drawSky();
		drawSun();
		drawGround();
		drawHouse();
		timesRun=0;
		startX = 190;
		startY = 90;
		radius = 8;
	}
	
	
}


function render() {
//creating canvas images
    var len = parts.length;
    ctx.clearRect(0, 0, width, height);
	drawSky();
	drawGround();
	drawSun();
	drawHouse();
    while (len--) {
        if (parts[len].y < 0 || parts[len].lifeTime > maxLifeTime) {
            parts.splice(len, 1);
        } else {
            parts[len].update();

            ctx.save();
            var offsetX = -parts[len].size/2,
                offsetY = -parts[len].size/2;
         
            ctx.translate(parts[len].x-offsetX, parts[len].y-offsetY);
            ctx.rotate(parts[len].angle / 180 * Math.PI);
            ctx.globalAlpha  = parts[len].alpha;
			drawSmoke();
            //ctx.drawImage(drawSmoke(), offsetX,offsetY, parts[len].size, //parts[len].size);
            ctx.restore();
        }
    }
    spawn();
    requestAnimationFrame(render);
}

smoke.prototype.update = function () {
	//calculation of smoke generator
    this.lifeTime = new Date().getTime() - this.startLife;
    this.angle += 0.2;
    
    var lifePerc = ((this.lifeTime / maxLifeTime) * 100);

    this.size = this.startSize + ((this.endSize - this.startSize) * lifePerc * .1);

    this.alpha = 1 - (lifePerc * .01);
    this.alpha = Math.max(this.alpha,0);
    
    this.x += this.velX;
    this.y += this.velY;
}