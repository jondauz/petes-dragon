function Button(text) {

	var texture_array = [
		PIXI.Texture.fromFrame("default-button-background.png"),
		PIXI.Texture.fromFrame("hover-button-background.png")
	];

	PIXI.extras.MovieClip.call(this, texture_array);
	
	this.interactive = true;
	this.position.x = 0;
	this.position.y = 0;

	var buttonText = new PIXI.extras.BitmapText(text, {
        font: '21px CrimsonText_Roman_White',
        align: 'center'
    });

	buttonText.position.x = this.width/2 - buttonText.width/2;
	buttonText.position.y = (this.height/2 - buttonText.height/2);
	this.addChild(buttonText);

	this.on('mouseover', function(){
        this.gotoAndStop(1);
    });

    this.on('mouseout', function(){
        this.gotoAndStop(0);
    });

}

Button.constructor = Button;
Button.prototype = Object.create(PIXI.extras.MovieClip.prototype);