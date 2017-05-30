var animationOffset = 1;
if(mobileAndTabletcheck()) {
      animationOffset = 0.5;
}

function Level1(stage) {

      PIXI.Container.call(this);

      this.delta = 0.5;
      this.previous = -800;
      this.time = 60;

      var _this = this;

      _this.id = 1;    
      _this.createElliot = function() {

            var hitbox = [
                  [325, 342],
                  [437, 300],
                  [465, 275],
                  [575, 261],
                  [664, 254],
                  [776, 251],
                  [802, 159],
                  [838, 134],
                  [890, 16],
                  [904, 67],
                  [978, 56],
                  [1017, 81],
                  [1062, 56],
                  [1035, 102],
                  [1058, 152],
                  [1059, 266],
                  [992, 364],
                  [967, 505],
                  [1003, 661],
                  [1032, 690],
                  [1078, 695],
                  [1085, 713],
                  [1030, 742],
                  [964, 724],
                  [923, 680],
                  [860, 541],
                  [755, 592],
                  [732, 692],
                  [790, 721],
                  [798, 739],
                  [748, 763],
                  [672, 753],
                  [653, 736],
                  [654, 692],
                  [635, 712],
                  [593, 717],
                  [541, 702],
                  [478, 605],
                  [473, 570],
                  [450, 552],
                  [351, 649],
                  [346, 640],
                  [365, 715],
                  [278, 714],
                  [273, 674],
                  [169, 697],
                  [88, 695],
                  [82, 665],
                  [106, 642],
                  [165, 621],
                  [165, 634],
                  [189, 635],
                  [266, 594],
                  [292, 561],
                  [302, 494],
                  [313, 511],
                  [321, 492],
                  [336, 505],
                  [360, 425],
                  [419, 371],
                  [233, 416],
                  [206, 407],
                  [221, 391],
                  [306, 376],
                  [257, 374],
                  [267, 369],
                  [362, 348],
                  [346, 342]
            ];
              
            var needleTexture_array = [
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00000.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00001.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00002.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00003.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00004.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00005.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00006.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00007.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00008.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00009.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00010.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00011.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00012.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00013.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00014.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00015.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00016.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00017.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00018.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00019.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00020.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00021.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00022.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00023.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00024.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00025.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00026.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00027.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00028.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00029.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00030.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00031.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00032.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00033.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00034.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00035.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00036.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00037.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00038.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00039.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00040.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00041.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00042.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00043.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00044.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00045.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00046.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00047.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00048.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00049.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00050.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00051.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00052.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00053.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00054.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00055.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00056.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00057.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00058.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00059.png")
            ];

            if(mobileAndTabletcheck()) {
                  var placeholder = [];
                  for (var i = 0; i <= needleTexture_array.length-1; i++) {
                        if(i%2===0) {
                              placeholder.push(needleTexture_array[i]);
                        }
                  }
                  needleTexture_array = placeholder;
            }

            if(mobileAndTabletcheck()) {
                  var placeholder = [];
                  for (var i = 0; i <= needleTexture_array.length-1; i++) {
                        if(i%2===0) {
                              placeholder.push(needleTexture_array[i]);
                        }
                  }
                  needleTexture_array = placeholder;
              }

            var needle = new PIXI.extras.MovieClip(needleTexture_array);
            needle.name = "needle";  
            needle.width  = 1200;
            needle.height = 768;
            needle.x = 0;
            needle.y = 0;
            needle.animationSpeed = (0.25 * animationOffset) * animationOffset;
            needle.alpha = 0.5;
            needle.play();

            var breathTexture_array = [
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00000.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00001.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00002.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00003.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00004.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00005.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00006.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00007.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00008.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00009.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00010.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00011.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00012.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00013.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00014.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00015.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00016.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00017.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00018.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00019.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00020.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00021.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00022.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00023.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00024.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00025.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00026.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00027.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00028.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00029.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00030.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00031.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00032.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00033.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00034.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00035.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00036.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00037.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00038.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00039.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00040.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00041.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00042.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00043.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00044.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00045.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00046.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00047.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00048.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00049.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00050.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00051.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00052.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00053.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00054.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00055.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00056.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00057.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00058.png"),
                  PIXI.Texture.fromFrame("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00059.png")
            ];

            if(mobileAndTabletcheck()) {
                  var placeholder = [];
                  for (var i = 0; i <= breathTexture_array.length-1; i++) {
                        if(i%2===0) {
                              placeholder.push(breathTexture_array[i]);
                        }
                  }
                  breathTexture_array = placeholder;
            }

            var breath = new PIXI.extras.MovieClip(breathTexture_array);
            breath.name = "breath";  
            breath.width  = 1200;
            breath.height = 768;
            breath.animationSpeed = 0.5 * animationOffset;
            breath.x = 0;
            breath.y = 0;
            breath.play();

            var elliot = new PIXI.Container();
            elliot.name = 'elliot';
            elliot.points = hitbox;

            var graphics = new PIXI.Graphics();
            graphics.beginFill(0xf1c40f); // Yellow
            graphics.drawPolygon(hitbox);
            graphics.endFill();


            elliot.addChild(needle);
            elliot.addChild(breath);
           // elliot.addChild(graphics);

            var num = Math.floor(Math.random()*1600) + 1; // this will get a number between 1 and 99;
            num *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases

            elliot.x = num;

            return elliot;

      } 

      var background = new Level1_Background(),
            midground = new Level1_Midground(),
            midanimation = new Level1_AnimationLayer(),
            foreground = new Level1_Foreground()
            elliot = _this.createElliot();   

      _this.addChild(background);
      _this.addChild(elliot);
      _this.addChild(midground);
      _this.addChild(midanimation);
      _this.addChild(foreground);

      _this.theme = new Howl({
            urls: ['../audio/PetesDragon_Loop_A.mp3'],
            volume: 0.5,
            loop: true
      }).play();
    
    currentAudio = _this.theme;

}

