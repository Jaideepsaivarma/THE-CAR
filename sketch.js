var database;
var gameState=0;
var playercount;
var form,game,player;

function setup(){
  canvas = createCanvas(500,500);
 
  database = firebase.database();
  game = new Game();
  game.getState();
  

}
function draw(){
  
}
