// GAME_WIDTH = 1600;
// GAME_HEIGHT = 647;

/* 
small: 1334 by 659
large 1600 by 647
*/

var GAME_SIZE = {
    MOBILE: {
        WIDTH: 1600,
        HEIGHT: 640
    }, 
    DESKTOP: {
        WIDTH: 1600,
        HEIGHT: 768
    }
}

var currentWidth,
    currentHeight;

var LEVEL = 1,
    MAX_LEVELS = 3,
    userClicked = false;

function Main() {

    var rendererOptions = {
        antialiasing: false,
        transparent: true,
        resolution: window.devicePixelRatio,
        autoResize: true,
    };

    this.container = document.createElement('canvas');
    this.stage = new PIXI.Container();
    this.renderer = PIXI.autoDetectRenderer($('#game-container').width(), $('#game-container').height(), rendererOptions);
    this.currentLevel = null;
    this.timeUp = false;
    this.foundNeedle = false;
    this.subTextArray = [];
    this.viewPosition = 0;
    this.levelFinished = false;

    document.getElementById('game-container').appendChild(this.renderer.view);

    window.addEventListener("resize", this.resize.bind(this));
    
    var assetsToLoader = [
        'texture-0.json', 
        '../fonts/CrimsonText_Bold_Black.fnt',
        '../fonts/CrimsonText_Bold_Yellow.fnt',
        '../fonts/CrimsonText_Bold_Red.fnt',
        '../fonts/CrimsonText_Roman_Black.fnt',       
        '../fonts/CrimsonText_Roman_White.fnt',
        '../fonts/CrimsonText_Bold_White.fnt',
        '../fonts/CrimsonText_SemiBold_White.fnt',
        '../fonts/CrimsonText_SemiBold_Black.fnt',

        // Forest A - Background
        '../images/game/levels/level1/background/Disney_Pete_Forest_A_Back.jpg',
        '../images/game/levels/level1/background/Disney_Pete_Forest_A_Mid.png',
        '../images/game/levels/level1/background/Disney_Pete_Forest_A_Front.png',

        // Forest A - Elliot
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00000.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00001.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00002.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00003.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00004.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00005.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00006.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00007.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00008.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00009.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00010.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00011.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00012.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00013.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00014.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00015.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00016.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00017.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00018.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00019.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00020.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00021.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00022.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00023.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00024.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00025.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00026.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00027.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00028.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00029.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00030.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00031.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00032.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00033.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00034.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00035.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00036.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00037.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00038.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00039.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00040.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00041.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00042.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00043.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00044.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00045.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00046.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00047.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00048.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00049.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00050.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00051.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00052.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00053.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00054.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00055.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00056.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00057.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00058.png',
        '../images/game/levels/level1/elliot/Forest_A_Animated_Elliot_00059.png',

        // Forest A - Breath
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00000.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00001.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00002.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00003.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00004.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00005.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00006.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00007.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00008.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00009.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00010.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00011.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00012.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00013.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00014.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00015.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00016.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00017.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00018.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00019.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00020.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00021.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00022.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00023.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00024.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00025.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00026.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00027.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00028.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00029.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00030.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00031.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00032.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00033.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00034.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00035.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00036.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00037.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00038.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00039.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00040.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00041.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00042.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00043.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00044.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00045.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00046.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00047.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00048.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00049.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00050.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00051.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00052.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00053.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00054.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00055.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00056.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00057.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00058.png',
        '../images/game/levels/level1/breath/Forest_A_Animated_Breath_00059.png',

        // Forest A - Leaf
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00000.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00001.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00002.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00003.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00004.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00005.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00006.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00007.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00008.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00009.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00010.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00011.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00012.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00013.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00014.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00015.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00016.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00017.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00018.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00019.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00020.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00021.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00022.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00023.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00024.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00025.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00026.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00027.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00028.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00029.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00030.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00031.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00032.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00033.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00034.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00035.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00036.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00037.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00038.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00039.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00040.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00041.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00042.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00043.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00044.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00045.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00046.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00047.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00048.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00049.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00050.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00051.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00052.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00053.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00054.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00055.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00056.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00057.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00058.png',
        '../images/game/levels/level1/leaf/Forest_A_Animated_Mid_Leaf_00059.png',

        // Forest A - Leaves
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00000.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00001.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00002.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00003.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00004.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00005.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00006.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00007.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00008.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00009.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00010.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00011.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00012.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00013.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00014.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00015.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00016.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00017.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00018.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00019.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00020.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00021.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00022.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00023.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00024.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00025.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00026.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00027.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00028.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00029.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00030.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00031.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00032.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00033.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00034.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00035.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00036.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00037.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00038.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00039.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00040.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00041.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00042.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00043.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00044.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00045.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00046.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00047.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00048.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00049.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00050.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00051.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00052.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00053.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00054.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00055.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00056.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00057.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00058.png',
        '../images/game/levels/level1/leaves/Forest_A_Animated_Mid_Leaves_00059.png',

        // Forest A - Plant
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00000.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00001.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00002.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00003.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00004.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00005.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00006.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00007.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00008.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00009.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00010.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00011.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00012.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00013.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00014.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00015.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00016.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00017.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00018.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00019.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00020.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00021.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00022.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00023.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00024.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00025.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00026.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00027.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00028.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00029.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00030.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00031.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00032.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00033.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00034.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00035.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00036.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00037.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00038.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00039.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00040.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00041.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00042.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00043.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00044.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00045.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00046.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00047.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00048.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00049.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00050.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00051.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00052.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00053.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00054.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00055.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00056.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00057.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00058.png',
        '../images/game/levels/level1/plant/Forest_A_Animated_Mid_Plant_00059.png',

        // Forest B - Background
        '../images/game/levels/level2/background/Disney_Pete_Forest_B_Back.jpg',
        '../images/game/levels/level2/background/Disney_Pete_Forest_B_Mid.png',
        '../images/game/levels/level2/background/Disney_Pete_Forest_B_Front.png',

        // Forest B - Elliot
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00000.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00001.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00002.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00003.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00004.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00005.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00006.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00007.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00008.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00009.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00010.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00011.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00012.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00013.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00014.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00015.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00016.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00017.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00018.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00019.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00020.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00021.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00022.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00023.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00024.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00025.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00026.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00027.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00028.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00029.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00030.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00031.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00032.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00033.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00034.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00035.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00036.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00037.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00038.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00039.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00040.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00041.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00042.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00043.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00044.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00045.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00046.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00047.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00048.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00049.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00050.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00051.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00052.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00053.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00054.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00055.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00056.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00057.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00058.png',
        '../images/game/levels/level2/elliot/Forest_B_Animated_Elliot_00059.png',

        // Forest B - Breath
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00000.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00001.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00002.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00003.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00004.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00005.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00006.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00007.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00008.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00009.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00010.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00011.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00012.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00013.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00014.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00015.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00016.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00017.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00018.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00019.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00020.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00021.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00022.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00023.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00024.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00025.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00026.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00027.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00028.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00029.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00030.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00031.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00032.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00033.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00034.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00035.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00036.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00037.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00038.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00039.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00040.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00041.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00042.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00043.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00044.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00045.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00046.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00047.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00048.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00049.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00050.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00051.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00052.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00053.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00054.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00055.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00056.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00057.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00058.png',
        '../images/game/levels/level2/breath/Forest_B_Animated_Breath_00059.png',

        // Forest B - Overhang
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00000.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00001.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00002.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00003.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00004.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00005.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00006.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00007.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00008.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00009.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00010.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00011.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00012.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00013.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00014.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00015.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00016.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00017.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00018.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00019.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00020.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00021.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00022.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00023.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00024.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00025.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00026.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00027.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00028.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00029.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00030.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00031.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00032.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00033.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00034.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00035.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00036.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00037.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00038.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00039.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00040.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00041.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00042.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00043.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00044.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00045.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00046.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00047.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00048.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00049.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00050.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00051.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00052.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00053.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00054.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00055.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00056.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00057.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00058.png',
        '../images/game/levels/level2/overhang/Forest_B_Animated_Front_Overhang_00059.png',

        // Forest B - Stick
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00000.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00001.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00002.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00003.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00004.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00005.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00006.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00007.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00008.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00009.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00010.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00011.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00012.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00013.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00014.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00015.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00016.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00017.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00018.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00019.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00020.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00021.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00022.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00023.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00024.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00025.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00026.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00027.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00028.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00029.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00030.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00031.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00032.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00033.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00034.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00035.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00036.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00037.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00038.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00039.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00040.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00041.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00042.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00043.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00044.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00045.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00046.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00047.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00048.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00049.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00050.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00051.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00052.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00053.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00054.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00055.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00056.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00057.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00058.png',
        '../images/game/levels/level2/sticks/Forest_B_Animated_Front_Sticks_00059.png',

        // Forest B - Swaying
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00000.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00001.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00002.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00003.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00004.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00005.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00006.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00007.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00008.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00009.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00010.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00011.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00012.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00013.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00014.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00015.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00016.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00017.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00018.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00019.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00020.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00021.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00022.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00023.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00024.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00025.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00026.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00027.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00028.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00029.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00030.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00031.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00032.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00033.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00034.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00035.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00036.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00037.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00038.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00039.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00040.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00041.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00042.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00043.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00044.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00045.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00046.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00047.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00048.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00049.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00050.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00051.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00052.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00053.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00054.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00055.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00056.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00057.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00058.png',
        '../images/game/levels/level2/swaying/Forest_B_Animated_Mid_Swaying_00059.png',
    
        // Forest C
        '../images/game/levels/level3/background/Disney_Pete_Forest_C_Back.jpg',
        '../images/game/levels/level3/background/Disney_Pete_Forest_C_MidBack.png',
        '../images/game/levels/level3/background/Disney_Pete_Forest_C_MidFront.png',
        '../images/game/levels/level3/background/Disney_Pete_Forest_C_Front.png',

        // Forest C - Elliot
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00000.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00001.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00002.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00003.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00004.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00005.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00006.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00007.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00008.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00009.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00010.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00011.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00012.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00013.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00014.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00015.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00016.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00017.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00018.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00019.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00020.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00021.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00022.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00023.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00024.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00025.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00026.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00027.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00028.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00029.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00030.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00031.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00032.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00033.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00034.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00035.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00036.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00037.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00038.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00039.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00040.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00041.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00042.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00043.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00044.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00045.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00046.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00047.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00048.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00049.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00050.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00051.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00052.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00053.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00054.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00055.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00056.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00057.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00058.png',
        '../images/game/levels/level3/elliot/Forest_C_Animated_Elliot_00059.png',

        // Forest C - Breath
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00000.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00001.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00002.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00003.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00004.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00005.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00006.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00007.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00008.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00009.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00010.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00011.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00012.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00013.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00014.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00015.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00016.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00017.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00018.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00019.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00020.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00021.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00022.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00023.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00024.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00025.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00026.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00027.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00028.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00029.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00030.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00031.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00032.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00033.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00034.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00035.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00036.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00037.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00038.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00039.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00040.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00041.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00042.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00043.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00044.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00045.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00046.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00047.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00048.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00049.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00050.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00051.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00052.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00053.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00054.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00055.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00056.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00057.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00058.png',
        '../images/game/levels/level3/breath/Forest_C_Animated_Breath_00059.png',

        //Forest C - Plant 1
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00000.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00001.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00002.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00003.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00004.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00005.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00006.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00007.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00008.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00009.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00010.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00011.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00012.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00013.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00014.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00015.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00016.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00017.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00018.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00019.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00020.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00021.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00022.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00023.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00024.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00025.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00026.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00027.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00028.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00029.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00030.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00031.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00032.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00033.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00034.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00035.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00036.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00037.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00038.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00039.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00040.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00041.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00042.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00043.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00044.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00045.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00046.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00047.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00048.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00049.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00050.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00051.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00052.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00053.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00054.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00055.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00056.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00057.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00058.png',
        '../images/game/levels/level3/plant1/Forest_C_Animated_Back_Plant_00059.png',

        // Forest C - Plant 2
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00000.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00001.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00002.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00003.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00004.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00005.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00006.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00007.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00008.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00009.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00010.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00011.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00012.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00013.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00014.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00015.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00016.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00017.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00018.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00019.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00020.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00021.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00022.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00023.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00024.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00025.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00026.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00027.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00028.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00029.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00030.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00031.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00032.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00033.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00034.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00035.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00036.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00037.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00038.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00039.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00040.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00041.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00042.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00043.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00044.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00045.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00046.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00047.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00048.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00049.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00050.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00051.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00052.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00053.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00054.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00055.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00056.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00057.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00058.png',
        '../images/game/levels/level3/plant2/Forest_C_Animated_MidFront_Plant_00059.png',
        
        // Forest C - Overhang
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00000.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00001.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00002.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00003.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00004.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00005.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00006.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00007.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00008.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00009.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00010.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00011.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00012.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00013.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00014.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00015.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00016.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00017.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00018.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00019.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00020.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00021.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00022.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00023.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00024.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00025.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00026.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00027.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00028.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00029.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00030.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00031.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00032.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00033.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00034.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00035.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00036.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00037.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00038.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00039.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00040.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00041.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00042.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00043.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00044.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00045.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00046.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00047.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00048.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00049.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00050.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00051.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00052.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00053.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00054.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00055.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00056.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00057.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00058.png',
        '../images/game/levels/level3/overhang/Forest_C_Animated_MidFront_Overhang_00059.png',

    ];

    loader = PIXI.loader;
    loader.add(assetsToLoader);
    loader.on("progress", this.loadProgress.bind(this));
    loader.once('complete', this.setup.bind(this));
    loader.load();

}