Level1.constructor = Level1;
Level1.prototype = Object.create(PIXI.Container.prototype);


Level1.prototype.moveLeft = function() {

    var background = this.children[0],
        needle = this.children[1],
        midground = this.children[2],
        animation = this.children[3],
        foreground = this.children[4];

   if(background.tilePosition.x!=0) {

        background.tilePosition.x = background.tilePosition.x + this.delta;
       needle.x = needle.x + (this.delta * 2);
        midground.tilePosition.x = midground.tilePosition.x + (this.delta * 2);
        animation.x = animation.x + (this.delta * 2);
        foreground.tilePosition.x = foreground.tilePosition.x + (this.delta * 3.125);

        $( "#slider" ).slider( "option", "value", $( "#slider" ).slider( "option", "value") - this.delta);

   }
};

Level1.prototype.moveLeftFromSlider = function(value) {

    var containerWidth = $('#game-container').width(),
    newWidth = 3200 * ratio,
    sideWidth = (newWidth - containerWidth)/2,
    stepLimit = sideWidth/this.delta - 1;

    var background = this.children[0],
        needle = this.children[1],  
        midground = this.children[2],
        animation = this.children[3],
        foreground = this.children[4];

   if(background.tilePosition.x!=0) {
          
        this.previous = background.tilePosition.x;
        var steps = Math.abs(this.previous) - value;
       
        background.tilePosition.x = -(value);
      needle.x = needle.x + ((this.delta * 2)  * steps);
        midground.tilePosition.x = midground.tilePosition.x + ((this.delta * 2)  * steps);     
        animation.x = animation.x + ((this.delta * 2)  * steps);
        foreground.tilePosition.x = foreground.tilePosition.x + ((this.delta * 3.125)  * steps);

   }

};

Level1.prototype.moveRight = function() {

    var background = this.children[0],
        needle = this.children[1],
        midground = this.children[2],
        animation = this.children[3],
        foreground = this.children[4];

   if(background.tilePosition.x!=-(background.width/2)) {

        background.tilePosition.x = background.tilePosition.x - this.delta;
      needle.x = needle.x  - (this.delta * 2);
        midground.tilePosition.x = midground.tilePosition.x - (this.delta * 2);
        animation.x = animation.x  - (this.delta * 2);
        foreground.tilePosition.x = foreground.tilePosition.x - (this.delta * 3.125);
        
        $( "#slider" ).slider( "option", "value", $( "#slider" ).slider( "option", "value") + this.delta);

   }   

};

Level1.prototype.moveRightFromSlider = function(value) {
   
    var containerWidth = $('#game-container').width(),
    newWidth = 3200 * ratio,
    sideWidth = (newWidth - containerWidth)/2,
    stepLimit = sideWidth/this.delta - 1;

    var background = this.children[0],
        needle = this.children[1],
        midground = this.children[2],
        animation = this.children[3],
        foreground = this.children[4];

   if(background.tilePosition.x!=-(background.width/2)) {

        this.previous = background.tilePosition.x;
        var steps = Math.abs(this.previous) - value;

      background.tilePosition.x = -(value);
      needle.x = needle.x + ((this.delta * 2)  * steps);
      midground.tilePosition.x = midground.tilePosition.x + ((this.delta * 2)  * steps);     
      animation.x = animation.x + ((this.delta * 2)  * steps);
      foreground.tilePosition.x = foreground.tilePosition.x + ((this.delta * 3.125)  * steps);  

   }

};

