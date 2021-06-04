class GAME {
  constructor() { }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state,
    });
  }

  start() {
if (gameState === 0) {
      player = new PLAYER();
      player.getCount();
      form = new FORM();
      form.display();
    }

    car1 = createSprite(100, 400);
    car2 = createSprite(300, 400);
    car3 = createSprite(500, 400);
    car4 = createSprite(700, 400);
    cars = [car1, car2, car3, car4];
    car1.addImage(car1Img);
    car2.addImage(car2Img);
    car3.addImage(car3Img);
    car4.addImage(car4Img);

  }

  play() {
    form.hide1();
    textSize(30);
    text("Game Start", 120, 100)
    PLAYER.getPlayerInfo();

    player.getRank()

    if (allPlayer !== undefined) {
      image(trackImg, 0, -height * 8.9, width, height * 10)
      var index = 0;
      var x = width / 32;
      var y;
      for (var plr in allPlayer) {
        //for(var plr =0 ; plr< allPlayer.length:plr++)
        index++;
        x = x + width / 5 - 10
        y = height - allPlayer[plr].distance;

        cars[index - 1].x = x;
        cars[index - 1].y = y;

        if (index === player.index) {
          fill("lightblue")
          ellipse(x, y, 60, 100)
          camera.position.x = width / 2
          camera.position.y = cars[index - 1].y
        }
      }
    }

    if (keyIsDown(UP_ARROW) && player.index !== null) {
      player.distance += 40
      player.update();
    }
    if (player.distance > 7100) {
      gameState = 2;
      player.rank++;
      // console.log(player.rank)
      player.updatePlayerRank(player.rank)
    }

    drawSprites()
  }


  end() {
    console.log("game ended")
    console.log(player.rank)
 }


}