Main.prototype.loadProgress = function(loader, resource) {

    $('#game-loading .loaded').text(Math.round(loader.progress) + "%");
    //Display the file `url` currently being loaded  
    //console.log("loading: " + resource.url);
    //Display the precentage of files currently loaded  
    //console.log("progress: " + loader.progress + "%");
    //If you gave your files names with the `add` method, you can access  
    //console.log("loading: " + resource.name);

};

Main.prototype.update = function() {

    requestAnimationFrame(this.update.bind(this));
    TWEEN.update();
    this.renderer.render(this.stage);

    for(var i=0;i<=this.subTextArray.length-1;i++) {
        this.subTextArray[i].y = this.subTextArray[i].y - 2;
    }
    
    if(this.timeUp) {
        for(var i=0;this.subTextArray.length-1>i;i++){
            this.subTextArray[i].visible = false;
            this.stage.removeChild(this.subTextArray[i]);
        }
        $('#game-directions').hide();
        this.subTextArray = [];
        this.currentLevel.removeElliot();
        this.timesUp.visible = true;
        this.timesUp.realignText();
        $('#slider').slider( "option", "disabled", true );
        this.gameTimer.destroy();
    }
    else if(this.foundNeedle&&!this.timeUp) {
        for(var i=0;this.subTextArray.length-1>i;i++){
            this.subTextArray[i].visible = false;
            this.stage.removeChild(this.subTextArray[i]);
        }
        this.subTextArray = [];
        this.gameTimer.destroy();

        if(!this.levelFinished) {
           
            this.levelFinished = true;
            var myEvent = new CustomEvent("finishedLevel", {
                detail: {
                    levelCompleted: this.currentLevel.id
                }
            });
            
            document.dispatchEvent(myEvent);
            
        }

    } 

    if(this.gameTimer.minutes<=0&&this.gameTimer.seconds<=0) {
        this.timeUp = true;
    }

};

