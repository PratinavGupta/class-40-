class FORM {
  constructor() {
    this.title = createElement('h2')
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
    this.restart = createButton("RESET")
  }

  display() {
    this.title.html("Car Racing Game");
    this.title.position(windowWidth / 2 - 30, windowHeight / 8);

    this.input.position(windowWidth / 2 - 30, windowHeight / 3);
    this.button.position(windowWidth / 2, windowHeight / 3 + 50);

    this.button.mousePressed(() => {
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();

      playerCount = playerCount + 1;
      player.index = playerCount;
      player.update()
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(windowWidth / 2, windowHeight / 3)
    });



    this.restart.position(100, 40);
    this.restart.mousePressed(() => {
      player.updateCount(0)
      game.update(0)
    })
  }

  hide1() {
    this.input.hide();
    this.button.hide();
    this.greeting.hide();

  }


}
