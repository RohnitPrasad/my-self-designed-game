var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var c1, c2, c3, c4;
var xVelocity=0;
var yVelocity=0;
var track;

function preload(){
  police = loadImage("images/police.png");
  obstacle = loadImage("images/obstacles.png");
  obstacleV = loadImage("images/obstaclesV.png");
  glasspane = loadImage("images/glasspane.png")
  congo = loadImage("images/congoMessage.png");
  caught = loadImage("images/busted.jpg");
  platform = loadImage("images/platform.jpg");
  playerI = loadImage("images/player.png");
}

function setup(){
  canvas = createCanvas(windowWidth - 10, windowHeight-20);
  player = createSprite(-10,height-50);
  player.addImage(playerI)
  player.velocityX=5
  player.scale = 0.4;
}


function draw(){
  background(platform);
  drawSprites();
  }
