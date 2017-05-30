function TimesUp() {

	PIXI.Container.call(this);
	this.position.x = 0;
	this.position.y = 0;

	var texture = PIXI.Texture.fromFrame('scoreboard-background.png');     
    var background = new PIXI.extras.TilingSprite(texture, GAME_SIZE.DESKTOP.WIDTH, GAME_SIZE.DESKTOP.HEIGHT);
    this.addChild(background);

	this.leadText = new PIXI.extras.BitmapText(gameTextObject.gameOver.text, {
		font: '45px CrimsonText_Bold_Yellow',
		align: 'center'
	});

	this.leadText.position.x = GAME_SIZE.DESKTOP.WIDTH/2 - this.leadText.width/2;
	this.leadText.position.y = GAME_SIZE.DESKTOP.HEIGHT/2 - this.leadText.height/2 - 50;
    
	this.addChild(this.leadText);

	this.tryAgainBtn = new Button(gameTextObject.gameOver.button);
	this.tryAgainBtn.buttonMode = true;

	if(window.innerWidth>=768) { 
		this.tryAgainBtn.x = GAME_SIZE.DESKTOP.WIDTH/2 - this.tryAgainBtn.width/2;
    } else {
		this.tryAgainBtn.x = GAME_SIZE.MOBILE.WIDTH/2 - this.tryAgainBtn.width/2;
    }

	this.tryAgainBtn.y = this.leadText.position.y + this.leadText.height + 100;
	this.addChild(this.tryAgainBtn);

}

TimesUp.constructor = TimesUp;
TimesUp.prototype = Object.create(PIXI.Container.prototype);


TimesUp.prototype.realignText = function(score) {
	this.leadText.position.x = GAME_SIZE.DESKTOP.WIDTH/2 - this.leadText.width/2;
	this.leadText.position.y = GAME_SIZE.DESKTOP.HEIGHT/2 - this.leadText.height/2;
}