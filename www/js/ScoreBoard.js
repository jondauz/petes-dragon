function ScoreBoard() {

	PIXI.Container.call(this);
	this.position.x = 0;
	this.position.y = 0;

	this.levelText = new PIXI.extras.BitmapText(gameTextObject.timer.levelText + " " + LEVEL , {
		font: '32px CrimsonText_Bold_White',
		align: 'center'
	});

	this.levelText.position.x = GAME_SIZE.DESKTOP.WIDTH/2 - this.levelText.width/2;
	this.levelText.position.y = GAME_SIZE.DESKTOP.HEIGHT/2 - this.levelText.height/2 - 100;
	this.addChild(this.levelText);


	this.leadText = new PIXI.extras.BitmapText(gameTextObject.scoreBoard.text, {
		font: '21px CrimsonText_SemiBold_White',
		align: 'center'
	});

	this.leadText.position.x = GAME_SIZE.DESKTOP.WIDTH/2 - this.leadText.width/2;
	this.leadText.position.y = this.levelText.y + this.levelText.height + 30;
	this.addChild(this.leadText);

	this.scoreText = new PIXI.extras.BitmapText("0 "+gameTextObject.scoreBoard.secondsText, {
		font: '46px CrimsonText_Bold_Yellow',
		align: 'center'
	});

	this.scoreText.position.x = GAME_SIZE.DESKTOP.WIDTH/2 - this.scoreText.width/2;
	this.scoreText.position.y = this.leadText.y + this.leadText.height + 15;
	this.addChild(this.scoreText);

	this.shareContainer = new PIXI.Container();
	this.shareContainer.width = 620;
    this.shareContainer.height = 142;
    this.shareContainer.x = GAME_SIZE.DESKTOP.WIDTH/2 - 620/2;
    this.shareContainer.y = this.scoreText.y + this.scoreText.height + this.shareContainer.height/2  + 75;
 	
 	var texture = PIXI.Texture.fromFrame('share-bkgd.png');     
    var background = new PIXI.Sprite(texture);
    this.shareContainer.addChild(background);

    this.shareTextContainer = new PIXI.Container();
    this.shareTextContainer.width = 363;
    this.shareTextContainer.height = 138;
    this.shareTextContainer.x = this.shareTextContainer.x - this.shareTextContainer.width;
    this.shareTextContainer.y = 0;
    this.shareContainer.addChild(this.shareTextContainer);

    this.shareTextTop = new PIXI.extras.BitmapText(gameTextObject.scoreBoard.shareTextTop, {
		font: '30px CrimsonText_Bold_White',
		align: 'center'
	});
	this.shareTextTop.x = 363/2 - this.shareTextTop.width/2;
	this.shareTextTop.y = 30;
	this.shareContainer.addChild(this.shareTextTop);

	this.shareTextBottom = new PIXI.extras.BitmapText(gameTextObject.scoreBoard.shareTextBottom, {
		font: '20px CrimsonText_SemiBold_White',
		align: 'center'
	});
	this.shareTextBottom.x = 363/2 - this.shareTextBottom.width/2;
	this.shareTextBottom.y = this.shareTextTop.y + this.shareTextTop.height + 15;
	this.shareTextContainer.addChild(this.shareTextBottom);

    var facebookTexture_array = [
		PIXI.Texture.fromFrame("share-facebook-default.png"),
		PIXI.Texture.fromFrame("share-facebook-hover.png")
	];

	this.facebookBtn = new PIXI.extras.MovieClip(facebookTexture_array);
	this.facebookBtn.buttonMode = true;
	this.facebookBtn.interactive = true;
	this.facebookBtn.position.x = 363 + 40;
	this.facebookBtn.position.y = 30;

	this.facebookBtn.on('mouseover', function(){
        this.gotoAndStop(1);
    });

    this.facebookBtn.on('mouseout', function(){
        this.gotoAndStop(0);
    });

  	this.shareContainer.addChild(this.facebookBtn);

  	var twitterTexture_array = [
		PIXI.Texture.fromFrame("share-twitter-default.png"),
		PIXI.Texture.fromFrame("share-twitter-hover.png")
	];

	this.twitterBtn = new PIXI.extras.MovieClip(twitterTexture_array);
	
	this.twitterBtn.interactive = true;
	this.twitterBtn.buttonMode = true;
	this.twitterBtn.position.x = this.facebookBtn.position.x + this.facebookBtn.width + 20;
	this.twitterBtn.position.y = 30;

	this.twitterBtn.on('mouseover', function(){
        this.gotoAndStop(1);
    });

    this.twitterBtn.on('mouseout', function(){
        this.gotoAndStop(0);
    });

	this.shareContainer.addChild(this.twitterBtn);

  	var continueTexture_array = [
		PIXI.Texture.fromFrame("nextlevel-background-default.png"),
		PIXI.Texture.fromFrame("nextlevel-background-hover.png")
	];
	this.continueContainer = new PIXI.Container();
	this.continueContainer.interactive = true;
	this.continueContainer.x = GAME_SIZE.DESKTOP.WIDTH/2 - 237/2 + 500;
	this.continueContainer.y = 20;

	this.continueBtn = new PIXI.extras.MovieClip(continueTexture_array);
	this.continueBtn.buttonMode = true;
	this.continueBtn.width = 237;
	this.continueBtn.height = 172;
	this.continueBtn.interactive = true;
	this.continueContainer.on('mouseover', function(){
		this.children[0].gotoAndStop(1);
    });

    this.continueContainer.on('mouseout', function(){
        this.children[0].gotoAndStop(0);
    });
  
    this.continueContainer.addChild(this.continueBtn);

 	this.continueText = new PIXI.extras.BitmapText(gameTextObject.scoreBoard.continueText, {
		font: '18px CrimsonText_SemiBold_White',
		align: 'center'
	});
	this.continueText.x = this.continueContainer.width/2 - this.continueText.width/2;
	this.continueText.y = 85;

	this.continueContainer.addChild(this.continueText);

	this.nextLevelText = new PIXI.extras.BitmapText(gameTextObject.timer.levelText + " " + (LEVEL + 1), {
		font: '32px CrimsonText_Bold_Yellow',
		align: 'center'
	});
	this.nextLevelText.x = this.continueContainer.width/2 - this.nextLevelText.width/2
	this.nextLevelText.y = this.continueText.y+this.continueText.height+5;

	this.continueContainer.addChild(this.nextLevelText);

  	this.addChild(this.continueContainer);

  	var previousTexture_array = [
		PIXI.Texture.fromFrame("prevlevel-background-default.png"),
		PIXI.Texture.fromFrame("prevlevel-background-hover.png")
	];
	this.previousContainer = new PIXI.Container();
	this.previousContainer.interactive = true;
	this.previousContainer.x = GAME_SIZE.DESKTOP.WIDTH/2 - 237/2 - 500;
	this.previousContainer.y = 20;

	this.previousBtn = new PIXI.extras.MovieClip(previousTexture_array);
	this.previousBtn.width = 237;
	this.previousBtn.height = 172;
	this.previousBtn.buttonMode = true;
	this.previousBtn.interactive = true;
	this.previousContainer.on('mouseover', function(){
		this.children[0].gotoAndStop(1);
    });

    this.previousContainer.on('mouseout', function(){
        this.children[0].gotoAndStop(0);
    });
  
    this.previousContainer.addChild(this.previousBtn);

 	this.previousText = new PIXI.extras.BitmapText(gameTextObject.scoreBoard.previousText, {
		font: '18px CrimsonText_SemiBold_White',
		align: 'center'
	});
	this.previousText.x = this.previousContainer.width/2 - this.previousText.width/2;
	this.previousText.y = 85;

	this.previousContainer.addChild(this.previousText);

	this.previousLevelText = new PIXI.extras.BitmapText(gameTextObject.timer.levelText + " " + LEVEL, {
		font: '32px CrimsonText_Bold_Yellow',
		align: 'center'
	});
	this.previousLevelText.x = this.previousContainer.width/2 - this.previousLevelText.width/2
	this.previousLevelText.y = this.previousText.y+this.previousText.height+5;

	this.previousContainer.addChild(this.previousLevelText);
  	this.addChild(this.previousContainer);
    this.addChild(this.shareContainer);

}

ScoreBoard.constructor = ScoreBoard;
ScoreBoard.prototype = Object.create(PIXI.Container.prototype);

ScoreBoard.prototype.realignText = function(score) {
	this.leadText.position.x = GAME_SIZE.DESKTOP.WIDTH/2 - this.leadText.width/2;
	this.leadText.position.y = GAME_SIZE.DESKTOP.HEIGHT/2 - this.leadText.height/2;
}
