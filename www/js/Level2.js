var animationOffset = 1;
if(mobileAndTabletcheck()) {
      animationOffset = 0.5;
}

function Level2(stage) {

    PIXI.Container.call(this);
    
    this.delta = 0.5;
    this.previous = -800;
    this.time = 60;

    var _this = this;

    _this.id = 2;    
    _this.createElliot = function() {
        
        var hitbox = [
            [797, 0],
             [797, 201],
             [778, 179],
             [766, 202],
             [770, 174],
             [748, 177],
             [747, 157],
             [723, 176],
             [667, 178],
             [655, 199],
             [653, 189],
             [626, 206],
             [601, 192],
             [573, 221],
             [567, 211],
             [523, 228],
             [516, 251],
             [493, 253],
             [497, 274],
             [467, 277],
             [338, 402],
             [269, 435],
             [218, 405],
             [174, 269],
             [235, 188],
             [214, 162],
             [209, 107],
             [222, 136],
             [223, 112],
             [232, 131],
             [281, 70],
             [258, 60],
             [297, 56],
             [315, 8],
             [329, 40],
             [352, 0],
             [366, 14],
             [363, 4],
             [388, 0],
        ];

        var needleTexture_array = [
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00000.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00001.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00002.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00003.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00004.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00005.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00006.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00007.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00008.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00009.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00010.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00011.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00012.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00013.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00014.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00015.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00016.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00017.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00018.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00019.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00020.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00021.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00022.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00023.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00024.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00025.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00026.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00027.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00028.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00029.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00030.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00031.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00032.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00033.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00034.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00035.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00036.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00037.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00038.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00039.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00040.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00041.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00042.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00043.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00044.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00045.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00046.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00047.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00048.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00049.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00050.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00051.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00052.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00053.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00054.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00055.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00056.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00057.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00058.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00059.png")
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
        needle.width  = 1000;
        needle.height = 768;
        needle.x = 0;
        needle.y = 0;;
        needle.animationSpeed = (0.25 * animationOffset) * animationOffset;
        needle.alpha = 0.5;
        needle.play();

        var breathTexture_array = [
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00000.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00001.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00002.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00003.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00004.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00005.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00006.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00007.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00008.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00009.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00010.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00011.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00012.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00013.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00014.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00015.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00016.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00017.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00018.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00019.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00020.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00021.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00022.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00023.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00024.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00025.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00026.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00027.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00028.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00029.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00030.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00031.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00032.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00033.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00034.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00035.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00036.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00037.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00038.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00039.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00040.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00041.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00042.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00043.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00044.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00045.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00046.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00047.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00048.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00049.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00050.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00051.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00052.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00053.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00054.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00055.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00056.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00057.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00058.png"),
            PIXI.Texture.fromFrame("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00059.png")
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
        breath.width  = 1000;
        breath.height = 768;
        breath.x = 0;
        breath.y = 0;
        breath.animationSpeed = 0.5 * animationOffset;
        breath.play();

        var elliotPlacement = [
            -600,
            900
         ];

        var elliot = new PIXI.Container();
        elliot.name = 'elliot';
        elliot.x = elliotPlacement[Math.floor(Math.random() * elliotPlacement.length)];;
        elliot.addChild(needle);
        elliot.points = hitbox;
        elliot.addChild(breath);

        var graphics = new PIXI.Graphics();
        graphics.beginFill(0xf1c40f); // Yellow
        graphics.drawPolygon(hitbox);
        graphics.endFill();
       // elliot.addChild(graphics);
        
        return elliot;

    }

    var background = new Level2_Background(),
        midground = new Level2_Midground(),
        midanimation = new Level2_Mid_AnimationLayer(),
        frontanimation = new Level2_Front_AnimationLayer(),
        foreground = new Level2_Foreground()
        elliot = _this.createElliot();

    _this.addChild(background);
    _this.addChild(elliot);
    _this.addChild(midground);
    _this.addChild(midanimation);
    _this.addChild(foreground);
    _this.addChild(frontanimation);
    
    _this.theme = new Howl({
        urls: ['../audio/PetesDragon_Loop_B.mp3'],
        volume: 0.5,
        loop: true
    }).play();
    currentAudio = _this.theme;

}

Level2.constructor = Level2;
Level2.prototype = Object.create(PIXI.Container.prototype);

Level2.prototype.destroyAll = function(){

    // needleTexture_array
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00000.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00001.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00002.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00003.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00004.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00005.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00006.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00007.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00008.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00009.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00010.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00011.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00012.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00013.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00014.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00015.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00016.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00017.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00018.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00019.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00020.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00021.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00022.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00023.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00024.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00025.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00026.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00027.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00028.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00029.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00030.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00031.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00032.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00033.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00034.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00035.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00036.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00037.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00038.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00039.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00040.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00041.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00042.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00043.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00044.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00045.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00046.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00047.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00048.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00049.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00050.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00051.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00052.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00053.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00054.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00055.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00056.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00057.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00058.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00059.png");

    // breathTexture_array
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00000.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00001.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00002.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00003.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00004.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00005.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00006.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00007.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00008.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00009.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00010.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00011.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00012.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00013.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00014.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00015.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00016.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00017.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00018.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00019.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00020.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00021.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00022.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00023.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00024.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00025.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00026.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00027.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00028.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00029.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00030.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00031.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00032.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00033.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00034.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00035.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00036.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00037.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00038.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00039.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00040.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00041.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00042.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00043.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00044.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00045.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00046.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00047.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00048.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00049.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00050.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00051.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00052.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00053.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00054.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00055.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00056.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00057.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00058.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/breath/Forest_B_Animated_Breath_00059.png");

    //swayingTexture_array
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00000.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00001.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00002.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00003.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00004.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00005.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00006.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00007.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00008.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00009.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00010.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00011.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00012.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00013.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00014.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00015.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00016.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00017.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00018.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00019.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00020.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00021.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00022.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00023.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00024.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00025.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00026.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00027.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00028.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00029.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00030.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00031.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00032.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00033.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00034.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00035.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00036.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00037.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00038.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00039.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00040.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00041.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00042.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00043.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00044.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00045.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00046.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00047.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00048.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00049.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00050.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00051.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00052.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00053.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00054.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00055.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00056.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00057.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00058.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00059.png");

    // overhangTexture_array
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00000.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00001.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00002.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00003.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00004.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00005.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00006.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00007.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00008.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00009.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00010.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00011.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00012.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00013.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00014.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00015.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00016.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00017.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00018.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00019.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00020.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00021.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00022.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00023.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00024.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00025.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00026.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00027.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00028.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00029.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00030.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00031.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00032.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00033.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00034.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00035.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00036.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00037.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00038.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00039.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00040.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00041.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00042.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00043.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00044.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00045.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00046.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00047.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00048.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00049.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00050.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00051.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00052.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00053.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00054.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00055.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00056.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00057.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00058.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00059.png");

    //  sticksTexture_array
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00000.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00001.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00002.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00003.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00004.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00005.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00006.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00007.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00008.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00009.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00010.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00011.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00012.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00013.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00014.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00015.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00016.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00017.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00018.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00019.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00020.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00021.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00022.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00023.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00024.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00025.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00026.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00027.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00028.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00029.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00030.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00031.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00032.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00033.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00034.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00035.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00036.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00037.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00038.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00039.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00040.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00041.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00042.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00043.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00044.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00045.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00046.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00047.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00048.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00049.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00050.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00051.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00052.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00053.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00054.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00055.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00056.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00057.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00058.png");
    PIXI.Texture.removeTextureFromCache("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00059.png");

    this.destroy();

};

Level2.prototype.moveLeft = function() {

    var background = this.children[0],
        needle = this.children[1],
        midground = this.children[2],
        midanimation = this.children[3],
        foreground = this.children[4],
        frontanimation = this.children[5];

   if(background.tilePosition.x!=0) {

        background.tilePosition.x = background.tilePosition.x + this.delta;
        needle.x = needle.x + (this.delta * 2);
        midground.tilePosition.x = midground.tilePosition.x + (this.delta * 2);
        midanimation.x = midanimation.x + (this.delta * 2);
        frontanimation.x = frontanimation.x + (this.delta * 3.125);
        foreground.tilePosition.x = foreground.tilePosition.x + (this.delta * 3.125);

        $( "#slider" ).slider( "option", "value", $( "#slider" ).slider( "option", "value") - this.delta);

   }

};

Level2.prototype.moveLeftFromSlider = function(value) {

    var background = this.children[0],
        needle = this.children[1],
        midground = this.children[2],
        midanimation = this.children[3],
        foreground = this.children[4],
        frontanimation = this.children[5];

   if(background.tilePosition.x!=0) {
          
        this.previous = background.tilePosition.x;
        var steps = Math.abs(this.previous) - value;
       
        background.tilePosition.x = -(value);
        needle.x = needle.x + ((this.delta * 2)  * steps);
        midground.tilePosition.x = midground.tilePosition.x + ((this.delta * 2)  * steps);
        midanimation.x = midanimation.x + ((this.delta * 2)  * steps);
        frontanimation.x = frontanimation.x + ((this.delta * 3.125)  * steps);
        foreground.tilePosition.x = foreground.tilePosition.x + ((this.delta * 3.125)  * steps);
    
    }

};

Level2.prototype.moveRight = function() {

    var background = this.children[0],
        needle = this.children[1],
        midground = this.children[2],
        midanimation = this.children[3],
        foreground = this.children[4],
        frontanimation = this.children[5];

    if(background.tilePosition.x!=-(background.width/2)) {
        background.tilePosition.x = background.tilePosition.x - this.delta;
        needle.x = needle.x - (this.delta * 2);
        midground.tilePosition.x = midground.tilePosition.x - (this.delta * 2);
        midanimation.x = midanimation.x - (this.delta * 2);
        frontanimation.x = frontanimation.x - (this.delta * 3.125);
        foreground.tilePosition.x = foreground.tilePosition.x - (this.delta * 3.125);

        $( "#slider" ).slider( "option", "value", $( "#slider" ).slider( "option", "value") + this.delta);

   }

};

Level2.prototype.moveRightFromSlider = function(value) {

    var background = this.children[0],
        needle = this.children[1],
        midground = this.children[2],
        midanimation = this.children[3],
        foreground = this.children[4],
        frontanimation = this.children[5];

   if(background.tilePosition.x!=-(background.width/2)) {
          
        this.previous = background.tilePosition.x;
        var steps = Math.abs(this.previous) - value;
       
        background.tilePosition.x = -(value);
        needle.x = needle.x + ((this.delta * 2)  * steps);
        midground.tilePosition.x = midground.tilePosition.x + ((this.delta * 2)  * steps);
        midanimation.x = midanimation.x + ((this.delta * 2)  * steps);
        frontanimation.x = frontanimation.x + ((this.delta * 3.125)  * steps);
        foreground.tilePosition.x = foreground.tilePosition.x + ((this.delta * 3.125)  * steps);

   }

};

Level2.prototype.removeElliot = function() {
    var _this = this;
    if(_this&&_this.children) {
        $.each(_this.children, function(){
            if(this.name=='elliot') {
                _this.removeChild(this);
            }
        });
    }
};

Level2.prototype.restart = function() {
    $( "#slider" ).slider( "option", "value", 1600/2);
    $('#slider').slider( "option", "disabled", false );
    var elliot = this.createElliot();
    this.addChildAt(elliot, 1)

};

function Level2_Foreground() {

    var texture = PIXI.Texture.fromFrame('../images/game/levels/level2/background/Disney_Pete_Forest_B_Front.png');     
    PIXI.extras.TilingSprite.call(this, texture, texture.width, texture.height);

    this.tilePosition.x = 1600/2 - 3200/2;
    this.tilePosition.y = 0;

}

Level2_Foreground.constructor = Level2_Foreground;
Level2_Foreground.prototype = Object.create(PIXI.extras.TilingSprite.prototype);

function Level2_Midground() {

    var texture = PIXI.Texture.fromFrame('../images/game/levels/level2/background/Disney_Pete_Forest_B_Mid.png');     
    PIXI.extras.TilingSprite.call(this, texture, 3200, 768);

    this.tilePosition.x = 1600/2 - 3200/2;
    this.tilePosition.y = 0;

}

Level2_Midground.constructor = Level2_Midground;
Level2_Midground.prototype = Object.create(PIXI.extras.TilingSprite.prototype);


function Level2_Background() {

    var texture = PIXI.Texture.fromFrame('../images/game/levels/level2/background/Disney_Pete_Forest_B_Back.jpg');     
    PIXI.extras.TilingSprite.call(this, texture, 3200, 768);

    this.tilePosition.x = 1600/2 - 3200/2;
    this.tilePosition.y = 0;
    
}

Level2_Background.constructor = Level2_Background;
Level2_Background.prototype = Object.create(PIXI.extras.TilingSprite.prototype);

function Level2_Front_AnimationLayer(stage)   {
  
    PIXI.Container.call(this);
  
    var _this = this;
  
    var overhangTexture_array = [
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00000.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00001.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00002.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00003.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00004.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00005.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00006.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00007.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00008.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00009.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00010.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00011.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00012.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00013.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00014.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00015.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00016.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00017.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00018.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00019.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00020.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00021.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00022.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00023.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00024.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00025.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00026.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00027.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00028.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00029.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00030.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00031.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00032.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00033.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00034.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00035.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00036.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00037.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00038.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00039.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00040.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00041.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00042.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00043.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00044.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00045.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00046.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00047.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00048.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00049.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00050.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00051.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00052.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00053.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00054.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00055.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00056.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00057.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00058.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00059.png")
    ];

    var overhang = new PIXI.extras.MovieClip(overhangTexture_array);
    overhang.x = 163;
    overhang.y = 0;
    overhang.animationSpeed = 0.75 * animationOffset;
    overhang.cacheAsBitmapboolean = true;
   
    if(!mobileAndTabletcheck()) {
        overhang.play();

    }

    var sticksTexture_array = [
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00000.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00001.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00002.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00003.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00004.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00005.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00006.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00007.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00008.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00009.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00010.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00011.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00012.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00013.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00014.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00015.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00016.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00017.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00018.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00019.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00020.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00021.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00022.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00023.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00024.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00025.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00026.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00027.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00028.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00029.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00030.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00031.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00032.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00033.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00034.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00035.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00036.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00037.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00038.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00039.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00040.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00041.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00042.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00043.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00044.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00045.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00046.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00047.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00048.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00049.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00050.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00051.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00052.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00053.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00054.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00055.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00056.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00057.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00058.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00059.png")
    ];
    
    var sticks = new PIXI.extras.MovieClip(sticksTexture_array);
    sticks.x = 1099;
    sticks.y = 0;
    sticks.animationSpeed = 0.75 * animationOffset;
    sticks.cacheAsBitmapboolean = true;
    if(!mobileAndTabletcheck()) {
        sticks.play();
    }

    _this.x = 1600/2 - 3200/2;
    _this.y = 0;

    _this.addChild(overhang);
    _this.addChild(sticks);

}

Level2_Front_AnimationLayer.constructor = Level2_Front_AnimationLayer;
Level2_Front_AnimationLayer.prototype = Object.create(PIXI.Container.prototype);

function Level2_Mid_AnimationLayer(stage)   {
   
    PIXI.Container.call(this);
   
    var _this = this;
    var swayingTexture_array = [
   
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00000.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00001.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00002.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00003.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00004.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00005.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00006.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00007.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00008.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00009.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00010.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00011.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00012.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00013.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00014.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00015.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00016.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00017.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00018.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00019.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00020.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00021.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00022.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00023.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00024.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00025.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00026.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00027.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00028.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00029.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00030.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00031.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00032.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00033.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00034.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00035.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00036.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00037.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00038.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00039.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00040.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00041.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00042.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00043.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00044.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00045.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00046.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00047.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00048.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00049.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00050.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00051.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00052.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00053.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00054.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00055.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00056.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00057.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00058.png"),
        PIXI.Texture.fromFrame("../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00059.png")
    ];

    var swaying = new PIXI.extras.MovieClip(swayingTexture_array);
    swaying.x = 1475;
    swaying.y = 0;
    swaying.animationSpeed = 0.75 * animationOffset;
    swaying.cacheAsBitmapboolean = true;
    if(!mobileAndTabletcheck()) {
        swaying.play();
    }

    _this.x = 1600/2 - 3200/2;
    _this.y = 0;

    _this.addChild(swaying);

}

Level2_Mid_AnimationLayer.constructor = Level2_Mid_AnimationLayer;
Level2_Mid_AnimationLayer.prototype = Object.create(PIXI.Container.prototype);