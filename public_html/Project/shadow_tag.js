/* gotcha2 */
const canvas = document.querySelector('canvas');
canvas.width = 300;
canvas.height = 300;
const ctx = canvas.getContext('2d');
startMenu();
            
// the player
let playerX = 140;
let playerY = 140;
            
// enemy1: Doppel
let enemy1X = -150;
let enemy1Y = Math.floor(Math.random() * 260 + 10);
            
// enemy2: Biggie
let enemy2X = 700;
let enemy2Y = Math.floor(Math.random() * 230 + 10);
            
// enemy3: Tiny
let enemy3X = Math.floor(Math.random() * 270 + 10);
let enemy3Y = 1500;
            
// enemy4: Shadow
let enemy4X = 3000;
let enemy4Y = Math.floor(Math.random() * 260 + 10);
            
// enemy5: Eclipse
let enemy5X = Math.floor(Math.random() * 180 + 10);
let enemy5Y = -600;
            
// enemy6: Blink
let enemy6X = Math.floor(Math.random() * 260 + 10);
let enemy6Y = 20000;
        	
// score counter
var score = 0;
// score dispaly
document.getElementById("myScore").innerHTML = score;
            
// player movement states
var movingUp = false;
var movingDown = false;
var movingLeft = false;
var movingRight = false;
            
// game states
var gameIsRunning = false;
var gameIsOver = false;
            
// Updates graphics based on position data
function draw() {
	ctx.clearRect(0, 0, 300, 300); // clear previous frame
	// draw background
	ctx.fillStyle = 'seagreen';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
                
	// draw player
	ctx.fillStyle = 'red';
	ctx.fillRect(playerX, playerY, 20, 20);
                
	// draw enemies
	ctx.fillStyle = 'black';
	ctx.fillRect(enemy1X, enemy1Y, 20, 20);
	ctx.fillRect(enemy2X, enemy2Y, 50, 50);
	ctx.fillRect(enemy3X, enemy3Y, 10, 10);
	ctx.fillRect(enemy4X, enemy4Y, 20, 20);
	ctx.fillRect(enemy5X, enemy5Y, 100, 100);
	ctx.fillStyle = 'gold';
	ctx.fillRect(enemy6X, enemy6Y, 20, 20);
                
	// if player gets tagged, end the game. else, increase score by 1
	if(isTagged())
		return gameOver();
	else
		score++;
                    
	document.getElementById("myScore").innerHTML = score;
                    
	// move all enemies 
	enemy1X += 1;
	enemy2X -= .75;
	enemy3Y -= 1.5;
	enemy4X -= 2;
	enemy5Y += .2;
	enemy6Y -= 3;
                
	// move player
	if(movingUp && playerY >= 0){
		playerY -= 1;
	}
	if(movingDown && playerY <= 280){
		playerY += 1;
	}
	if(movingLeft && playerX >= 0){
		playerX -= 1;
	}
	if(movingRight && playerX <= 280){
		playerX += 1;
	}
                
	// reset offscreen enemies
	if(enemy1X>330){
		enemy1X = -40;
		enemy1Y = Math.floor(Math.random() * 260 + 10);
	}
	if(enemy2X<-100){
		enemy2X = 300;
		enemy2Y = Math.floor(Math.random() * 230 + 10);
	}
	if(enemy3Y<-50){
		enemy3X = Math.floor(Math.random() * 270 + 10);
		enemy3Y = 500;
	}
	if(enemy4X<-250){
		enemy4X = 900;
		enemy4Y = Math.floor(Math.random() * 260 + 10);
	}
	if(enemy5Y>350){
		enemy5X = Math.floor(Math.random() * 180 + 10);
		enemy5Y = -200;
	}
	if(enemy6Y<-100) {
		enemy6X = Math.floor(Math.random() * 260 + 10);
		enemy6Y = 500;
	}
                
                
	requestAnimationFrame(draw); // draw next frame
}
            
function startMenu(){
	ctx.clearRect(0, 0, 300, 300); // clear previous frame
        ctx.fillStyle = "white";
	ctx.fillRect(0, 0, 300, 300); // background        
	// Start button
	ctx.textAlign = "center";
	ctx.fillStyle = "black";
	ctx.font = "20px courier";
	ctx.strokeRect(100, 120, 100, 50);
	ctx.fillText("Start!", 150, 150);
	}
            
