var animationOffset = 1;
if(mobileAndTabletcheck()) {
      animationOffset = 0.5;
}

function Level3(stage) {

    PIXI.Container.call(this);
    
    this.delta = .5;
    this.previous = -800;
    this.time = 50;

    var _this = this;

    _this.id = 3;    
    _this.createElliot = function() {
        
        var hitbox = [
            [1200, 676],
             [1192, 695],
             [1161, 704],
             [1090, 689],
             [1093, 669],
             [1153, 613],
             [1161, 535],
             [1071, 568],
             [960, 547],
             [933, 565],
             [935, 607],
             [911, 677],
             [860, 697],
             [816, 694],
             [789, 727],
             [712, 737],
             [680, 717],
             [671, 691],
             [764, 637],
             [818, 500],
             [777, 472],
             [678, 296],
             [623, 248],
             [561, 234],
             [420, 295],
             [405, 282],
             [387, 196],
             [430, 168],
             [479, 106],
             [608, 78],
             [612, 91],
             [654, 89],
             [730, 120],
             [856, 227],
             [912, 221],
             [1200, 267],
        ];

        var needleTexture_array = [
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00000.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00001.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00002.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00003.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00004.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00005.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00006.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00007.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00008.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00009.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00010.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00011.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00012.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00013.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00014.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00015.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00016.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00017.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00018.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00019.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00020.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00021.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00022.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00023.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00024.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00025.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00026.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00027.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00028.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00029.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00030.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00031.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00032.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00033.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00034.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00035.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00036.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00037.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00038.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00039.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00040.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00041.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00042.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00043.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00044.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00045.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00046.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00047.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00048.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00049.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00050.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00051.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00052.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00053.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00054.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00055.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00056.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00057.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00058.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00059.png")
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
        needle.alpha = 0.5;
        needle.animationSpeed = (0.25 * animationOffset) * animationOffset;
        needle.play();

        var breathTexture_array = [
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00000.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00001.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00002.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00003.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00004.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00005.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00006.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00007.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00008.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00009.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00010.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00011.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00012.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00013.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00014.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00015.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00016.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00017.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00018.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00019.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00020.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00021.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00022.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00023.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00024.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00025.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00026.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00027.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00028.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00029.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00030.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00031.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00032.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00033.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00034.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00035.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00036.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00037.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00038.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00039.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00040.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00041.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00042.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00043.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00044.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00045.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00046.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00047.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00048.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00049.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00050.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00051.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00052.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00053.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00054.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00055.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00056.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00057.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00058.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00059.png")
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
        breath.x = 0;
        breath.y = 0;
        breath.animationSpeed = 0.5 * animationOffset;
        breath.play();

        var elliot = new PIXI.Container();
        elliot.name = 'elliot';

        var num = Math.floor(Math.random()*1600) + 1; // this will get a number between 1 and 99;
        num *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases


        elliot.x = num;
        elliot.addChild(needle);
        elliot.addChild(breath);

        elliot.points = hitbox;
        var graphics = new PIXI.Graphics();
        graphics.beginFill(0xf1c40f); // Yellow
        graphics.drawPolygon(hitbox);
        graphics.endFill();
        elliot.addChild(graphics);

        return elliot;

    }

    var background = new Level3_Background(),
        midbackground = new Level3_MidBack(),
        midfrontground = new Level3_MidFront(),
        backanimation = new Level3_Back_AnimationLayer(),
        midfrontanimation = new Level3_Mid_AnimationLayer(),
        foreground = new Level3_Foreground(),
        elliot = _this.createElliot();

    _this.addChild(background);
    _this.addChild(backanimation);
    _this.addChild(elliot);
    _this.addChild(midbackground);
    _this.addChild(midfrontground);
    _this.addChild(midfrontanimation);
    _this.addChild(foreground);

    _this.theme = new Howl({
        urls: ['../audio/PetesDragon_Loop_C.mp3'],
        volume: 0.5,
        loop: true
    }).play();
    currentAudio = _this.theme;

}

Level3.constructor = Level3;
Level3.prototype = Object.create(PIXI.Container.prototype);

Level3.prototype.destroyAll = function() {

    // needleTexture_array
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00000.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00002.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00004.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00006.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00008.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00010.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00012.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00013.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00014.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00015.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00016.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00017.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00018.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00019.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00020.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00021.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00022.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00023.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00024.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00025.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00026.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00027.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00028.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00029.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00030.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00031.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00032.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00033.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00034.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00035.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00036.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00037.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00038.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00039.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00040.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00041.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00042.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00043.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00044.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00045.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00046.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00047.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00048.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00049.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00050.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00051.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00052.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00053.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00054.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00055.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00056.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00057.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00058.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00059.png");

    // breathTexture_array
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00000.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00001.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00002.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00003.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00004.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00005.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00006.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00007.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00008.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00009.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00010.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00011.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00012.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00013.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00014.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00015.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00016.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00017.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00018.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00019.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00020.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00021.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00022.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00023.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00024.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00025.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00026.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00027.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00028.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00029.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00030.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00031.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00032.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00033.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00034.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00035.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00036.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00037.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00038.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00039.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00040.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00041.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00042.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00043.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00044.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00045.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00046.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00047.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00048.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00049.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00050.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00051.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00052.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00053.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00054.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00055.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00056.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00057.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00058.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/breath/Forest_C_Animated_Breath_00059.png");

    // plantTexture_array
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00000.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00001.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00002.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00003.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00004.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00005.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00006.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00007.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00008.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00009.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00010.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00011.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00012.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00013.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00014.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00015.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00016.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00017.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00018.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00019.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00020.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00021.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00022.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00023.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00024.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00025.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00026.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00027.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00028.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00029.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00030.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00031.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00032.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00033.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00034.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00035.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00036.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00037.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00038.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00039.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00040.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00041.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00042.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00043.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00044.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00045.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00046.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00047.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00048.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00049.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00050.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00051.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00052.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00053.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00054.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00055.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00056.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00057.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00058.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00059.png");

    // overhangTexture_array
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00000.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00001.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00002.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00003.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00004.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00005.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00006.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00007.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00008.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00009.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00010.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00011.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00012.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00013.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00014.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00015.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00016.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00017.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00018.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00019.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00020.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00021.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00022.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00023.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00024.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00025.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00026.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00027.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00028.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00029.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00030.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00031.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00032.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00033.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00034.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00035.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00036.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00037.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00038.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00039.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00040.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00041.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00042.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00043.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00044.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00045.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00046.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00047.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00048.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00049.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00050.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00051.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00052.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00053.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00054.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00055.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00056.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00057.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00058.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00059.png");

    // plantTexture_array
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00000.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00001.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00002.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00003.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00004.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00005.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00006.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00007.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00008.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00009.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00010.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00011.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00012.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00013.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00014.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00015.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00016.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00017.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00018.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00019.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00020.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00021.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00022.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00023.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00024.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00025.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00026.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00027.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00028.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00029.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00030.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00031.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00032.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00033.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00034.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00035.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00036.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00037.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00038.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00039.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00040.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00041.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00042.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00043.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00044.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00045.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00046.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00047.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00048.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00049.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00050.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00051.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00052.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00053.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00054.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00055.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00056.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00057.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00058.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00059.png");

};

Level3.prototype.moveLeft = function() {

    var background = this.children[0],
        backanimation = this.children[1],
        needle = this.children[2],
        midback = this.children[3],
        midfront= this.children[4],
        midanimation = this.children[5],
        foreground = this.children[6];

    if(background.tilePosition.x!=0) {

        background.tilePosition.x = background.tilePosition.x + this.delta;
        needle.x = needle.x + this.delta;
        backanimation.x = backanimation.x + this.delta;
        midback.tilePosition.x = midback.tilePosition.x  + (this.delta * 2);
        midfront.tilePosition.x = midfront.tilePosition.x  + (this.delta * 2);
        midanimation.x = midanimation.x  + (this.delta * 2);
        foreground.tilePosition.x = foreground.tilePosition.x  + (this.delta * 3.125);

   }

};

Level3.prototype.moveLeftFromSlider = function(value) {

    var background = this.children[0],
        backanimation = this.children[1],
        needle = this.children[2],
        midback = this.children[3],
        midfront= this.children[4],
        midanimation = this.children[5],
        foreground = this.children[6];
  
    if(background.tilePosition.x!=0) {

        this.previous = background.tilePosition.x;
        var steps = Math.abs(this.previous) - value;
       
        background.tilePosition.x = -(value);
        needle.x = -(value);
        backanimation.x = -(value);
        midback.tilePosition.x = midback.tilePosition.x  + ((this.delta * 2) * steps);
        midfront.tilePosition.x = midfront.tilePosition.x  + ((this.delta * 2)* steps);
        midanimation.x = midanimation.x  + ((this.delta * 2)* steps);
        foreground.tilePosition.x = foreground.tilePosition.x  + ((this.delta * 3.125) * steps);

   }

};

Level3.prototype.moveRight = function() {

    var background = this.children[0],
        backanimation = this.children[1],
        needle = this.children[2],
        midback = this.children[3],
        midfront= this.children[4],
        midanimation = this.children[5],
        foreground = this.children[6];

   if(background.tilePosition.x!=-(background.width/2)) {
            
        background.tilePosition.x = background.tilePosition.x - this.delta;
        needle.x = needle.x - this.delta;
        backanimation.x = backanimation.x - this.delta;
        midback.tilePosition.x = midback.tilePosition.x - (this.delta * 2);
        midfront.tilePosition.x = midfront.tilePosition.x - (this.delta * 2);
        midanimation.x = midanimation.x - (this.delta * 2);
        foreground.tilePosition.x = foreground.tilePosition.x - (this.delta * 3.125);

   }

};

Level3.prototype.moveRightFromSlider = function(value) {

    var background = this.children[0],
        backanimation = this.children[1],
        needle = this.children[2],
        midback = this.children[3],
        midfront= this.children[4],
        midanimation = this.children[5],
        foreground = this.children[6];

   if(background.tilePosition.x!=-(background.width/2)) {
          
        this.previous = background.tilePosition.x;
        var steps = Math.abs(this.previous) - value;
       
        background.tilePosition.x = -(value);
        needle.x = -(value);
        backanimation.x = -(value);
        midback.tilePosition.x = midback.tilePosition.x  + ((this.delta * 2) * steps);
        midfront.tilePosition.x = midfront.tilePosition.x  + ((this.delta * 2)* steps);
        midanimation.x = midanimation.x  + ((this.delta * 2)* steps);
        foreground.tilePosition.x = foreground.tilePosition.x  + ((this.delta * 3.125) * steps);

   }

};


Level3.prototype.removeElliot = function() {
    var _this = this;
    if(_this&&_this.children) {
        $.each(_this.children, function(){
            if(this.name=='elliot') {
                _this.removeChild(this);
            }
        });
    }
};

Level3.prototype.restart = function() {

    $('#slider').slider( "option", "disabled", false );
    var elliot = this.createElliot();
    this.addChildAt(elliot, 1)

};

function Level3_Foreground() {

    var texture = PIXI.Texture.fromFrame('../images/game/levels/level3/background/Disney_Pete_Forest_C_Front.png');     
    PIXI.extras.TilingSprite.call(this, texture, texture.width, texture.height);

    this.tilePosition.x = 1600/2 - 3200/2;
    this.tilePosition.y = 0;

}

Level3_Foreground.constructor = Level3_Foreground;
Level3_Foreground.prototype = Object.create(PIXI.extras.TilingSprite.prototype);

function Level3_MidBack() {

    var texture = PIXI.Texture.fromFrame('../images/game/levels/level3/background/Disney_Pete_Forest_C_MidBack.png');     
    PIXI.extras.TilingSprite.call(this, texture, 3200, 768);

    this.tilePosition.x = 1600/2 - 3200/2;
    this.tilePosition.y = 0;

}

Level3_MidBack.constructor = Level3_MidBack;
Level3_MidBack.prototype = Object.create(PIXI.extras.TilingSprite.prototype);


function Level3_MidFront() {

    var texture = PIXI.Texture.fromFrame('../images/game/levels/level3/background/Disney_Pete_Forest_C_MidFront.png');     
    PIXI.extras.TilingSprite.call(this, texture, 3200, 768);

    this.tilePosition.x = 1600/2 - 3200/2;
    this.tilePosition.y = 0;

}

Level3_MidFront.constructor = Level3_MidFront;
Level3_MidFront.prototype = Object.create(PIXI.extras.TilingSprite.prototype);


function Level3_Background() {

    var texture = PIXI.Texture.fromFrame('../images/game/levels/level3/background/Disney_Pete_Forest_C_Back.jpg');     
    PIXI.extras.TilingSprite.call(this, texture, 3200, 768);

    this.tilePosition.x = 1600/2 - 3200/2;
    this.tilePosition.y = 0;
    
}

Level3_Background.constructor = Level3_Background;
Level3_Background.prototype = Object.create(PIXI.extras.TilingSprite.prototype);


function Level3_Mid_AnimationLayer(stage)   {

    PIXI.Container.call(this);

        var _this = this;
        var plantTexture_array = [
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00000.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00001.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00002.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00003.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00004.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00005.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00006.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00007.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00008.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00009.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00010.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00011.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00012.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00013.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00014.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00015.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00016.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00017.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00018.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00019.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00020.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00021.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00022.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00023.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00024.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00025.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00026.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00027.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00028.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00029.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00030.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00031.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00032.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00033.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00034.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00035.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00036.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00037.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00038.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00039.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00040.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00041.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00042.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00043.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00044.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00045.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00046.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00047.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00048.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00049.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00050.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00051.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00052.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00053.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00054.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00055.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00056.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00057.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00058.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00059.png")
        ];

        var plant = new PIXI.extras.MovieClip(plantTexture_array);
        plant.x = 0;
        plant.y = 0;
        plant.animationSpeed = 0.75 * animationOffset;       
        if(!mobileAndTabletcheck()) {
            plant.play();
        }
        _this.x = 1600/2 - 3200/2;
        _this.y = 0;

       

        var overhangTexture_array = [
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00000.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00001.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00002.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00003.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00004.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00005.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00006.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00007.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00008.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00009.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00010.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00011.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00012.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00013.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00014.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00015.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00016.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00017.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00018.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00019.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00020.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00021.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00022.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00023.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00024.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00025.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00026.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00027.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00028.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00029.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00030.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00031.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00032.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00033.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00034.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00035.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00036.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00037.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00038.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00039.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00040.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00041.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00042.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00043.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00044.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00045.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00046.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00047.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00048.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00049.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00050.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00051.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00052.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00053.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00054.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00055.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00056.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00057.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00058.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00059.png")
        ];
        
        var overhang = new PIXI.extras.MovieClip(overhangTexture_array);
        overhang.x = 0;
        overhang.y = 0;
        overhang.animationSpeed = 0.75 * animationOffset;
        if(!mobileAndTabletcheck()) {
            overhang.play();
        }
        _this.x = 1600/2 - 3200/2;
        _this.y = 0;


        _this.addChild(plant);
        _this.addChild(overhang);

}

Level3_Mid_AnimationLayer.constructor = Level3_Mid_AnimationLayer;
Level3_Mid_AnimationLayer.prototype = Object.create(PIXI.Container.prototype);

function Level3_Back_AnimationLayer(stage)   {
  
    PIXI.Container.call(this);
    
    
        var _this = this;
        var plantTexture_array = [
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00000.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00001.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00002.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00003.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00004.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00005.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00006.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00007.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00008.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00009.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00010.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00011.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00012.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00013.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00014.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00015.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00016.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00017.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00018.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00019.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00020.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00021.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00022.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00023.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00024.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00025.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00026.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00027.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00028.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00029.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00030.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00031.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00032.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00033.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00034.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00035.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00036.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00037.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00038.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00039.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00040.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00041.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00042.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00043.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00044.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00045.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00046.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00047.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00048.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00049.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00050.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00051.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00052.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00053.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00054.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00055.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00056.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00057.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00058.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00059.png")
        ];

        var plant = new PIXI.extras.MovieClip(plantTexture_array);
        plant.x = 0;
        plant.y = 0;
        plant.animationSpeed = 0.75 * animationOffset;
        
        if(!mobileAndTabletcheck()) {
            plant.play();
        }
        
        _this.x = 1600/2 - 3200/2;
        _this.y = 0;

        _this.addChild(plant);

}

Level3_Back_AnimationLayer.constructor = Level3_Back_AnimationLayer;
Level3_Back_AnimationLayer.prototype = Object.create(PIXI.Container.prototype);