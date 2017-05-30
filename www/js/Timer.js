function Timer(stage, duration) {

	PIXI.Container.call(this);

	var _this = this,
		start = Date.now(),
        diff;
    
    _this.stage = stage;
    _this.width = 226;
    _this.height = 144;

    if(window.innerWidth>=768) { 
        _this.x = GAME_SIZE.DESKTOP.WIDTH/2 + 300;
    } else {
        _this.x = GAME_SIZE.MOBILE.WIDTH/2 + 300;
    }

    _this.ogDuration = duration;
    _this.minutes = 0;
    _this.seconds = 0; 
    _this.gameTimer = null;
    _this.duration = duration;
	_this.currentTime = "00:00";

    var texture = PIXI.Texture.fromFrame('timer-background.png');     
    var background = new PIXI.Sprite(texture);
    background.width = 226;
    background.height = 144;
    _this.addChild(background);
	
    _this.levelText = new PIXI.extras.BitmapText(gameTextObject.timer.levelText + " " + LEVEL, {
        font: '40px CrimsonText_Bold_Yellow',
        align: 'center'
    });
    _this.levelText.position.x = background.width/2 - _this.levelText.width/2;
    _this.levelText.position.y = 10;
    _this.addChild(_this.levelText);

    _this.levelSubText = new PIXI.extras.BitmapText(gameTextObject.timer.timerText, {
        font: '16px CrimsonText_SemiBold_Black',
        align: 'center'
    });
    _this.levelSubText.position.x = background.width/2 - _this.levelSubText.width/2;
    _this.levelSubText.position.y = _this.levelText.y + _this.levelText.height + 20;
    _this.addChild(_this.levelSubText);


    _this.timerText = new PIXI.extras.BitmapText(_this.currentTime, {
		font: '46px CrimsonText_Bold_Yellow',
		align: 'center'
	});
    _this.timerText.position.x = background.width/2 - _this.timerText.width/2;
    _this.timerText.position.y = _this.levelSubText.y + _this.levelSubText.height + 5;
    _this.addChild(_this.timerText);	

    _this.timer = function() {
        diff = _this.duration - (((Date.now() - start) / 1000) | 0);

        _this.minutes = (diff / 60) | 0;
        _this.seconds = (diff % 60) | 0;

        _this.minutes = _this.minutes < 10 ? "0" + _this.minutes : _this.minutes;
        _this.seconds = _this.seconds < 10 ? "0" + _this.seconds : _this.seconds;

        _this.timerText.text = _this.minutes + ":" + _this.seconds; 
		
        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }

    };
    // we don't want to wait a full second before the timer starts
    _this.timer();
    _this.gameTimer = setInterval(_this.timer, 1000);

}

Timer.constructor = Timer;
Timer.prototype = Object.create(PIXI.Container.prototype);

Timer.prototype.subtract = function(amount) {
    this.duration = this.duration - amount;
    this.seconds = this.seconds - amount;
    clearInterval(this.gameTimer);
    if(parseInt(this.minutes)<=0&&parseInt(this.seconds)<=0) {
        this.timerText.text = "00:00"; 
    } else {
        this.timer();
        this.gameTimer = setInterval(this.timer, 1000);    
    }
};

Timer.prototype.getMinutes = function() {
    return this.minutes;
};

Timer.prototype.getSeconds = function() {
    return this.seconds;
};

Timer.prototype.stopTimer = function() {
    clearInterval(this.gameTimer);
    this.duration = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.timerText.text = "00:00";     
};

Timer.prototype.restartTimer = function(seconds) {
    clearInterval(this.gameTimer);
    this.duration = seconds;
    this.timer();
    this.gameTimer = setInterval(this.timer, 1000);
};

Timer.prototype.destroy = function() {
    clearInterval(this.gameTimer);
    this.stage.removeChild(this);
};