Level1.prototype.destroyAll = function() {

      // needleTexture_array
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00000.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00001.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00002.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00003.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00004.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00005.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00006.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00007.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00008.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00009.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00010.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00011.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00012.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00013.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00014.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00015.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00016.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00017.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00018.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00019.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00020.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00021.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00022.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00023.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00024.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00025.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00026.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00027.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00028.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00029.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00030.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00031.png");
      
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00032.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00033.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00034.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00035.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00036.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00037.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00038.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00039.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00040.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00041.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00042.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00043.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00044.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00045.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00046.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00047.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00048.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00049.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00050.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00051.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00052.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00053.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00054.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00055.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00056.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00057.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00058.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00059.png");


      // breathTexture_array
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00000.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00001.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00002.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00003.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00004.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00005.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00006.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00007.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00008.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00009.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00010.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00011.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00012.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00013.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00014.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00015.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00016.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00017.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00018.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00019.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00020.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00021.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00022.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00023.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00024.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00025.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00026.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00027.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00028.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00029.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00030.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00031.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00032.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00033.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00034.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00035.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00036.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00037.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00038.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00039.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00040.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00041.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00042.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00043.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00044.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00045.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00046.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00047.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00048.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00049.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00050.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00051.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00052.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00053.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00054.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00055.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00056.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00057.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00058.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/breath/Forest_A_Animated_Breath_00059.png");

      // leafTexture_array
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00000.png"),
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00001.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00002.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00003.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00004.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00005.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00006.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00007.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00008.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00009.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00010.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00011.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00012.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00013.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00014.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00015.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00016.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00017.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00018.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00019.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00020.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00021.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00022.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00023.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00024.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00025.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00026.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00027.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00028.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00029.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00030.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00031.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00032.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00033.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00034.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00035.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00036.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00037.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00038.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00039.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00040.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00041.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00042.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00043.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00044.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00045.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00046.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00047.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00048.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00049.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00050.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00051.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00052.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00053.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00054.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00055.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00056.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00057.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00058.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00059.png");
      
      // leavesTexture_array
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00000.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00001.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00002.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00003.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00004.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00005.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00006.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00007.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00008.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00009.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00010.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00011.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00012.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00013.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00014.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00015.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00016.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00017.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00018.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00019.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00020.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00021.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00022.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00023.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00024.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00025.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00026.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00027.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00028.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00029.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00030.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00031.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00032.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00033.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00034.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00035.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00036.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00037.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00038.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00039.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00040.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00041.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00042.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00043.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00044.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00045.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00046.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00047.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00048.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00049.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00050.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00051.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00052.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00053.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00054.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00055.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00056.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00057.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00058.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00059.png");

      // plantTexture_array
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00000.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00001.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00002.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00003.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00004.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00005.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00006.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00007.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00008.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00009.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00010.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00011.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00012.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00013.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00014.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00015.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00016.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00017.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00018.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00019.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00020.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00021.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00022.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00023.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00024.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00025.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00026.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00027.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00028.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00029.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00030.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00031.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00032.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00033.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00034.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00035.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00036.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00037.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00038.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00039.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00040.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00041.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00042.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00043.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00044.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00045.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00046.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00047.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00048.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00049.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00050.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00051.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00052.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00053.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00054.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00055.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00056.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00057.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00058.png");
      PIXI.Texture.removeTextureFromCache("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00059.png");

      this.destroy();

};

Level1.prototype.removeElliot = function() {
    var _this = this;
    if(_this&&_this.children) {
        $.each(_this.children, function(){
            if(this.name=='elliot') {
                _this.removeChild(this);
            }
        });
    }
};

Level1.prototype.restart = function() {
    $( "#slider" ).slider( "option", "value", 1600/2);
    $('#slider').slider( "option", "disabled", false );
    var elliot = this.createElliot();
    this.addChildAt(elliot, 1)

};

function Level1_Foreground() {

    var texture = PIXI.Texture.fromFrame('../images/game/levels/level1/background/Disney_Pete_Forest_A_Front.png');     
    PIXI.extras.TilingSprite.call(this, texture, texture.width, texture.height);

    this.tilePosition.x = 1600/2 - 3200/2;
    this.tilePosition.y = 0;

}

Level1_Foreground.constructor = Level1_Foreground;
Level1_Foreground.prototype = Object.create(PIXI.extras.TilingSprite.prototype);

function Level1_Midground() {

    var texture = PIXI.Texture.fromFrame('../images/game/levels/level1/background/Disney_Pete_Forest_A_Mid.png');     
    PIXI.extras.TilingSprite.call(this, texture, 3200, 768);

    this.tilePosition.x = 1600/2 - 3200/2;
    this.tilePosition.y = 0;

}