Main.prototype.setup = function() {

    $('#game-loading .loaded').text("100%");

    var animationTimer = setInterval(function(){
        if($('.main').hasClass('directions-shown')){
            $('.main').removeClass('directions-shown')
        } else {
            $('.main').addClass('directions-shown')
        }
    }, 1000);

    setTimeout(function(){
        $('#game-directions').show();
        $('#game-loading').hide();
        $('#game-container > canvas').css('opacity','1');
        $( "#slider" ).slider( "option", "disabled", false );
        setTimeout(function(){
            clearInterval(animationTimer);
            $('.main').removeClass('directions-shown');
            $('#game-directions').fadeOut();
        }, 10000);
    }, 500);

    var _this = this;

    _this.level1 = new Level1(_this.stage);
    _this.stage.addChild(_this.level1);
    _this.currentLevel = _this.level1;

    _this.currentLevel.interactive = true;
    _this.currentLevel.on('mousedown', _this.userclick.bind(_this));
    _this.currentLevel.on('touchstart', _this.userclick.bind(_this));

    _this.scoreBoard = new ScoreBoard();
    _this.scoreBoard.visible = false;

    this.scoreBoard.facebookBtn.on('mousedown', this.shareScoreFacebook.bind(this));
    this.scoreBoard.facebookBtn.on('touchstart', this.shareScoreFacebook.bind(this));
    this.scoreBoard.twitterBtn.on('mousedown', this.shareScoreTwitter.bind(this));
    this.scoreBoard.twitterBtn.on('touchstart', this.shareScoreTwitter.bind(this));

    _this.stage.addChild(_this.scoreBoard);

    _this.timesUp = new TimesUp();
    _this.timesUp.visible = false;
    _this.timesUp.children[2].on('mousedown', _this.restart.bind(_this));
    _this.timesUp.children[2].on('touchstart', _this.restart.bind(_this));

    _this.stage.addChild(_this.timesUp);

    _this.gameTimer = new Timer(_this.stage, _this.currentLevel.time);
    _this.stage.addChild(_this.gameTimer);

    _this.scoreBoard.continueContainer.on('mousedown', _this.nextLevel.bind(_this));
    _this.scoreBoard.continueContainer.on('touchstart', _this.nextLevel.bind(_this));

    _this.scoreBoard.previousContainer.on('mousedown', _this.replayLevel.bind(_this));
    _this.scoreBoard.previousContainer.on('touchstart', _this.replayLevel.bind(_this));

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener("showScore", function(e) {
        _this.showScore();
    });

    function onKeyDown(key){      
        if (key.keyCode === 65 || key.keyCode === 37) {
            _this.currentLevel.moveLeft();
        }
        if (key.keyCode === 68 || key.keyCode === 39) {
            _this.currentLevel.moveRight();
        }

    }

    _this.resize();
    requestAnimationFrame(_this.update.bind(_this));

};

