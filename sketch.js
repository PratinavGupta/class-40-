var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allPlayer;
var car1, car2, car3, car4, cars;
var car1Img,car2Img,car3Img,car4Img,trackImg;

function preload(){
car1Img=loadImage("images/car1.png");
car2Img=loadImage("images/car2.png");
car3Img=loadImage("images/car3.png");
car4Img=loadImage("images/car4.png");
trackImg=loadImage("images/track.jpg")


}

function setup() {
  canvas = createCanvas(windowWidth - 40, windowHeight - 40);
  database = firebase.database();
  game = new GAME();
  game.getState();
  game.start();
  
}


function draw() {

  if (playerCount === 4) {
    game.update(1);
  }
  if (gameState == 1) {
    clear();
    game.play();
  }

  if (gameState == 2) {
  //  game.update(2);
    game.end()



  }




}
