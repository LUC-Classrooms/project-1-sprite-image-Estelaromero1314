/**
 * Project 1 - Interactive Image
 * Name: Estela Romero
 * Comments: simple cat that changes colors when mouse is pressed
 */

// Global Variables go here
let catX, catY; // Position of the cat
let colorR, colorG, colorB; // Colors of the cat


function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600x400 pixel drawing canvas
  catX = width / 2; // Start the cat in the middle of the screen horizontally
  catY = height / 2; // Start the cat in the middle of the screen vertically
  // Start with a random color
  colorR = random(255); // Random red component
  colorG = random(255); // Random green component
  colorB = random(255); // Random blue component
}

function draw(){
  // this function runs again and again (60x per second)
  background(200); //light gray background
  
  // add your image drawing code here
 // Set the fill color for the cat using 
 fill(colorR, colorG, colorB);
  
 // Draw the cat's body
 ellipse(catX, catY, 100, 50); // Body of the cat
 
 // Draw the cat's head
 ellipse(catX, catY - 30, 60, 60); // Head of the cat
 
 // Draw the cat's ears
 triangle(catX - 30, catY - 50, catX - 40, catY - 80, catX - 20, catY - 50); // Left ear
 triangle(catX + 30, catY - 50, catX + 40, catY - 80, catX + 20, catY - 50); // Right ear
 
 // Draw the cat's eyes
 fill(0); // Eyes are black
 ellipse(catX - 15, catY - 30, 10, 20); // Left eye
 ellipse(catX + 15, catY - 30, 10, 20); // Right eye

 // Draw the cat's nose
 fill(255, 182, 193); // Light pink nose
 triangle(catX, catY - 20, catX - 5, catY - 10, catX + 5, catY - 10); // Nose
 
 // Draw the cat's mouth
 line(catX, catY - 10, catX, catY); // Mouth line

 // Draw the cat's whiskers
 line(catX - 10, catY - 10, catX - 30, catY - 5); // Left whisker
 line(catX + 10, catY - 10, catX + 30, catY - 5); // Right whisker
/* 
  Use the following if()...else() structure to incorporate mouse click control of your animation
*/
  if(mouseIsPressed){
     // Change to a new random color each time the mouse is clicked
  colorR = random(255);
  colorG = random(255);
  colorB = random(255)
    //check each frame to see if the mouse is pressed, then do something
  } else {
    // do something here if the mouse is NOT pressed
  }
}

/** 
 * the mousePressed() function is separate from draw(). 
 * It only runs (one time) if the mouse is clicked
*/
function mousePressed(){
  // add code here if you want something to execute once each time the mouse is pressed
}