Main.prototype.resize = function() {

    if(window.innerWidth>=1600) {
        ratio = 1;
        this.stage.scale.x = this.stage.scale.y = ratio;
        this.renderer.resize(Math.ceil(GAME_SIZE.DESKTOP.WIDTH * ratio), Math.ceil(GAME_SIZE.DESKTOP.HEIGHT * ratio));  

    } else {
        
        if(window.innerWidth>=768) {
            ratio = window.innerWidth/GAME_SIZE.DESKTOP.WIDTH;
            this.stage.scale.x = this.stage.scale.y = ratio;
            this.renderer.resize(Math.ceil(GAME_SIZE.DESKTOP.WIDTH * ratio), Math.ceil(GAME_SIZE.DESKTOP.HEIGHT * ratio)); 
       
        } else {
            ratio = window.innerWidth/GAME_SIZE.MOBILE.WIDTH;
            this.stage.scale.x = this.stage.scale.y = ratio;
            this.renderer.resize(Math.ceil(GAME_SIZE.MOBILE.WIDTH * ratio), Math.ceil(GAME_SIZE.MOBILE.HEIGHT * ratio)); 
        }
         
    }
    
};

Main.prototype.moveLeft = function(){ 

    this.currentLevel.moveLeft();

};

Main.prototype.moveRight = function(){ 

    this.currentLevel.moveRight();

};