Level1_Midground.constructor = Level1_Midground;
Level1_Midground.prototype = Object.create(PIXI.extras.TilingSprite.prototype);


function Level1_Background() {

    var texture = PIXI.Texture.fromFrame('../images/game/levels/level1/background/Disney_Pete_Forest_A_Back.jpg');     
    PIXI.extras.TilingSprite.call(this, texture, 3200, 768);

    this.tilePosition.x = 1600/2 - 3200/2;
    this.tilePosition.y = 0;
    
}

Level1_Background.constructor = Level1_Background;
Level1_Background.prototype = Object.create(PIXI.extras.TilingSprite.prototype);

function Level1_AnimationLayer(stage) {

    PIXI.Container.call(this);

    var _this = this;
    var leafTexture_array = [
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00000.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00001.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00002.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00003.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00004.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00005.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00006.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00007.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00008.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00009.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00010.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00011.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00012.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00013.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00014.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00015.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00016.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00017.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00018.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00019.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00020.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00021.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00022.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00023.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00024.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00025.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00026.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00027.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00028.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00029.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00030.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00031.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00032.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00033.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00034.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00035.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00036.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00037.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00038.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00039.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00040.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00041.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00042.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00043.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00044.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00045.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00046.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00047.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00048.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00049.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00050.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00051.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00052.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00053.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00054.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00055.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00056.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00057.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00058.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00059.png")
    ];

      if(mobileAndTabletcheck()) {
            var placeholder = [];
            for (var i = 0; i <= leafTexture_array.length-1; i++) {
                  if(i%2===0) {
                        placeholder.push(leafTexture_array[i]);
                  }
            }
            leafTexture_array = placeholder;
      }
    
    var leaf = new PIXI.extras.MovieClip(leafTexture_array);
    leaf.x = 135;
    leaf.y = 0;
    leaf.animationSpeed = 0.75 * animationOffset;
    leaf.cacheAsBitmapboolean = true;

      if(!mobileAndTabletcheck()) {
          leaf.play();

      }
   
    var leavesTexture_array = [
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00000.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00001.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00002.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00003.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00004.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00005.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00006.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00007.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00008.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00009.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00010.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00011.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00012.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00013.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00014.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00015.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00016.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00017.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00018.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00019.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00020.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00021.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00022.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00023.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00024.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00025.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00026.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00027.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00028.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00029.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00030.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00031.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00032.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00033.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00034.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00035.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00036.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00037.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00038.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00039.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00040.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00041.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00042.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00043.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00044.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00045.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00046.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00047.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00048.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00049.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00050.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00051.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00052.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00053.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00054.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00055.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00056.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00057.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00058.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00059.png")
    ];

    if(mobileAndTabletcheck()) {
            var placeholder = [];
            for (var i = 0; i <= leavesTexture_array.length-1; i++) {
                  if(i%2===0) {
                        placeholder.push(leavesTexture_array[i]);
                  }
            }
            leavesTexture_array = placeholder;
      }

    var leaves = new PIXI.extras.MovieClip(leavesTexture_array);
    leaves.x = 1115;
    leaves.y = 0;
    leaves.animationSpeed = 0.75  * animationOffset;
    leaves.cacheAsBitmapboolean = true;

    if(!mobileAndTabletcheck()) {
          leaves.play();

      }
    

    var plantTexture_array = [
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00000.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00001.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00002.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00003.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00004.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00005.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00006.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00007.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00008.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00009.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00010.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00011.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00012.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00013.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00014.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00015.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00016.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00017.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00018.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00019.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00020.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00021.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00022.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00023.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00024.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00025.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00026.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00027.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00028.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00029.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00030.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00031.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00032.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00033.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00034.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00035.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00036.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00037.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00038.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00039.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00040.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00041.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00042.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00043.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00044.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00045.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00046.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00047.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00048.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00049.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00050.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00051.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00052.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00053.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00054.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00055.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00056.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00057.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00058.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00059.png")
    ];

     
    var plant = new PIXI.extras.MovieClip(plantTexture_array);
    plant.x = 1863;
    plant.y = 0
    plant.animationSpeed = 0.75  * animationOffset;
    plant.cacheAsBitmapboolean = true;
     if(!mobileAndTabletcheck()) {
            plant.play();

      }
    

    _this.x = 1600/2 - 3200/2;
    _this.y = 0;
    
    _this.addChild(leaf);
    _this.addChild(leaves);
    _this.addChild(plant);

}

Level1_AnimationLayer.constructor = Level1_AnimationLayer;
Level1_AnimationLayer.prototype = Object.create(PIXI.Container.prototype);