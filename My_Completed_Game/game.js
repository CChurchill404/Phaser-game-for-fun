var config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {
          y: 300
        },
        debug: false
      }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
    //////////////////////loading assets//////////////////////
function preload ()
{
    this.load.image('background', 'assests/bgforest.jpg');
    this.load.image('background1', 'assests/bgcave.jpg');
    this.load.image('sky', 'assests/environment/sky.png');
    this.load.image('sky2', 'assests/environment/sky2.png');
    this.load.image('black', 'assests/blackbox.jpg');
    this.load.image('platform1','assests/environment/platform1.png')
    this.load.image('floor', 'assests/Grassplatform.png');
    this.load.image('layer', 'assests/environment/floor.png');
    this.load.image('wall', 'assests/environment/wall.png');
    this.load.image('wall1', 'assests/environment/wall1.png')
    this.load.spritesheet('player', 'assests/ghost.png', {frameWidth: 35, frameHeight: 32});
}

function create ()
{
  //implements the background
  //the clouds
   this.add.image(400, 300, 'sky');
   this.add.image(2225, 300, 'sky');
   this.add.image(-1520, 300, 'sky');
   this.add.image(-3400, 300, 'sky');
   this.add.image(4030, 300, 'sky');

  //plain blue
   this.add.image(400, 1090, 'sky2');
   this.add.image(1877, 1090, 'sky2');
   this.add.image(400, 1090, 'sky2');
   this.add.image(3130, 1097, 'sky2');
   this.add.image(900, 1570, 'sky2');
   this.add.image(300, 1097, 'sky2');
   this.add.image(300, 1570, 'sky2');
   this.add.image(-300, 1097, 'sky2');
   this.add.image(-300, 1570, 'sky2');
   this.add.image(-900, 1097, 'sky2');
   this.add.image(-900, 1570, 'sky2');
   this.add.image(-1400, 1097, 'sky2');
   this.add.image(-1400, 1570, 'sky2');
   this.add.image(-1800, 1097, 'sky2');
   this.add.image(-1800, 1570, 'sky2');

   this.add.image(400, -400, 'sky2');
   this.add.image(1877, -400, 'sky2');
   this.add.image(400, -400, 'sky2');
   this.add.image(3130, -400, 'sky2');
   this.add.image(900, -400, 'sky2');
   this.add.image(300, -400, 'sky2');
   this.add.image(300, -400, 'sky2');
   this.add.image(-300, -400, 'sky2');
   this.add.image(-300, -400, 'sky2');
   this.add.image(-900, -400, 'sky2');
   this.add.image(-900, -400, 'sky2');
   this.add.image(-1400, -400, 'sky2');
   this.add.image(-1400, -400, 'sky2');
   this.add.image(-1800, -400, 'sky2');
   this.add.image(-1800, -400, 'sky2');
   this.add.image(-2630, -400, 'sky2');


  //black box background1
  this.add.image(1930, 1057, 'black');
  this.add.image(2450, 1057, 'black');
  this.add.image(2450, 870, 'black');
  //
  this.add.image(-680, 1057, 'black');
  this.add.image(-1043, 1057, 'black');
  this.add.image(-1043, 870, 'black');
   //implementes the platforms that the player works on
   platforms = this.physics.add.staticGroup();

   //floor
   platforms.create(249, 800, 'floor');
   platforms.create(700, 800, 'floor');
   platforms.create(969, 800, 'floor');
//
   platforms.create(1590, 539, 'floor');
   platforms.create(2090, 539, 'floor');
   platforms.create(2360, 539, 'floor');
//
   platforms.create(-300, 539, 'floor');
   platforms.create(-600, 539, 'floor');
   platforms.create(-900, 539, 'floor');
   //Pixel greyish blocks
   platforms.create(230, 950, 'layer');
   platforms.create(700, 950, 'layer');
   platforms.create(1000, 950, 'layer');
//
   platforms.create(1560, 690, 'layer');
   platforms.create(1990, 690, 'layer');
   platforms.create(2379, 690, 'layer');
   platforms.create(2952, 1369, 'layer');
   platforms.create(2550, 1369, 'layer');
   platforms.create(2150, 1369, 'layer');
   platforms.create(1750, 1369, 'layer');
   platforms.create(1560, 1369, 'layer');
//
   platforms.create(-290, 690, 'layer');
   platforms.create(-600, 690, 'layer');
   platforms.create(-919, 690, 'layer');
   platforms.create(-1542, 1410, 'layer');
   platforms.create(-1246, 1410, 'layer');
   platforms.create(-946, 1410, 'layer');
   platforms.create(-646, 1410, 'layer');
   platforms.create(-346, 1410, 'layer');
   platforms.create(-246, 1410, 'layer');
   //Upright pixel greyish blocks
   platforms.create(1280, 730, 'wall');
   platforms.create(2659, 730, 'wall');
   platforms.create(3130, 730, 'wall');
   platforms.create(3130, 1030, 'wall');
   platforms.create(2659, 930, 'wall');
   platforms.create(1280, 1149, 'wall');
//
   platforms.create(0, 730, 'wall');
   platforms.create(0, 1190, 'wall');
   platforms.create(-1210, 730, 'wall');
   platforms.create(-1720, 730, 'wall');
   platforms.create(-1210, 956, 'wall');
   platforms.create(-1720, 1120, 'wall');
   platforms.create(-1830, 620, 'wall');
   platforms.create(-1940, 510, 'wall');
   platforms.create(-2430, 620, 'wall');
   platforms.create(-2430, 172, 'wall');
   platforms.create(-2050, 400, 'wall');
   platforms.create(-2430, 800, 'wall');
   platforms.create(-2430, 1200, 'wall');
   platforms.create(-2430, 1600, 'wall');
   platforms.create(-2430, 2000, 'wall');
   platforms.create(-2430, 2400, 'wall');
   platforms.create(-2430, 2600, 'wall');
   platforms.create(-2430, 2800, 'wall');
   platforms.create(-2430, 3000, 'wall');

   platforms.create(-1720, 1200, 'wall');
   platforms.create(-1720, 1600, 'wall');
   platforms.create(-1720, 2000, 'wall');
   platforms.create(-1720, 2400, 'wall');
   platforms.create(-1720, 2600, 'wall');
   platforms.create(-1720, 2800, 'wall');
   platforms.create(-1720, 2900, 'wall');

   //Single pixel greyish blocks
   platforms.create(1170, 659, 'platform1');
   platforms.create(1070, 659, 'platform1');
   platforms.create(1170, 559, 'platform1');
   platforms.create(3020, 620, 'platform1');
   platforms.create(3020, 830, 'platform1');
   platforms.create(3020, 1040, 'platform1');
   platforms.create(3020, 1259, 'platform1');
   platforms.create(2763, 502, 'platform1');
   platforms.create(2763, 730, 'platform1');
   platforms.create(2763, 950, 'platform1');
   platforms.create(2763, 1159, 'platform1');
   platforms.create(2500, 1030, 'platform1');
   platforms.create(1440, 1030, 'platform1');
   platforms.create(110, 659, 'platform1');
   platforms.create(110, 559, 'platform1');
   platforms.create(210, 659, 'platform1');
//
   platforms.create(-1320, 730, 'platform1');
   platforms.create(-1320, 502, 'platform1');
   platforms.create(-1615, 620, 'platform1');
   platforms.create(-1615, 840, 'platform1');
   platforms.create(-1320, 955, 'platform1');
   platforms.create(-1615, 1070, 'platform1');
   platforms.create(-1320, 1185, 'platform1');
   platforms.create(-1615, 1300, 'platform1');


  //
   cursors = this.input.keyboard.createCursorKeys();
  //
  //creating the player variable
  player = this.physics.add.sprite(-1000, 250, 'player');
  this.physics.add.collider(player, platforms);
  player.setBounce(0.2);
  player.setCollideWorldBounds(false);
  this.cameras.main.startFollow(player)
  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('player', { start: 10, end: 11.5}),
    frameRate: 10,
    repeat: -1
  });

  this.anims.create({
    key:'turn',
    frames: [{key: 'player', frame: 0}],
    frameRate: 20
  });

  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('player', { start: 20, end: 21.5}),
    frameRate: 10,
    repeat: -1
});
//Allows the player to move
}
function update ()
{
  if (cursors.left.isDown)
{
    player.setVelocityX(-160);

    player.anims.play('left', true);
}
else if (cursors.right.isDown)
{
    player.setVelocityX(160);

    player.anims.play('right', true);
}
else
{
    player.setVelocityX(0);

    player.anims.play('turn');
}

if (cursors.up.isDown) //&& player.body.touching.down
{
    player.setVelocityY(-270);
}
}