Main.prototype.moveLeftFromSlider = function(value){ 

    this.currentLevel.moveLeftFromSlider(value);

};

Main.prototype.moveRightFromSlider = function(value){ 

    this.currentLevel.moveRightFromSlider(value);

};

Main.prototype.userclick = function(e) {

    if(!userClicked) {
    
        userClicked = true;

        var needle = this.currentLevel.children[1],
            isHit = checkfForHit(e.data.getLocalPosition(this.stage).x, e.data.getLocalPosition(this.stage).y, needle.x, needle.y, (needle.x + needle.width), (needle.y + needle.height));

        if(LEVEL==3){
            needle = this.currentLevel.children[2];
        } 

        var polygon = needle.points,
            userClick = [e.data.getLocalPosition(this.stage).x, e.data.getLocalPosition(this.stage).y]
       
        var checkinside = inside(userClick, polygon, needle.x);

        if(!this.timeUp&&!this.foundNeedle) {
            
            if(checkinside) {
                this.foundNeedle = true;
                userClicked = false;
            } else {
                this.gameTimer.subtract(5);
                showMinusTime(e.data.getLocalPosition(this.stage).x, e.data.getLocalPosition(this.stage).y, this.stage, this.subTextArray);
            }
        }
    }

};

Main.prototype.restart = function(e) {

    $( "#slider" ).slider( "option", "value", 1600/2);
    this.currentLevel.restart();
    this.timesUp.visible = false;
    this.timeUp = false;
    this.foundNeedle = false;
    this.scoreBoard.visible = false;
    this.scoreBoard.leadText.text = "";
    this.gameTimer = new Timer(this.stage, this.currentLevel.time);
    this.stage.addChild(this.gameTimer);
    $('#slider').slider( "option", "disabled", false );

};