function gameOver(){
	gameIsOver = true;
                
	// game over message and final score
	ctx.textAlign = 'center';
	ctx.font = '50px impact';
	ctx.fillStyle= 'white';
	ctx.fillText('GAME OVER', 150, 100);
	ctx.font = '20px courier';
	ctx.fillText('Final Score: ' + score, 150, 130);
                
	// Retry button
	ctx.fillRect(100, 150, 100, 50);
	ctx.fillStyle= 'black';
	ctx.strokeRect(100, 150, 100, 50);
	ctx.fillText("Retry?", 150, 180);
}
            
// Checks if player is tagged
function isTagged(){
	// if player is touching an enemy, return true
	if(isContact(playerX, playerY, 20, enemy1X, enemy1Y, 20)) // Doppel
		return true;
	if(isContact(playerX, playerY, 20, enemy2X, enemy2Y, 50)) // Biggie
		return true;
	if(isContact(enemy3X, enemy3Y, 10, playerX, playerY, 20)) // Tiny
		return true;
	if(isContact(playerX, playerY, 20, enemy4X, enemy4Y, 20)) // Shadow
		return true;
	if(isContact(playerX, playerY, 20, enemy5X, enemy5Y, 100)) // Eclipse
		return true;
	if(isContact(playerX, playerY, 20, enemy6X, enemy6Y, 20)) // Blink
		return true;
	return false;
}
            
// Checks contact between two squares. Smaller square must be parametized first, or else smaller square could go between larger one.
function isContact(smallerX, smallerY, smallerSize, largerX, largerY, largerSize){
	if((smallerX > largerX && smallerX < largerX + largerSize && smallerY > largerY && smallerY < largerY + largerSize) ||
	(smallerX + smallerSize > largerX && smallerX + smallerSize < largerX + largerSize && smallerY > largerY && smallerY < largerY + largerSize) ||
	(smallerX > largerX && smallerX < largerX + largerSize && smallerY + smallerSize > largerY && smallerY + smallerSize < largerY + largerSize) ||
	(smallerX + smallerSize > largerX && smallerX + smallerSize < largerX + largerSize && smallerY + smallerSize > largerY && smallerY + smallerSize < largerY + largerSize))
		return true;

	return false;
}
            
            
            
// When key is pressed down, set movement
document.onkeydown = function keyDown(e){
	switch(e.key) {
		case 'w':
			movingUp = true;
			break;
		case 'a':
			movingLeft = true;
			break;
		case 's':
			movingDown = true;
			break;
		case 'd':
			movingRight = true;
			break;
		default:
	}
}
            
// When key is released, unset movement
document.onkeyup = function keyUp(e){
	switch(e.key) {
		case 'w':
			movingUp = false;
			break;
		case 'a':
			movingLeft = false;
			break;
		case 's':
			movingDown = false;
			break;
		case 'd':
			movingRight = false;
			break;
		default:
	}
}
            
// Mouseclick function for menuing.
document.onclick = function mouseClick(e){
	const rect = canvas.getBoundingClientRect()
	const x = event.clientX - rect.left
	const y = event.clientY - rect.top

	// if retry button clicked, restart game (score, score display, and player/enemy positions)
	if(gameIsOver && gameIsRunning && x>100 && x<200 && y>150 && y<200){
		gameIsOver = false;
		gameIsRunning = false;
		score = 0;
		document.getElementById("myScore").innerHTML = 0;
		playerX = 140;
		playerY = 140;
		enemy1X = -150;
		enemy1Y = Math.floor(Math.random() * 260 + 10);
		enemy2X = 700;
		enemy2Y = Math.floor(Math.random() * 230 + 10);
		enemy3X = Math.floor(Math.random() * 270 + 10);
		enemy3Y = 1500;
		enemy4X = 3000;
		enemy4Y = Math.floor(Math.random() * 260 + 10);
		enemy5X = Math.floor(Math.random() * 180 + 10);
		enemy5Y = -600;
		enemy6X = Math.floor(Math.random() * 260 + 10);
		enemy6Y = 20000;
		startMenu();   
                }

	// else if start button clicked, run game
	else if(!gameIsRunning && x>100 && x<200 && y>120 && y<170){
		gameIsRunning = true;
		draw();
	}
}