Main.prototype.nextLevel = function(){
    $( "#slider" ).slider( "option", "value", 1600/2);

    LEVEL = LEVEL + 1;
    var _this = this;
    currentAudio.stop();
    this.levelFinished = false;
    if(LEVEL==1) {
        $('#slider').slider( "option", "disabled", false );
        
        _this.currentLevel.interactive = true;
        _this.timesUp.visible = false;
        _this.timeUp = false;
        _this.foundNeedle = false;
        _this.scoreBoard.visible = false;

        _this.currentLevel.destroyAll();
        _this.currentLevel = new Level1(this.stage);
        _this.currentLevel.interactive = true;
        _this.currentLevel.on('mousedown', _this.userclick.bind(_this));
        _this.currentLevel.on('touchstart', _this.userclick.bind(_this));
        _this.stage.addChildAt(this.currentLevel, 0);
        
        _this.gameTimer = new Timer(_this.stage, _this.currentLevel.time);
        _this.stage.addChild(_this.gameTimer);

    }
    if(LEVEL==2) {

        $('#slider').slider( "option", "disabled", false );

        _this.currentLevel.interactive = true;
        _this.timesUp.visible = false;
        _this.timeUp = false;
        _this.foundNeedle = false;
        _this.scoreBoard.visible = false;

        _this.currentLevel.destroyAll();
        _this.currentLevel = new Level2(this.stage);
        _this.currentLevel.interactive = true;
        _this.currentLevel.on('mousedown', _this.userclick.bind(_this));
        _this.currentLevel.on('touchstart', _this.userclick.bind(_this));
        _this.stage.addChildAt(this.currentLevel, 0);
        
        _this.gameTimer = new Timer(_this.stage, _this.currentLevel.time);
        _this.stage.addChild(_this.gameTimer);

    }
    if(LEVEL==3) {
        $('#slider').slider( "option", "disabled", false );
        
        _this.currentLevel.interactive = true;
        _this.timesUp.visible = false;
        _this.timeUp = false;
        _this.foundNeedle = false;
        _this.scoreBoard.visible = false;

        _this.currentLevel.destroyAll();
        _this.currentLevel = new Level3(this.stage);
        _this.currentLevel.interactive = true;
        _this.currentLevel.on('mousedown', _this.userclick.bind(_this));
        _this.currentLevel.on('touchstart', _this.userclick.bind(_this));
        _this.stage.addChildAt(this.currentLevel, 0);
        
        _this.gameTimer = new Timer(_this.stage, _this.currentLevel.time);
        _this.stage.addChild(_this.gameTimer);
    }

};

Main.prototype.replayLevel = function(){
     
    currentAudio.stop();
    
    $( "#slider" ).slider( "option", "value", 1600/2);
    var _this = this;
    this.levelFinished = false;
    if(LEVEL==1) {
        $('#slider').slider( "option", "disabled", false );    
        _this.currentLevel.interactive = true;
        _this.timesUp.visible = false;
        _this.timeUp = false;
        _this.foundNeedle = false;
        _this.scoreBoard.visible = false;

        _this.currentLevel.destroy();
        _this.currentLevel = new Level1(this.stage);
        _this.currentLevel.interactive = true;
        _this.currentLevel.on('mousedown', _this.userclick.bind(_this));
        _this.currentLevel.on('touchstart', _this.userclick.bind(_this));
        _this.stage.addChildAt(this.currentLevel, 0);
        _this.currentLevel.visible = true;
        
        _this.gameTimer = new Timer(_this.stage, _this.currentLevel.time);
        _this.stage.addChild(_this.gameTimer);

    }
    if(LEVEL==2) {
        $('#slider').slider( "option", "disabled", false );    
        _this.currentLevel.interactive = true;
        _this.timesUp.visible = false;
        _this.timeUp = false;
        _this.foundNeedle = false;
        _this.scoreBoard.visible = false;

        _this.currentLevel.destroy();
        _this.currentLevel = new Level2(this.stage);
        _this.currentLevel.interactive = true;
        _this.currentLevel.on('mousedown', _this.userclick.bind(_this));
        _this.currentLevel.on('touchstart', _this.userclick.bind(_this));
        _this.stage.addChildAt(this.currentLevel, 0);
        _this.currentLevel.visible = true;
        
        _this.gameTimer = new Timer(_this.stage, _this.currentLevel.time);
        _this.stage.addChild(_this.gameTimer);

    }
    if(LEVEL==3) {
        $('#slider').slider( "option", "disabled", false );    
        _this.currentLevel.interactive = true;
        _this.timesUp.visible = false;
        _this.timeUp = false;
        _this.foundNeedle = false;
        _this.scoreBoard.visible = false;

        _this.currentLevel.destroy();
        _this.currentLevel = new Level3(this.stage);
        _this.currentLevel.interactive = true;
        _this.currentLevel.on('mousedown', _this.userclick.bind(_this));
        _this.currentLevel.on('touchstart', _this.userclick.bind(_this));
        _this.stage.addChildAt(this.currentLevel, 0);
        _this.currentLevel.visible = true;
        
        _this.gameTimer = new Timer(_this.stage, _this.currentLevel.time);
        _this.stage.addChild(_this.gameTimer);

    }

};

Main.prototype.showScore = function() {
    
    $('.main').addClass('withElliot');
    $('#game-directions').hide();
    if(LEVEL>MAX_LEVELS -1) {
        this.scoreBoard.continueContainer.visible = false;
    }
    this.currentLevel.visible = false;
    this.scoreBoard.visible = true;
    var minutesInSeconds =  this.gameTimer.minutes * 60;
    this.scoreBoard.levelText.text = gameTextObject.timer.levelText + " " + LEVEL;
    this.scoreBoard.nextLevelText.text = gameTextObject.timer.levelText + " " + (LEVEL + 1);
    this.scoreBoard.previousLevelText.text = gameTextObject.timer.levelText + " " + LEVEL;
    
    var score = this.currentLevel.time - (this.gameTimer.seconds + minutesInSeconds);
    if(score < 0) {
        score = this.currentLevel.time;
    }
    this.scoreBoard.scoreText.text = score + " " + gameTextObject.scoreBoard.secondsText;

}

Main.prototype.shareScoreFacebook = function() {  
    
    var minutesInSeconds =  this.gameTimer.minutes * 60;
    
   var score = this.currentLevel.time - (this.gameTimer.seconds + minutesInSeconds);
    if(score < 0) {
        score = this.currentLevel.time;
    }

    var width = 550,
        height = 420,
        winHeight = screen.height,
        winWidth = screen.width,
        left = Math.round((winWidth / 2) - (width / 2)),
        top = Math.round((winHeight / 2) - (height / 2)),
        shareImg = window.location.protocol + '//' + window.location.host + '/images/game/share-image.jpg',
        url = 'https://www.facebook.com/dialog/feed?app_id=1548928435401945&link=http%3A%2F%2Ffindelliot.com&name=Disney%27s%20Pete%27s%20Dragon&caption=Click%20to%20play%20now&description='+gameTextObject.scoreBoard.socialText + " " + score + " " + gameTextObject.scoreBoard.secondsText+'&redirect_uri=http://www.facebook.com&picture='+shareImg;
  
    var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
    if (!iOS) {
        window.open(url, 'share', 'scrollbars=yes,resizable=yes,toolbar=no,location=yes, width='+width+', height='+height+',left=' + left + ',top=' + top);
    } else {
        window.location = url;
    }

};

Main.prototype.shareScoreTwitter = function() {
    
    var minutesInSeconds =  this.gameTimer.minutes * 60;
    
    var score = this.currentLevel.time - (this.gameTimer.seconds + minutesInSeconds);
    if(score < 0) {
        score = this.currentLevel.time;
    }

    var width = 550,
      height = 420,
      winHeight = screen.height,
      winWidth = screen.width,
      left = Math.round((winWidth / 2) - (width / 2)),
      top = Math.round((winHeight / 2) - (height / 2)),
      url = 'https://twitter.com/intent/tweet?url=http%3A%2F%2Ffindelliot.com%2F&text='+gameTextObject.scoreBoard.socialText + " " + score + " " + gameTextObject.scoreBoard.secondsText;

   

    var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
    if (!iOS) {
        window.open(url, 'intent', 'scrollbars=yes,resizable=yes,toolbar=no,location=yes, width='+width+', height='+height+',left=' + left + ',top=' + top);
    } else {
        window.location = url;
    }

};

function checkfForHit(user_x, user_y, object_x, object_y, object_x2, object_y2) {

    if(user_x >= object_x && user_x <= object_x2 && 
        user_y >= object_y && user_y <= object_y2) {
        return true;
    } else {
        return false;
    }

}

function inside(point, polyPoints, offset) {

    if(polyPoints) {

        var x = point[0], y = point[1];

        var inside = false;
        for (var i = 0, j = polyPoints.length - 1; i < polyPoints.length; j = i++) {
            var xi = polyPoints[i][0] + offset, yi = polyPoints[i][1];
            var xj = polyPoints[j][0] + offset, yj = polyPoints[j][1];

            var intersect = ((yi > y) != (yj > y))
                && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
            if (intersect) inside = !inside;
        }

        return inside;

    }
}

function showMinusTime(user_x, user_y, stage, subTextArray) {
    
    var subtractText = new PIXI.extras.BitmapText('- 00:05', {
        font: '30px CrimsonText_Bold_Red',
        align: 'center'
    });

    subtractText.x = user_x - subtractText.width;
    subtractText.y = user_y - subtractText.height;
    subtractText.alpha = 0;

    new TWEEN.Tween(subtractText)
        .to({
            alpha: 1
        }, 200)
        .onComplete(function() {    
            new TWEEN.Tween(subtractText)
                .to({
                    alpha: 0 
                }, 400)
                .onComplete(function() {    
                    userClicked = false;
                    stage.removeChild(subtractText);
                    subTextArray.pop();
                })
                .easing(TWEEN.Easing.Linear.None)
                .start();
        })
        .easing(TWEEN.Easing.Linear.None)
        .start();

    stage.addChild(subtractText);
    subTextArray.push(subtractText);

}