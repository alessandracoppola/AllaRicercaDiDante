/** * Generated from the Phaser Sandbox
 *
 * //phaser.io/sandbox/GlEgikQS
 *
 * This source requires Phaser 2.6.2
 */

var game = new Phaser.Game(1024, 768, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

var level2Success = false;
 // ANIMAZIONI
 var jump=0;
 var jumpCount = 0;
 var direzione = 0;
 var accovaccio = 0;
 var accovacciobufera = 0;
 var count = 0;
 var bufera = 0;
 var aggrappo = 0;
 var state = 0;
 var firstfall=0;

 //tasti
var player;
var cursors;
var jumpButton;
var A;
var Z;
var platform;

//fiammelle fisse alto dx punteggio
var fiammellaf1;
var fiammellaf2;
var fiammellaf3;
var fiammellaf4;
var fiammellaf5;
var fiammellaf6;
var infohelp;

//create livello 0
var bg0;
var tp0;
var info0;
var ground0;
var platform0a;
var platform0b;
var platform0c;
var platform0d;
var platform0e;
var platform0f;
var colonna1;
var colonna2;
var colonna3;
var colonna4;
var colonna5;
var colonna6;
var colonna7;
var colonna8;
var arco0;

//create passaggio 0 - 1
var bg01;

// create livello 1
var bg1;
var tp1;
var info1;
var ground1a;
var ground1b;
var ground1c;
var ground1d;
var ground1e;
var platform1a;
var platform1b;
var platform1c;
var platform1d;
var platform1g;
var platform1e;
var platform1f;
var platform1h;
var masso1;
var masso1a;
var masso1b;
var masso1c;
var masso1d;
var masso1e;
var fiammella1;
var bufera;
var bordo1;

// create passaggio 1 - 2
var bg12;

// create livello 2
var bg2;
var tp2;
var info2;
var ground2;
var platform2a;
var platforminfuocata2_a;
var platforminfuocata2_b;
var fiammella2;
var fiammella3;
var tomba2;
var linea2;

// create passaggio 2 - 4
var bg24;
var platform24a;
var teletrasporto24;
var teletrasporto241;
var muro24;

// create livello 4
var bg4;
var tp4;
var info4;
var ground4;
var cagna4a;
var cagna4b;
var cagna4c;
var fiammella4;
var fiammella5;
var passaggio24teletrasporto;
var muro4;
var aggrappo1;
var aggrappo2;
var aggrappo3;
var aggrappo4;
var aggrappo5;
var aggrappo6;
var aggrappo7;
var aggrappo8;
var aggrappo9;
var aggrappo10;
var aggrappo11;
var aggrappo12;
var aggrappo13;
var aggrappo14;
var cagna4ainizio;
var cagna4afine;
var cagna4binizio;
var cagna4bfine;
var cagna4cinizio;
var cagna4cfine;

//create passaggio 4 - 5
var bg45;
var ground45;
var passaggio45;

//create livello 5
var bg5;
var bgn5;
var ground5a;
var ground5c;
var tp5;
var info5;
var platform5;
var platformMobile5a;
var platformMobile5a2;
var platformMobile5b;
var platformbuona5;
var platformbuona52;
var platformcattiva5;
var fiammella6;
var muro5a;
var muro5b;
var muro5c;

//create passaggio 5 - 6
var bg56;
var ground56;
var dante

//create livello 6
var bg6;

//variabili attivazione livelli
var level1 = false;
var level2 = false;
var level3 = false;
var level4 = false;
var level5 = false;

var collideHidePlatform;

//SITO
  //immaginiscene
  var copertina;
  var scena1;
  var scena2;
  var scena3;
  var paginacrediti;
  var finale1;
  var finale2;
  //pulsanti sito
  var pausebutton;
  var resumebutton;
  var bottonestoria;
  var bottoneplatform;
  var bottonecrediti;
  var bottonecopertina;
  var bottonerestart;
  var bottonecopertinafinale;
  var bottonescenadopo;
  var bottonescena1si;
  var bottonescena1no;
  var bottonescena2si;
  var bottonescena2no;
  var bottonescena3si;
  var bottonescena3no;
  var pu1= 0;
  var pu2= 0;
  var pu3= 0;
  var pu4= 0;
  var pu5= 0;
  var pu6= 0;
  var fine
  

function preload() {

  game.load.crossOrigin = 'anonymous';

  game.load.spritesheet ('player', 'sprites/player.png', 165, 165, 159);
//SITO
//immaginiscene
	game.load.image('copertina', 'sprites/copertinafinale.jpg');
  game.load.image('scena1', 'sprites/scena1.png')
  game.load.image('scena2', 'sprites/scena2.png');
  game.load.image('scena3', 'sprites/scena3.jpg');
  game.load.image('paginacrediti', 'sprites/creditsdef.jpg');
	game.load.image('finale1', 'sprites/FinalePerde.png');
	game.load.image('finale2', 'sprites/FinaleVince.jpg');

//pulsanti sito
	game.load.image('bottonestoria', 'sprites/pulsantestoria.png');
	game.load.image('bottoneplatform', 'sprites/pulsantegioca.png');
	game.load.image('bottonecrediti', 'sprites/pulsantecrediti.png');
	game.load.image('bottonecopertina', 'sprites/homebutton.png');
	game.load.image('bottonecopertinafinale', 'sprites/homebutton.png');
	game.load.image('bottonerestart', 'sprites/restartgame.png');
	game.load.image('bottonescenadopo', 'sprites/pausebutton.png');
	game.load.image('bottonescena1si', 'sprites/scenainatto.png');
	game.load.image('bottonescena1no', 'sprites/scenanoninatto.png');
	game.load.image('bottonescena2si', 'sprites/scenainatto.png');
	game.load.image('bottonescena2no', 'sprites/scenanoninatto.png');
	game.load.image('bottonescena3si', 'sprites/scenainatto.png');
	game.load.image('bottonescena3no', 'sprites/scenanoninatto.png');
	game.load.image('fine', 'sprites/fine.png');

/**** livello 0 ****/
  game.load.image('bg0', 'sprites/sfondo0.png');
  game.load.image('ground0', 'sprites/ground0.png')
  game.load.image('tp0', 'sprites/tp0.png');
  game.load.image('info0', 'sprites/info0.png');
  game.load.image('platform0a', 'sprites/platform0a.png');
  game.load.image('platform0b', 'sprites/platform0b.png');
  game.load.image('platform0c', 'sprites/platform0c.png');
  game.load.image('platform0d', 'sprites/platform0d.png');
  game.load.image('platform0e', 'sprites/platform0e.png');
  game.load.image('platform0f', 'sprites/platform0f.png');
  game.load.image('colonna1', 'sprites/colonna1.png');
  game.load.image('colonna2', 'sprites/colonna2.png');
  game.load.image('colonna3', 'sprites/colonna3.png');
  game.load.image('colonna4', 'sprites/colonna4.png');
  game.load.image('colonna5', 'sprites/colonna5.png');
  game.load.image('colonna6', 'sprites/colonna6.png');
  game.load.image('colonna7', 'sprites/colonna7.png');
  game.load.image('colonna8', 'sprites/colonna8.png');
  game.load.image('arco0', 'sprites/arco0.png');
  game.load.image('platform0scale', 'sprites/platform0scale.png');

/**** passaggio 0 - 1 ****/
  game.load.image('bg01', 'sprites/sfondo01.png');

/**** livello 1 ****/
  game.load.image('bg1', 'sprites/sfondo1.png');
  game.load.image('ground1a', 'sprites/ground1a.png');
  game.load.image('ground1b', 'sprites/ground1b.png');
  game.load.image('ground1c', 'sprites/ground1c.png');
  game.load.image('ground1d', 'sprites/ground1d.png');
  game.load.image('ground1e', 'sprites/ground1e.png');
  game.load.image('tp1', 'sprites/tp12.png');
  game.load.image('info1', 'sprites/info1.png');
  game.load.image('platform1a', 'sprites/platform1a.png');
  game.load.image('platform1b', 'sprites/platform1b.png');
  game.load.image('platform1c', 'sprites/platform1c.png');
  game.load.image('platform1d', 'sprites/platform1d.png');
  game.load.image('platform1e', 'sprites/platform1e.png');
  game.load.image('platform1f', 'sprites/platform1f.png');
  game.load.image('platform1g', 'sprites/platform1g.png');
  game.load.image('platform1h', 'sprites/platform1h.png');
  game.load.image('masso1a', 'sprites/masso1a.png');
  game.load.image('masso1b', 'sprites/masso1b.png');
  game.load.image('masso1c', 'sprites/masso1c.png');
  game.load.image('masso1d', 'sprites/masso1d.png');
  game.load.image('masso1e', 'sprites/masso1e.png');
  game.load.image('bordo1', 'sprites/bordo1.png');

  game.load.spritesheet('fiammella1', 'sprites/fiammella1animata.png',28.33,57,18);
	game.load.spritesheet('bufera', 'sprites/buferascurapiccola.png',6150,1700,5);

/**** livello 2 ****/
  game.load.image('bg2', 'sprites/sfondo2.png');
  game.load.image('linea2', 'sprites/linea2.png');
  game.load.image('ground2', 'sprites/ground2.png');
  game.load.image('tp2', 'sprites/tp2.png');
  game.load.image('info2', 'sprites/info2.png');
  game.load.image('platform2a', 'sprites/platforminfuocata2.png');
  game.load.image('platforminfuocata2', 'sprites/platforminfuocata2.png');

  game.load.spritesheet('fiammella2', 'sprites/fiammella1animata.png',28.33,57,18);
  game.load.spritesheet('fiammella3', 'sprites/fiammella1animata.png',28.33,57,18);

/**** passaggio 2 - 4 ****/
  game.load.image('bg24', 'sprites/sfondo24.png');
	game.load.image('platform24a','sprites/platform24a.png');
 	game.load.image('teletrasporto24','sprites/passaggio24.png');
	game.load.image('teletrasporto241','sprites/teletrasporto241.png');
	game.load.image('muro24','sprites/muro24.png');

/**** livello 4 ****/
  game.load.image('bg4', 'sprites/sfondo4.png');
  game.load.image('ground4', 'sprites/ground4.png');
  game.load.image('tp4', 'sprites/tp4.png');
  game.load.image('info4', 'sprites/info4.png');
	game.load.image('passaggio24teletrasporto', 'sprites/passaggio24teletrasporto.png');
	game.load.image('muro4', 'sprites/muro4.png');
	game.load.image('aggrappo1', 'sprites/aggrappo1a.png');
	game.load.image('aggrappo2', 'sprites/aggrappo2a.png');
	game.load.image('aggrappo3', 'sprites/aggrappo3a.png');
	game.load.image('aggrappo4', 'sprites/aggrappo4a.png');
	game.load.image('aggrappo5', 'sprites/aggrappo5a.png');
	game.load.image('aggrappo6', 'sprites/aggrappo6a.png');
	game.load.image('aggrappo7', 'sprites/aggrappo7a.png');
	game.load.image('aggrappo8', 'sprites/aggrappo8a.png');
	game.load.image('aggrappo9', 'sprites/aggrappo9a.png');
	game.load.image('aggrappo10', 'sprites/aggrappo10a.png');
	game.load.image('aggrappo12', 'sprites/aggrappo12.png');
	game.load.image('aggrappo11', 'sprites/aggrappo11.png');
	game.load.image('aggrappo13', 'sprites/aggrappo13.png');
	game.load.image('aggrappo14', 'sprites/aggrappo14.png');
	game.load.image('cagna4ainizio', 'sprites/masso1a.png');
	game.load.image('cagna4afine', 'sprites/masso1a.png');
	game.load.image('cagna4binizio', 'sprites/masso1a.png');
	game.load.image('cagna4bfine', 'sprites/masso1a.png');
  game.load.image('cagna4cinizio', 'sprites/masso1a.png');
	game.load.image('cagna4cfine', 'sprites/masso1a.png');

  game.load.spritesheet('fiammella4', 'sprites/fiammella1animata.png',28.33,57,18);
  game.load.spritesheet('fiammella5', 'sprites/fiammella1animata.png',28.33,57,18);
  game.load.spritesheet('cagna4a', 'sprites/cagna.png',160,80,14);
  game.load.spritesheet('cagna4b', 'sprites/cagna.png',160,80,14);
  game.load.spritesheet('cagna4c', 'sprites/cagna.png',160,80,14);

/**** passaggio 4 - 5 ****/
  game.load.image('bg45', 'sprites/sfondo45.png');
  game.load.image('ground45', 'sprites/ground45.png');
  game.load.image('passaggio45', 'sprites/albero45.png');

/**** livello 5 ****/
  game.load.image('bg5', 'sprites/sfondo5.png');
  game.load.image('bgn5', 'sprites/5sfondochiaro.png');
  game.load.image('ground5a', 'sprites/ground5principale.png')
  game.load.image('tp5', 'sprites/tp5.png');
  game.load.image('info5', 'sprites/info5.png');
  game.load.image('platform5', 'sprites/platform5a.png');
  game.load.image('platformMobile5a', 'sprites/platform5a.png');
  game.load.image('platformMobile5b', 'sprites/platform5a.png');
  game.load.image('platformbuona5', 'sprites/platform5buona.png');
  game.load.image('platformcattiva5', 'sprites/platform5cattiva.png');
  game.load.image('muro5a', 'sprites/muro5a.png');
  game.load.image('muro5b', 'sprites/muro5b.png');
  game.load.image('muro5c', 'sprites/muro5c.png');

  game.load.spritesheet('fiammella6', 'sprites/fiammella1animata.png',28.33,57,18);

/**** passaggio 5 - 6 ****/
  game.load.image('bg56', 'sprites/sfondo56.png');
  game.load.image('ground56', 'sprites/ground56a.png');

	game.load.spritesheet('dante', 'sprites/dante.png',1024.05,715,11);

//Fiammella
  game.load.image('fiammellaf1', 'sprites/fiammellaf1.png');
  game.load.image('fiammellaf2', 'sprites/fiammellaf1.png');
  game.load.image('fiammellaf3', 'sprites/fiammellaf1.png');
  game.load.image('fiammellaf4', 'sprites/fiammellaf1.png');
  game.load.image('fiammellaf5', 'sprites/fiammellaf1.png');
  game.load.image('fiammellaf6', 'sprites/fiammellaf1.png');
	game.load.image('pausebutton', 'sprites/pausebutton.png');
	game.load.image('resumebutton', 'sprites/resume.png');
	game.load.image('infohelp', 'sprites/infogenerali.png')
}

function create() {

    game.input.mouse.capture = true;
    game.world.setBounds(0, 0, 44032, 4608);

/*****  Livello 0 ******/

    bg0 = game.add.sprite(0, 0,'bg0');

  // pavimento 0
    ground0 = game.add.sprite(0, 2285, 'ground0');
    game.physics.arcade.enable(ground0);
    ground0.body.immovable = true

  //Touchpoint 0
    tp0 = game.add.sprite(950, 1923, 'tp0');
    game.physics.arcade.enable(tp0);
    tp0.body.immovable = true;

  // Istruzioni 0
    info0 = game.add.sprite(1157, 1876, 'info0'); //(+100, -284)
    game.physics.arcade.enable(info0);
    info0.alpha = 0;

  //platforms 0
    platform0a = game.add.physicsGroup();
    platform0a.create(1880, 2199, 'platform0a');
    platform0a.create(2300, 2100, 'platform0a');
  	platform0a.create(2600, 2199, 'platform0a');
  	platform0a.create(2920, 2199, 'platform0a');
    platform0a.create(3300, 2200, 'platform0a');
  	platform0a.create(3420, 2100, 'platform0a');
  	platform0a.create(3700, 2200, 'platform0a');
    platform0a.setAll('body.immovable', true);

	  platform0d = game.add.sprite(3050, 2132, 'platform0d');
    game.physics.arcade.enable(platform0d);
	  platform0d.body.immovable = true;

	  platform0f = game.add.sprite(3830, 2088, 'platform0f');
    game.physics.arcade.enable(platform0f);
	  platform0f.body.immovable = true;

/**** passaggio 0 - 1 ****/

    bg01 = game.add.sprite(4096, 0,'bg01');

    // platforms 0 - 1
     platform0scale= game.add.physicsGroup();
     platform0scale.create(4100, 2060, 'platform0scale');
     platform0scale.create(4185, 1980, 'platform0scale');
     platform0scale.create(4270, 1920, 'platform0scale');
     platform0scale.create(4355, 1850, 'platform0scale');
     platform0scale.create(4440, 1770, 'platform0scale');
     platform0scale.create(4530, 1720, 'platform0scale');
     platform0scale.create(4625, 1650, 'platform0scale');
     platform0scale.create(4725, 1580, 'platform0scale');
     platform0scale.create(4815, 1515, 'platform0scale');
     platform0scale.create(4890, 1460, 'platform0scale');
     platform0scale.create(4930, 1460, 'platform0scale');
     platform0scale.create(4970, 1460, 'platform0scale');
     platform0scale.setAll('body.immovable', true);
     platform0scale.alpha = 0;

	   platform0b = game.add.sprite(5000, 1350, 'platform0b');
     game.physics.arcade.enable(platform0b);
	   platform0b.body.immovable = true;


/*****  Livello 1******/

    bg24 = game.add.sprite(18280, 2005,'bg24');
  	bg2 = game.add.sprite(11204, 0,'bg2');
  	bg1 = game.add.sprite(5120, 0,'bg1');

   // pavimento 1
    ground1a = game.add.sprite(5135, 1300, 'ground1a');
    game.physics.arcade.enable(ground1a);
    ground1a.body.immovable = true
	  ground1a.alpha = 0;

	  ground1b = game.add.sprite(6680, 1460, 'ground1b');
    game.physics.arcade.enable(ground1b);
    ground1b.body.immovable = true
	  ground1b.alpha = 0;

	  ground1c = game.add.sprite(7780, 1400, 'ground1c');
    game.physics.arcade.enable(ground1c);
    ground1c.body.immovable = true;
	  ground1c.alpha = 0;

  	ground1d = game.add.sprite(9650,1350,'ground1d');
  	game.physics.arcade.enable(ground1d);
    ground1d.body.immovable = true;
  	ground1d.alpha = 0;

  	ground1e = game.add.sprite(10758, 1325,'ground1e');
  	game.physics.arcade.enable(ground1e);
    ground1e.body.immovable = true;
	  ground1e.alpha = 0;

   //Touchpoint1
    tp1 = game.add.sprite(5906, 965, 'tp1');
    game.physics.arcade.enable(tp1);
    tp1.body.immovable = true;

   // Istruzioni 1
    info1 = game.add.sprite(6200, 962, 'info1');
    game.physics.arcade.enable(info1);
    info1.alpha = 0;

  //platforms 1
    //gialle220
    platform1a = game.add.physicsGroup();
	  platform1a.create(6800, 1150, 'platform1a');
    platform1a.setAll('body.immovable', true);

    //blu 330
    platform1b = game.add.physicsGroup();
    platform1b.create(8335, 1200, 'platform1b');
    platform1b.setAll('body.immovable', true);

    //azzurre 440
    platform1c = game.add.physicsGroup();
    platform1c.create(10370,1220, 'platform1c');
	  platform1c.create(10790,1115, 'platform1c');
	  platform1c.create(11025,960, 'platform1c');
    platform1c.create(10000,570, 'platform1c');
    platform1c.create(9154,405, 'platform1c');
    platform1c.create(9550,405, 'platform1c');
    platform1c.setAll('body.immovable', true);

    platform1g = game.add.sprite(8936, 765, 'platform1g');
    game.physics.arcade.enable(platform1g);
    platform1g.body.immovable = true

    //verdi grandi
    platform1d = game.add.physicsGroup();
    platform1d.create(9848,1115, 'platform1d');
    platform1d.setAll('body.immovable', true);

    platform1f = game.add.sprite(11382, 1100, 'platform1f');
    game.physics.arcade.enable(platform1f);
    platform1f.body.immovable = true

    platform1e = game.add.sprite(11875, 1063, 'platform1e');
    game.physics.arcade.enable(platform1e);
    platform1e.body.immovable = true

  //massi per nascondersi

	  masso1a= game.add.sprite(7000, 1027, 'masso1a');
	  game.physics.arcade.enable(masso1a);
    masso1a.body.immovable = true;

	  masso1b= game.add.sprite(8650, 1057, 'masso1b');
    game.physics.arcade.enable(masso1b);
    masso1b.body.immovable = true;

	  masso1c= game.add.sprite(10085, 993, 'masso1c');
    game.physics.arcade.enable(masso1c);
    masso1c.body.immovable = true

	  masso1d= game.add.sprite(11400, 965, 'masso1d');
    game.physics.arcade.enable(masso1d);
    masso1d.body.immovable = true

	  masso1e= game.add.sprite(10420, 630, 'masso1e');
    game.physics.arcade.enable(masso1e);
    masso1e.body.immovable = true


  //fiammella
    fiammella1 = game.add.sprite(8980, 172, 'fiammella1');
    game.physics.arcade.enable(fiammella1);
    fiammella1.animations.add('fiammella',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]);
    fiammella1.animations.play('fiammella',8, true);

	  bordo1= game.add.sprite(5120, 2100, 'bordo1');
    game.physics.arcade.enable(bordo1);
    bordo1.body.immovable = true
	  bordo1.alpha = 0;

/**** livello 2 ****/

  // pavimento 2
    linea2 = game.add.sprite(12228, 1330, 'linea2');
    game.physics.arcade.enable(linea2);
    linea2.body.immovable = true;
	  linea2.alpha = 0;

	  ground2 = game.add.sprite(12228, 3840, 'ground2');
    game.physics.arcade.enable(ground2);
    ground2.body.immovable = true
    ground2.alpha = 0;

  //Touchpoint 2
    tp2 = game.add.sprite(13600, 3335, 'tp2');
    game.physics.arcade.enable(tp2);
    tp2.body.immovable = true;

  // Istruzioni 2
    info2 = game.add.sprite(14000, 3411, 'info2');
    game.physics.arcade.enable(info2);
    info2.alpha = 0;

  //platform2
    platform2a = game.add.physicsGroup();
    platform2a.create(14453, 3700, 'platform2a');
    platform2a.create(14853, 3550, 'platform2a');
    platform2a.create(14700, 3250, 'platform2a');
    platform2a.create(14853, 2950, 'platform2a');
    platform2a.create(15453, 2950, 'platform2a');
    platform2a.create(15500, 3500, 'platform2a');
    platform2a.create(15800, 3650, 'platform2a');
    platform2a.create(16453, 3700, 'platform2a');
    platform2a.create(16853, 3550, 'platform2a');
    platform2a.create(16153, 3350, 'platform2a');
    platform2a.create(16700, 3250, 'platform2a');
    platform2a.create(16400, 3100, 'platform2a');
    platform2a.create(16853, 2950, 'platform2a');
    platform2a.create(17800, 3150, 'platform2a');
    platform2a.create(17500, 3600, 'platform2a');
    platform2a.create(17200, 3400, 'platform2a');
    platform2a.setAll('body.immovable', true);

  //platform infuocata

    platforminfuocata2_a = game.add.physicsGroup();
    platforminfuocata2_b = game.add.physicsGroup();
    platforminfuocata2_a.create(15158, 3365, 'platforminfuocata2');
    platforminfuocata2_b.create(14400, 3100, 'platforminfuocata2');
    platforminfuocata2_a.create(15800, 3150, 'platforminfuocata2');
    platforminfuocata2_b.create(17000, 3150, 'platforminfuocata2');
    platforminfuocata2_b.create(17453, 2950, 'platforminfuocata2');
    platforminfuocata2_a.setAll('body.immovable', true);
    platforminfuocata2_b.setAll('body.immovable', true);

  // fiammella2-3
    fiammella2 = game.add.sprite(18050, 3700, 'fiammella2');
    game.physics.arcade.enable(fiammella2);
    fiammella2.animations.add('fiammella2',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]);
    fiammella2.animations.play('fiammella2',8, true);

	  fiammella3 = game.add.sprite(17300, 2700, 'fiammella3');
	  game.physics.arcade.enable(fiammella3);
	  fiammella3.animations.add('fiammella3',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]);
    fiammella3.animations.play('fiammella3',8, true);

/**** passaggio 2 - 4 ****/

  	game.physics.arcade.enable(bg24);
  	bg24.body.immovable = true;

  	muro24 = game.add.sprite (18400, 3300,'muro24');
  	game.physics.arcade.enable(muro24);
  	muro24.body.immovable = true;
  	muro24.alpha = 0;

  	platform24a = game.add.sprite(18350, 3150,'platform24a');
  	game.physics.arcade.enable(platform24a);
  	platform24a.body.immovable = true;

  	teletrasporto241 = game.add.sprite(19150, 2930,'teletrasporto241');
  	game.physics.arcade.enable(teletrasporto241);
  	teletrasporto241.body.immovable = true;
  	teletrasporto241.alpha = 0;

//****Livello 4****//
    bg45 = game.add.sprite(34816, 768,'bg45');
  	bg4 = game.add.sprite(26624, 138,'bg4');
  //muro
  	muro4 = game.add.sprite(26525, 0, 'muro4');
  	game.physics.arcade.enable(muro4);
    muro4.body.immovable = true
  	muro4.alpha = 0;

  // pavimento 4
    ground4 = game.add.sprite(26624, 2990, 'ground4');
    game.physics.arcade.enable(ground4);
    ground4.body.immovable = true
  	ground4.alpha = 0;

  //Touchpoint 4
    tp4 = game.add.sprite(28500, 2640, 'tp4');
    game.physics.arcade.enable(tp4);
    tp4.body.immovable = true;

  // Istruzioni 4
    info4 = game.add.sprite(28750, 2500, 'info4');
    game.physics.arcade.enable(info4);
    info4.alpha = 0;

  //platform4 aggrappo
	  aggrappo1 = game.add.sprite(30120, 2560, 'aggrappo1');
    game.physics.arcade.enable(aggrappo1);

  	aggrappo2 = game.add.sprite(29675, 2295, 'aggrappo2');
    game.physics.arcade.enable(aggrappo2);

  	aggrappo3 = game.add.sprite(29830, 2150, 'aggrappo3');
    game.physics.arcade.enable(aggrappo3);

  	aggrappo4 = game.add.sprite(29971, 1845, 'aggrappo4');
    game.physics.arcade.enable(aggrappo4);

  	aggrappo5 = game.add.sprite(30985, 2505, 'aggrappo5');
    game.physics.arcade.enable(aggrappo5);

  	aggrappo6 = game.add.sprite(31190, 2263, 'aggrappo6');
    game.physics.arcade.enable(aggrappo6);

  	aggrappo7 = game.add.sprite(31190, 2130, 'aggrappo7');
    game.physics.arcade.enable(aggrappo7);

  	aggrappo8 = game.add.sprite(32205, 2125, 'aggrappo8');
    game.physics.arcade.enable(aggrappo8);

  	aggrappo9 = game.add.sprite(32650, 2445, 'aggrappo9');
    game.physics.arcade.enable(aggrappo9);

  	aggrappo10 = game.add.sprite(32815, 1965, 'aggrappo10');
    game.physics.arcade.enable(aggrappo10);

  	aggrappo11= game.add.sprite(31194, 2567, 'aggrappo11');
  	game.physics.arcade.enable(aggrappo11);

  	aggrappo12= game.add.sprite(30387, 2090, 'aggrappo12');
  	game.physics.arcade.enable(aggrappo12);

  	aggrappo13= game.add.sprite(30850, 2075, 'aggrappo13');
  	game.physics.arcade.enable(aggrappo13);

  	aggrappo14 = game.add.physicsGroup();
    aggrappo14.create(31710, 2050, 'aggrappo14');
    aggrappo14.create(32035, 1960, 'aggrappo14');
    aggrappo14.setAll('body.immovable', true);

//cagne
	  cagna4a = game.add.sprite(29000, 2910, 'cagna4a');
    game.physics.arcade.enable(cagna4a);
  	cagna4a.animations.add ('corsadxa', [13,12,11,10,9,8,7]);
  	cagna4a.animations.add ('corsasxa', [0,1,2,3,4,5,6]);

  	cagna4b = game.add.sprite(30500, 2910, 'cagna4b');
    game.physics.arcade.enable(cagna4b);
    cagna4b.animations.add ('corsadxb', [13,12,11,10,9,8,7]);
    cagna4b.animations.add ('corsasxb', [0,1,2,3,4,5,6]);

    cagna4c = game.add.sprite(31500, 2910, 'cagna4c');
    game.physics.arcade.enable(cagna4c);
    cagna4c.animations.add ('corsadxc', [13,12,11,10,9,8,7]);
    cagna4c.animations.add ('corsasxc', [0,1,2,3,4,5,6]);

    cagna4ainizio = game.add.sprite(29000, 2910, 'cagna4ainizio');
    game.physics.arcade.enable(cagna4ainizio);
    cagna4ainizio.alpha=0;

    cagna4afine = game.add.sprite(30500, 2910, 'cagna4afine');
    game.physics.arcade.enable(cagna4afine);
    cagna4afine.alpha=0;

    cagna4binizio = game.add.sprite(30500, 2910, 'cagna4binizio');
    game.physics.arcade.enable(cagna4binizio);
    cagna4binizio.alpha=0;

    cagna4bfine = game.add.sprite(32000, 2910, 'cagna4bfine');
    game.physics.arcade.enable(cagna4bfine);
    cagna4bfine.alpha=0;

    cagna4cinizio = game.add.sprite(31500, 2910, 'cagna4cinizio');
    game.physics.arcade.enable(cagna4cinizio);
    cagna4cinizio.alpha=0;

    cagna4cfine = game.add.sprite(33000, 2910, 'cagna4cfine');
    game.physics.arcade.enable(cagna4cfine);
    cagna4cfine.alpha=0;

  //fiammella4
  	fiammella4 = game.add.sprite(31900, 1700, 'fiammella4');
    game.physics.arcade.enable(fiammella4);
  	fiammella4.animations.add('fiammella4',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]);
    fiammella4.animations.play('fiammella4',8, true);

  // fiammella5
    fiammella5 = game.add.sprite(33400, 1700, 'fiammella5');
    game.physics.arcade.enable(fiammella5);
	  fiammella5.animations.add('fiammella5',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]);
    fiammella5.animations.play('fiammella5',8, true);

/**** passaggio 4 - 5 ****/
  //pavimanto 45
    ground45 = game.add.sprite(34816, 2990, 'ground45');
    game.physics.arcade.enable(ground45);
    ground45.body.immovable = true;
	  ground45.alpha = 0;

//****Livello 5****//

    bg5 = game.add.sprite(35840, 221,'bg5');

	//vista notturna
	  bgn5 = game.add.sprite(40990, 235,'bgn5');
    game.physics.arcade.enable(bgn5);
    bgn5.alpha = 0;

  //ambientazione
    muro5a = game.add.sprite(36910, 1780,'muro5a');
    game.physics.arcade.enable(muro5a);
    muro5a.body.immovable = true;
	  muro5a.alpha = 0;

    muro5b = game.add.sprite(40945, 1700,'muro5b');
    game.physics.arcade.enable(muro5b);
    muro5b.body.immovable = true;
    muro5b.alpha = 0;

  //Touchpoint 5
    tp5 = game.add.sprite(38912, 1250, 'tp5');
    game.physics.arcade.enable(tp5);
    tp5.body.immovable = true;

	// pavimento 5
     ground5a = game.add.sprite(36905, 1682, 'ground5a');
     game.physics.arcade.enable(ground5a);
     ground5a.body.immovable = true

  // Istruzioni 5
    info5 = game.add.sprite(39300, 1300, 'info5');
    game.physics.arcade.enable(info5);
    info5.alpha = 0;

//PLATFORMS

  //platform5 mobili alto basso
    platformMobile5a = game.add.sprite(36000,2930, 'platformMobile5a');
    game.physics.arcade.enable(platformMobile5a);
    platformMobile5a.body.immovable = true;

    platformMobile5a2 = game.add.sprite(35900, 1341, 'platformMobile5a');
    game.physics.arcade.enable(platformMobile5a2);
    platformMobile5a2.body.immovable = true;

  //platform5 mobili destra sinistra
    platformMobile5b = game.add.sprite(36000, 2040, 'platformMobile5b');
    game.physics.arcade.enable(platformMobile5b);
    platformMobile5b.body.immovable = true;

  //platform5 fisse prima parte
    platform5 = game.add.physicsGroup();
    platform5.create(36400, 2304, 'platform5');
    platform5.create(35500, 1831, 'platform5');
    platform5.setAll('body.immovable', true);

  //platform fisse buone seconda parte

	  platformbuona5 = game.add.physicsGroup();
    platformbuona52 = game.add.physicsGroup();
    platformbuona5.create(41450, 1100, 'platformbuona5');
    platformbuona52.create(41730, 1365, 'platformbuona5');
	  platformbuona5.create(41200, 1365, 'platformbuona5');
    platformbuona5.create(41400, 1670, 'platformbuona5');
    platformbuona5.create(41050, 2100, 'platformbuona5');
    platformbuona52.create(41650, 1871, 'platformbuona5');
    platformbuona5.create(41500, 2300, 'platformbuona5');
    platformbuona52.create(41700, 2900, 'platformbuona5');
    platformbuona5.create(41200, 2550, 'platformbuona5');
    platformbuona5.create(41100, 2950, 'platformbuona5');
    platformbuona5.create(41445, 3243, 'platformbuona5');
    platformbuona52.create(41100, 3900, 'platformbuona5');
    platformbuona52.create(41100, 3450, 'platformbuona5');
    platformbuona52.create(41700, 4100, 'platformbuona5');
    platformbuona5.create(41550, 3700, 'platformbuona5');
    platformbuona5.create(41400, 4355, 'platformbuona5');
    platformbuona5.setAll('body.immovable', true);
    platformbuona52.setAll('body.immovable', true);

//visione notturna

    platformcattiva5 = game.add.physicsGroup();
    platformcattiva5.create(41730, 1365, 'platformcattiva5');
    platformcattiva5.create(41650, 1871, 'platformcattiva5');
    platformcattiva5.create(41700, 2900, 'platformcattiva5');
	  platformcattiva5.create(41100, 3900, 'platformcattiva5');
    platformcattiva5.create(41100, 3450, 'platformcattiva5');
    platformcattiva5.create(41700, 4100, 'platformcattiva5');
    platformcattiva5.setAll('body.immovable', true);
    platformcattiva5.alpha= 0;

  // fiammella6
    fiammella6 = game.add.sprite(41500, 600, 'fiammella6');
    game.physics.arcade.enable(fiammella6);
	  fiammella6.animations.add('fiammella6',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]);
    fiammella6.animations.play('fiammella6',8, true);
	
/**** passaggio 5 - 6 ****/
    bg56 = game.add.sprite(41990, 20,'bg56');

    ground56 = game.add.sprite(42850, 4500,'ground56');
    game.physics.arcade.enable(ground56);
    ground56.body.immovable = true;
    ground56.alpha=0;

    muro5c = game.add.sprite(41984, 0,'muro5c');
    game.physics.arcade.enable(muro5c);
    muro5c.body.immovable = true;
    muro5c.alpha = 0;

    fine = game.add.sprite (43700, 4350, 'fine')
    game.physics.arcade.enable(fine);
    fine.body.immovable = true;

//ANIMAZIONI

//Player
	player = game.add.sprite(0, 2100, 'player');
  game.physics.arcade.enable(player);

  player.animations.add('firstfall',[114,115,116,114,115,116,114,115,116,114,115,116]);

  player.animations.add('rundx',[0,1,2,3,4,5,6,7,8,9,10,11]);
  player.animations.add('runsx',[14,15,16,17,18,19,20,21,22,23,24,25]);

  player.animations.add('stopdx',[72,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91]);
  player.animations.add('stopsx',[93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112]);

  player.animations.add('accovacciamentodx',[56,57,58,59,60,61,62]);
  player.animations.add('accovacciamentosx',[68,67,66,65,64,63,63]);

  player.animations.add('accovacciamentodx2',[56,57,58,59,60,61,62,122,123,122,123,122,123,122,123,122,123,122,123,122,123,122,123,122,123,122,123,122,123,122,123,122,123,122,123,122,123,122,123,122,123,122,123]);
  player.animations.add('accovacciamentosx2',[67,66,65,64,63,63,63,126,127,126,127,126,127,126,127,126,127,126,127,126,127,126,127,126,127,126,127,126,127,126,127,126,127,126,127,126,127,126,127,126,127,126,127]);

  player.animations.add('jumpUpSx',[40,40,40,41,42,43,44,45,45,46,46,47]);
  player.animations.add('jumpDownSx',[48,48,49,49,50,51,52,53]);
  player.animations.add('jumpUpDx',[26,26,26,27,28,29,30,31,31,32,32,33]);
  player.animations.add('jumpDownDx',[34,34,35,35,36,37,38,39]);

  player.animations.add('buferaPiedidx',[134,134,134,135,135,135,136,136,136]);
  player.animations.add('buferaPiedisx',[137,137,137,138,138,138,139,139,139]);
  player.animations.add('buferaVolodx',[128,128,129,129,129,130,130,130]);
  player.animations.add('buferaVolosx',[131,131,131,132,132,132,133,133,133]);

  player.animations.add('hookUpDx',[140,141,142,143,144,145,146,147,148,149]);
  player.animations.add('hookUpSx',[150,151,152,153,154,155,156,157,158,159]);

  //Bufera
	 bufera = game.add.sprite(6500,0, 'bufera');
   game.physics.arcade.enable(bufera);
   bufera.animations.add('buferaanimazione',[0,1,2,3,4]);
	 bufera.alpha = 0;

   player.body.collideWorldBounds = true;
   player.body.gravity.y = 400;

	 game.camera.follow(player);

	//colonne livello 0
	  arco0 = game.add.sprite(3410, 1168, 'arco0');
    game.physics.arcade.enable(arco0);
    arco0.body.immovable = true;

	  colonna2 = game.add.sprite(1686, 1758, 'colonna2');
    game.physics.arcade.enable(colonna2);
    colonna2.body.immovable = true;

	  colonna3 = game.add.sprite(2089, 1758, 'colonna3');
    game.physics.arcade.enable(colonna3);
    colonna3.body.immovable = true;

	  colonna4 = game.add.sprite(2436, 1758, 'colonna4');
    game.physics.arcade.enable(colonna4);
    colonna4.body.immovable = true;

	  colonna5 = game.add.sprite(2797, 1758, 'colonna5');
    game.physics.arcade.enable(colonna5);
    colonna5.body.immovable = true;

	  colonna6 = game.add.sprite(3158, 1758, 'colonna6');
    game.physics.arcade.enable(colonna6);
    colonna6.body.immovable = true;

	  colonna7 = game.add.sprite(3543, 1758, 'colonna7');
    game.physics.arcade.enable(colonna7);
    colonna7.body.immovable = true;

	  colonna8 = game.add.sprite(3964, 1758, 'colonna8');
    game.physics.arcade.enable(colonna8);
    colonna8.body.immovable = true;

	//Dante
  	dante = game.add.sprite (43014, 3905, 'dante');
  	game.physics.arcade.enable(dante);
    dante.animations.add('fine',[0,1,2,3,4,5,6,7,8,9,10]);
  	dante.animations.play('fine',7,true);

	//teletrasporto livello 2-4
  	teletrasporto24 = game.add.sprite(18800, 1910,'teletrasporto24');
  	game.physics.arcade.enable(teletrasporto24);
  	teletrasporto24.body.immovable = true;

  	passaggio24teletrasporto = game.add.sprite(24670, 150,'passaggio24teletrasporto');
  	game.physics.arcade.enable(passaggio24teletrasporto);
  	passaggio24teletrasporto.body.immovable = true;

	//passaggio45
  	passaggio45 = game.add.sprite(33630, 140,'passaggio45');
  	game.physics.arcade.enable(passaggio45);
  	passaggio45.body.immovable = true;

	//fiammella raccolte

	  fiammellaf6 = game.add.sprite(925, 10 , 'fiammellaf6');
  	fiammellaf6.fixedToCamera=true;
  	fiammellaf6.alpha=0;

	  fiammellaf5 = game.add.sprite(900, 10 , 'fiammellaf5');
  	fiammellaf5.fixedToCamera=true;
  	fiammellaf5.alpha=0;

	  fiammellaf4 = game.add.sprite(875, 10 , 'fiammellaf4');
  	fiammellaf4.fixedToCamera=true;
  	fiammellaf4.alpha=0;

    fiammellaf3 = game.add.sprite(850, 10 , 'fiammellaf3');
  	fiammellaf3.fixedToCamera=true;
  	fiammellaf3.alpha=0;

  	fiammellaf2 = game.add.sprite(825, 10 , 'fiammellaf2');
  	fiammellaf2.fixedToCamera=true;
  	fiammellaf2.alpha=0;

  	fiammellaf1 = game.add.sprite(800, 10 , 'fiammellaf1');
  	fiammellaf1.fixedToCamera=true;
  	fiammellaf1.alpha=0;

  	infohelp = game.add.sprite(0,0,'infohelp');
  	infohelp.fixedToCamera=true;
  	infohelp.alpha=0;

    pausebutton = game.add.sprite(30, 30 , 'pausebutton');
  	pausebutton.fixedToCamera=true;
  	game.physics.arcade.enable(pausebutton);
  	pausebutton.body.immovable = true;
	  pausebutton.alpha=0;
    pausebutton.inputEnabled = true;
	  game.input.addMoveCallback(p, this);

	function p(pointer) {
    console.log(pointer.event);
	}

	  resumebutton = game.add.sprite(390, 650 , 'resumebutton');
  	resumebutton.fixedToCamera=true;
  	game.physics.arcade.enable(resumebutton);
  	resumebutton.body.immovable = true;
    resumebutton.alpha=0;
    resumebutton.inputEnabled = true;
  	game.input.addMoveCallback(p, this);

  function p(pointer) {
    console.log(pointer.event);
	}

//scene
  	copertina = game.add.sprite(0, 0 , 'copertina');
    copertina.fixedToCamera=true;

  	bottonecrediti = game.add.sprite(110, 350 , 'bottonecrediti');
    bottonecrediti.fixedToCamera=true;
  	bottonecrediti.alpha=0;
  	bottonecrediti.inputEnabled = true;
  	game.input.addMoveCallback(p, this);

	function p(pointer) {
  console.log(pointer.event);

	}

  	bottonestoria = game.add.sprite(735, 360 , 'bottonestoria');
    bottonestoria.fixedToCamera=true;
  	bottonestoria.alpha=0;
  	bottonestoria.inputEnabled = true;
  	game.input.addMoveCallback(p, this);

	function p(pointer) {
    console.log(pointer.event);
	}

  	bottoneplatform = game.add.sprite(415, 350 , 'bottoneplatform');
    bottoneplatform.fixedToCamera=true;
  	bottoneplatform.alpha=0;
  	bottoneplatform.inputEnabled = true;
  	game.input.addMoveCallback(p, this);

	function p(pointer) {
    console.log(pointer.event);
	}

	  scena1 = game.add.sprite(0, 0 , 'scena1');
  	scena1.fixedToCamera=true;
  	scena1.alpha=0

	  scena2 = game.add.sprite(0, 0 , 'scena2');
  	scena2.fixedToCamera=true;
  	scena2.alpha=0

	  scena3 = game.add.sprite(0, 0 , 'scena3');
  	scena3.fixedToCamera=true;
  	scena3.alpha=0

	  finale1 = game.add.sprite(0, 0 , 'finale1');
  	finale1.fixedToCamera=true;
  	finale1.alpha=0

	  finale2 = game.add.sprite(0, 0 , 'finale2');
  	finale2.fixedToCamera=true;
  	finale2.alpha=0

	  paginacrediti = game.add.sprite(0, 0 , 'paginacrediti');
  	paginacrediti.fixedToCamera=true;
  	paginacrediti.alpha=0

	  bottonecopertina = game.add.sprite(20, 700 , 'bottonecopertina');
  	bottonecopertina.fixedToCamera=true;
	  bottonecopertina.alpha=0;
	  bottonecopertina.inputEnabled = true;
	  game.input.addMoveCallback(p, this);

	function p(pointer) {
    console.log(pointer.event);
	}

  	bottonecopertinafinale = game.add.sprite(950, 20 , 'bottonecopertinafinale');
    bottonecopertinafinale.fixedToCamera=true;
  	bottonecopertinafinale.alpha=0;
  	bottonecopertinafinale.inputEnabled = true;
  	game.input.addMoveCallback(p, this);

	function p(pointer) {
    console.log(pointer.event);
	}

  	bottonerestart = game.add.sprite(890, 20 , 'bottonerestart');
    bottonerestart.fixedToCamera=true;
  	bottonerestart.alpha=0;
  	bottonerestart.inputEnabled = true;
  	game.input.addMoveCallback(p, this);

	function p(pointer) {
    console.log(pointer.event);
	}

  	bottonescenadopo = game.add.sprite(80, 700 , 'bottonescenadopo');
    bottonescenadopo.fixedToCamera=true;
  	bottonescenadopo.alpha=0;
  	bottonescenadopo.inputEnabled = true;
  	game.input.addMoveCallback(p, this);

	function p(pointer) {
    console.log(pointer.event);
	}

  	bottonescena1si = game.add.sprite (450,700, 'bottonescena1si');
  	bottonescena1si.fixedToCamera=true;
  	bottonescena1si.alpha=0;

  	bottonescena2si = game.add.sprite (510,700, 'bottonescena2si');
  	bottonescena2si.fixedToCamera=true;
  	bottonescena2si.alpha=0;

  	bottonescena3si = game.add.sprite (570,700, 'bottonescena3si');
  	bottonescena3si.fixedToCamera=true;
  	bottonescena3si.alpha=0;

  	bottonescena1no = game.add.sprite (450,700, 'bottonescena1no');
  	bottonescena1no.fixedToCamera=true;
  	bottonescena1no.alpha=0;
  	bottonescena1no.inputEnabled = true;
  	game.input.addMoveCallback(p, this);

	function p(pointer) {
    console.log(pointer.event);
	}

  	bottonescena2no = game.add.sprite (510,700, 'bottonescena2no');
  	bottonescena2no.fixedToCamera=true;
  	bottonescena2no.alpha=0;
  	bottonescena2no.inputEnabled = true;
  	game.input.addMoveCallback(p, this);

	function p(pointer) {
    console.log(pointer.event);
	}

  	bottonescena3no = game.add.sprite (570,700, 'bottonescena3no');
  	bottonescena3no.fixedToCamera=true;
  	bottonescena3no.alpha=0;
  	bottonescena3no.inputEnabled = true;
  	game.input.addMoveCallback(p, this);

	function p(pointer) {
    console.log(pointer.event);
	}

//comandi
    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    A = game.input.keyboard.addKey(Phaser.Keyboard.A); //salto doppio
    Z = game.input.keyboard.addKey(Phaser.Keyboard.Z); //visione notturna

    game.time.events.loop(5000, hidePlatform);
}

//piattaforme che scompaiono livello 2
function hidePlatform(){
  state = !state;
    // print x : y player
    console.log("X: " + player.x + "  Y:    " + player.y);
  }

//visione votturna livello 5
function showPlatform(){
    platformcattiva5.alpha = 0;
    bgn5.alpha = 0;
}


function update () {
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
  game.scale.scrollByPages =true;
  game.scale.refresh();
  game.autoCenter = true;

  platforminfuocata2_a.setAll('body.enable',state);
  platforminfuocata2_a.alpha = state;

  platforminfuocata2_b.setAll('body.enable',!state);
  platforminfuocata2_b.alpha = !state;


  //caduta iniziale
   player.body.gravity.y = 400;
   player.body.velocity.x = 0;

//**** livello 0 e 0 - 1****//
	game.physics.arcade.collide(player, ground0);
  game.physics.arcade.collide(player, platform0a);
	game.physics.arcade.collide(player, platform0b);
	game.physics.arcade.collide(player, platform0c);
	game.physics.arcade.collide(player, platform0d);
	game.physics.arcade.collide(player, platform0e);
	game.physics.arcade.collide(player, platform0f);
  game.physics.arcade.collide(player, platform0scale);
  game.physics.arcade.overlap(player, tp0,showInfo0);

//**** livello 1 e 1 - 2****//
  game.physics.arcade.collide(player, ground1a);
	game.physics.arcade.collide(player, ground1b);
	game.physics.arcade.collide(player, ground1c);
	game.physics.arcade.collide(player, ground1d);
	game.physics.arcade.collide(player, ground1e);
  game.physics.arcade.collide(player, platform1a);
  game.physics.arcade.collide(player, platform1b);
  game.physics.arcade.collide(player, platform1c);
  game.physics.arcade.collide(player, platform1d);
	game.physics.arcade.collide(player, platform1g);
	game.physics.arcade.collide(player, platform1h);
	game.physics.arcade.collide(player, platform1f);
	game.physics.arcade.collide(player, platform1e);

  game.physics.arcade.overlap(player, tp1, showInfo1);
  game.physics.arcade.collide(player, masso1a);
	game.physics.arcade.collide(player, masso1b);
	game.physics.arcade.collide(player, masso1c);
	game.physics.arcade.collide(player, masso1d);
	game.physics.arcade.collide(player, masso1e);
	game.physics.arcade.collide(player, linea2);

  game.physics.arcade.overlap(player, fiammella1, collect1);
  game.physics.arcade.overlap(player, bordo1, restart1);

//**** livello 2 e 2 - 4****//
  game.physics.arcade.collide(player, ground2);
  game.physics.arcade.collide(player, platform2a);
  game.physics.arcade.collide(player, platforminfuocata2_a);
  game.physics.arcade.collide(player, platforminfuocata2_b);
	game.physics.arcade.collide(player, muro24);
	game.physics.arcade.collide(player, platform24a);
  game.physics.arcade.overlap(player, tp2, showInfo2);
  game.physics.arcade.overlap(player, fiammella2, collect2);
  game.physics.arcade.overlap(player, fiammella3, collect3);
	game.physics.arcade.overlap(player, teletrasporto241, teletrasporto24);

//**** livello 4 e 4 - 5****//
  game.physics.arcade.collide(player, ground4);
  game.physics.arcade.collide(player, ground45);
  game.physics.arcade.overlap(player, muro4, teletrasporto42);
  game.physics.arcade.overlap(cagna4a, cagna4ainizio, cagna4adx);
  game.physics.arcade.overlap(cagna4a, cagna4afine, cagna4asx);
  game.physics.arcade.overlap(cagna4b, cagna4binizio, cagna4bdx);
  game.physics.arcade.overlap(cagna4b, cagna4bfine, cagna4bsx);
  game.physics.arcade.overlap(cagna4c, cagna4cinizio, cagna4cdx);
  game.physics.arcade.overlap(cagna4c, cagna4cfine, cagna4csx);
  game.physics.arcade.overlap(player,cagna4a, restart4a);
  game.physics.arcade.overlap(player,cagna4b, restart4b);
  game.physics.arcade.overlap(player,cagna4c, restart4c);
  game.physics.arcade.overlap(player, aggrappo1, hook1);
  game.physics.arcade.overlap(player, aggrappo2, hook2);
  game.physics.arcade.overlap(player, aggrappo3, hook3);
  game.physics.arcade.overlap(player, aggrappo4, hook4);
  game.physics.arcade.overlap(player, aggrappo5, hook5);
  game.physics.arcade.overlap(player, aggrappo6, hook6);
  game.physics.arcade.overlap(player, aggrappo7, hook7);
  game.physics.arcade.overlap(player, aggrappo8, hook8);
  game.physics.arcade.overlap(player, aggrappo9, hook9);
  game.physics.arcade.overlap(player, aggrappo10, hook10);
  game.physics.arcade.overlap(player, aggrappo12, hook12);
  game.physics.arcade.overlap(player, aggrappo11, hook11);
  game.physics.arcade.overlap(player, aggrappo13, hook13);
  game.physics.arcade.overlap(player, aggrappo14, hook14);
  game.physics.arcade.overlap(player, tp4, showInfo4);
  game.physics.arcade.overlap(player, fiammella4, collect4);

//**** livello 5 e 5 - 6****//
  game.physics.arcade.collide(player, ground5a);

  game.physics.arcade.collide(player, muro5a);
  game.physics.arcade.collide(player, muro5b);
  game.physics.arcade.collide(player, muro5c);

  game.physics.arcade.overlap(player, tp5, showInfo5);
  game.physics.arcade.overlap(player, fiammella5, collect5);

  game.physics.arcade.collide(player,platform5);

  game.physics.arcade.collide(player,platformMobile5a);
  game.physics.arcade.collide(player,platformMobile5a2);
  game.physics.arcade.collide(player,platformMobile5b);

  game.physics.arcade.collide(player, platformbuona5);
  game.physics.arcade.collide(player, ground56);
  game.physics.arcade.overlap(player, platformbuona52, restart5);
  game.physics.arcade.overlap(player, fiammella6, collect6);
  game.physics.arcade.overlap(player, fine, finali);

	//****COMANDI****//

 //   blocco gioco

if (pausebutton.alpha==1 && pausebutton.input.pointerOver() && game.input.activePointer.leftButton.isDown){
		infohelp.alpha = 1;
		resumebutton.alpha=1;
		game.paused = true;
	}

  game.input.onDown.add(unpause, self);

function unpause(event){
   if (game.paused && resumebutton.alpha==1 && resumebutton.input.pointerOver()&& game.input.activePointer.leftButton.isDown)
		{
        infohelp.alpha = 0;
		resumebutton.alpha=0;
		game.paused = false;
		}
	}

//mouseoverimmagini
if(copertina.alpha==1){

		if (bottonecrediti.input.pointerOver()&& game.input.activePointer.leftButton.isDown){
        copertina.alpha = 0;
        paginacrediti.alpha = 1;
        bottonecopertina.alpha = 1;
	    }

		if (bottonestoria.input.pointerOver()&& game.input.activePointer.leftButton.isDown){
        copertina.alpha = 0;
        scena1.alpha = 1;
        bottonecopertina.alpha = 1;
	    }
		if (bottoneplatform.input.pointerOver()&& game.input.activePointer.leftButton.isDown){
        copertina.alpha = 0;
	    }
	}

	if (paginacrediti.alpha==1 && bottonecopertina.alpha==1 && bottonecopertina.input.pointerOver()&& game.input.activePointer.leftButton.isDown){
      paginacrediti.alpha = 0;
      bottonecopertina.alpha = 0;
      copertina.alpha = 1;
}

else	if (scena1.alpha==1){
		bottonescena1si.alpha=1;
		bottonescena2no.alpha=1;
		bottonescena3no.alpha=1;
		bottonecopertina.alpha=1;

		if (bottonecopertina.alpha==1 && bottonecopertina.input.pointerOver()&& game.input.activePointer.leftButton.isDown){
      scena1.alpha = 0;
      bottonecopertina.alpha = 0;
      bottonescena1si.alpha=0;
      bottonescena2no.alpha=0;
      bottonescena3no.alpha=0;
      copertina.alpha = 1;
		}
		if (bottonescena2no.alpha==1 && bottonescena2no.input.pointerOver()&& game.input.activePointer.leftButton.isDown){
      scena1.alpha = 0;
      scena2.alpha=1;
      bottonescena1si.alpha=0;
      bottonescena1no.alpha=1;
      bottonescena2si.alpha=1;
      bottonescena3no.alpha=1;
		}
	}

else	if (scena2.alpha==1){
		bottonescena1no.alpha=1;
		bottonescena2si.alpha=1;
		bottonescena3no.alpha=1;
		bottonecopertina.alpha=1;

		if (bottonecopertina.alpha==1 && bottonecopertina.input.pointerOver()&& game.input.activePointer.leftButton.isDown){
      scena2.alpha = 0;
      bottonecopertina.alpha = 0;
      bottonescena1no.alpha=0;
      bottonescena2si.alpha=0;
      bottonescena3no.alpha=0;
      copertina.alpha = 1;
		}

		if (bottonescena1no.alpha==1 && bottonescena1no.input.pointerOver()&& game.input.activePointer.leftButton.isDown){
      scena1.alpha = 1;
      scena2.alpha=0;
      bottonescena1si.alpha=1;
      bottonescena1no.alpha=0;
      bottonescena2si.alpha=0;
      bottonescena2no.alpha=1;
      bottonescena3no.alpha=1;
		}
		if (bottonescena3no.alpha==1 && bottonescena3no.input.pointerOver()&& game.input.activePointer.leftButton.isDown){
      scena3.alpha = 1;
      scena2.alpha=0;
      bottonescena3si.alpha=1;
      bottonescena3no.alpha=0;
      bottonescena2si.alpha=0;
      bottonescena2no.alpha=1;
      bottonescena1no.alpha=1;
		}
	}

else	if (scena3.alpha==1){
		bottonescena1no.alpha=1;
		bottonescena2no.alpha=1;
		bottonescena3si.alpha=1;
		bottonecopertina.alpha=1;
		bottonescenadopo.alpha=1;

		if (bottonecopertina.alpha==1 && bottonecopertina.input.pointerOver()&& game.input.activePointer.leftButton.isDown){
      scena3.alpha = 0;
      bottonecopertina.alpha = 0;
      bottonescena1no.alpha=0;
      bottonescena2no.alpha=0;
      bottonescena3si.alpha=0;
      bottonescenadopo.alpha=0;
      copertina.alpha = 1;
		}

		if (bottonescena1no.alpha==1 && bottonescena1no.input.pointerOver()&& game.input.activePointer.leftButton.isDown){
      scena1.alpha = 1;
      scena3.alpha=0;
      bottonescena1si.alpha=1;
      bottonescena1no.alpha=0;
      bottonescena2no.alpha=1;
      bottonescena2no.alpha=1;
      bottonescena3si.alpha=0;
      bottonescena3no.alpha=1;
      bottonescenadopo.alpha=0;
		}
		if (bottonescena2no.alpha==1 && bottonescena2no.input.pointerOver()&& game.input.activePointer.leftButton.isDown){
      scena2.alpha = 1;
      scena3.alpha=0;
      bottonescena3si.alpha=0;
      bottonescena3no.alpha=1;
      bottonescena2si.alpha=1;
      bottonescena2no.alpha=0;
      bottonescena1no.alpha=1;
      bottonescenadopo.alpha=0;
		}
		if (bottonescenadopo.alpha==1 && bottonescenadopo.input.pointerOver()&& game.input.activePointer.leftButton.isDown){
      scena3.alpha=0;
      bottonescena3si.alpha=0;
      bottonescena2no.alpha=0;
      bottonescena1no.alpha=0;
      bottonescenadopo.alpha=0;
      bottonecopertina.alpha=0;
		}
	}

///animazioni

if(((player.x >=0) && (firstfall==0))){
player.animations.play('firstfall',15,false);
jump=1;
 }
else if((player.x >=12204) && (player.x <=13228) && (firstfall==1)){
firstfall=0;
 }

	if (cursors.left.isDown){
	direzione = 1;
    player.body.velocity.x = -300;
     if(jump == 0) {
      if (aggrappo){
        player.animations.play('hookUpSx',10,false);
      }
      else {
        player.animations.play('runsx',10,false);
      }
      aggrappo=0;
    }
    else {
    player.animations.play('jumpUpSx',10,false);
    }
  }

else if (cursors.right.isDown){
  direzione = 0;
  player.body.velocity.x = 300;
    if (jump == 0) {
      if (aggrappo){
        player.animations.play('hookUpDx',10,false);
      }
      else {
        player.animations.play('rundx',10,false);
      }
      aggrappo=0;
    }
    else {
    player.animations.play('jumpUpDx',10,false);
    }
  }

if((jumpButton.isDown) && (player.body.onFloor() || player.body.touching.down)){
      jump = 1;
      player.body.velocity.y = -300;
      if (direzione){
        player.animations.play('jumpUpSx',10,false);
        }
      else {
        player.animations.play('jumpUpDx',10,false);
      }
  }

else if(player.body.onFloor() || player.body.touching.down){
  firstfall=1;
  if (jump == 1){
    jump = 0;
    if (direzione){
      player.animations.play('jumpDownSx',15,false);
      }
    else {
      player.animations.play('jumpDownDx',15,false);
    }
    count=0;
}

    else if(count > 50){
      if((player.body.velocity.x == 0) && (accovaccio == 0)){
        if (direzione){
          player.animations.play('stopsx',5,false);
        }
        else {
          player.animations.play('stopdx',5,false);
        }
      }
    }
    count ++;
  }

if (aggrappo){
  if (direzione){
    player.animations.play('hookUpSx',5,false);
  }
  else {
    player.animations.play('hookUpDx',5,false);
  }
  aggrappo = 0;
  jump = 1;
}

//****Livello 0****//
    function showInfo0 (player, tp0){
		fiammellaf1.alpha=0.4
		fiammellaf2.alpha=0.4
		fiammellaf3.alpha=0.4
		fiammellaf4.alpha=0.4
		fiammellaf5.alpha=0.4
		fiammellaf6.alpha=0.4
		pausebutton.alpha=1;
    }

    //box info0
  if((player.x >= 900)&&(player.x <= 1400)){
      info0.alpha = 1;
    }
  else {
      info0.alpha = 0;
    }
//****Livello 1****//
    function showInfo1 (player, tp1){
      level1 = true;
    }
 //box info1
  if((player.x >= 5900)&&(player.x <= 6200)){
      info1.alpha = 1;
    }
  else {
      info1.alpha = 0;
    }
//salto livello 1
	if ((jumpButton.isDown)&& (player.body.onFloor() || player.body.touching.down && level1)){
      jump = 1;
      player.body.velocity.y = -400;
        if (direzione){
          player.animations.play('jumpUpSx',10,false);
          }
        else {
          player.animations.play('jumpUpDx',10,false);
        }
      }

    //box info1
  if((player.x >= 5827)&&(player.x <= 6140)){
      info1.alpha = 1;
    }
  else {
      info1.alpha = 0;
    }

    function collect1(player, fiammella1){
        fiammella1.alpha = 0;
		fiammellaf1.alpha = 1;
		pu1=1;
    }

//restart 1
    function restart1 (player, bordo1){
     player.x = 5906;
	 player.y = 1000;
    }

  //Posizione massi
  var massso1 = 7000;
  var masso2 = 8650;
  var masso3 =  10085;
  var masso4 = 11400;
  var masso5 = 10420;

  //accovacciamento
  if (cursors.down.isDown && level1){
      if(accovaccio == 0){
          if (accovacciobufera == 1) {
            if (direzione){
              player.animations.play('accovacciamentosx2',10,false);
            }
            else{
              player.animations.play('accovacciamentodx2',10,false);
            }
          }
          else {
            if (direzione){
              player.animations.play('accovacciamentosx',10,false);
            }
            else{
              player.animations.play('accovacciamentodx',10,false);
            }
          }
          accovaccio = 1;
        }
    }

  else {
      accovaccio = 0;
    }

//accovacciamento dietro ai sassi

  if((player.x >= 6500)&&(player.x <= 12228)){
      //bufera
      if(state){
        accovacciobufera = 1;
    		bufera.animations.play('buferaanimazione',10,true);
    		bufera.alpha=0.3;
		console.log("BUFERAAAAAAAAAAAAA!!!!!");
        if(player.x >= 6700 && player.x <= 7000 && accovaccio && player.y <= 1027 && player.y >= 900){
            player.body.velocity.x = 0;
        }

        else if(player.x >= 8350 && player.x <= 8650 && accovaccio && player.y <= 1057 && player.y >= 900){
            player.body.velocity.x = 0;
        }

        else if(player.x >= 9785 && player.x <= 10085 && accovaccio && player.y <= 993 && player.y >= 890){
            player.body.velocity.x = 0;
        }

        else if(player.x >= 11100 && player.x <= 11400 && accovaccio && player.y <= 965 && player.y >= 850){
            player.body.velocity.x = 0;
        }

        else if(player.x >= 9720 && player.x <= 10420 && accovaccio && player.y <= 630 && player.y >= 500){
            player.body.velocity.x = 0;
        }
        else {
    			if (accovaccio){
    				player.body.velocity.x = -30;
    				}
    			else {
    				player.body.velocity.x = -70;
    				if (player.body.onFloor() || player.body.touching.down) {
    					if (direzione){
    						player.animations.play('buferaPiedisx',10,true);
    						}
    					else{
    						player.animations.play('buferaPiedidx',10,true);
            		}
    					}
    				else {
            	if (direzione){
    					player.animations.play('buferaVolosx',10,true);
    					}
    					else{
    					player.animations.play('buferaVolodx',10,true);
    					}
          	}
    			}
        }
		  }

      else {
        accovacciobufera = 0;
		bufera.animations.stop;
  	    bufera.alpha=0;
      }
  }

//****Livello 2****//
    function showInfo2 (player, tp2){
        level2Success = true;
        level2 = true;
    }
 //box info2
  if((player.x >= 13780)&&(player.x <= 14100)){
      info2.alpha = 1;
    }
  else {
      info2.alpha = 0;
    }
    //doppio salto
  if ((A.isDown)&& (player.body.onFloor() || player.body.touching.down && (level2))) {
      jump = 1;
      player.body.velocity.y = -500;
        if (direzione){
          player.animations.play('jumpUpSx',10,false);
          }
        else {
          player.animations.play('jumpUpDx',10,false);
        }
      }

  function collect2 (player, fiammella2){
        fiammella2.alpha = 0;
		fiammellaf2.alpha = 1;
		pu2=1;
	  
    }

	function collect3 (player, fiammella3){
        fiammella3.alpha = 0;
		fiammellaf3.alpha = 1;
		pu3=1;
    }

	function teletrasporto24 (player,teletrasporto241){
  	player.x = 26630;
  	player.y = 2825;
	}
  function teletrasporto42 (player,muro4){
  	player.x = 18900;
  	player.y = 2985;
	}

//****Livello 4****//
 function showInfo4 (player, tp4){
 level4=true;
}

function cagna4adx (cagna4a, cagna4ainizio) {
 cagna4a.body.velocity.x=400;
 cagna4a.animations.play('corsadxa',14,true);
}

function cagna4asx (cagna4a, cagna4afine) {
 cagna4a.body.velocity.x=- 400;
 cagna4a.animations.play('corsasxa',14,true);
}

function cagna4bdx (cagna4b, cagna4binizio) {
 cagna4b.body.velocity.x=400;
 cagna4b.animations.play('corsadxb',14,true);
}

function cagna4bsx (cagna4b, cagna4bfine) {
 cagna4b.body.velocity.x=- 400;
 cagna4b.animations.play('corsasxb',14,true);
}

function cagna4cdx (cagna4c, cagna4cinizio) {
 cagna4c.body.velocity.x=400;
 cagna4c.animations.play('corsadxc',10,true);
}

function cagna4csx (cagna4c, cagna4cfine) {
 cagna4c.body.velocity.x=- 400;
 cagna4c.animations.play('corsasxc',10,true);
}

//box info4
  if((player.x >= 28500)&&(player.x <= 28800)){
      info4.alpha = 1;
    }
  else {
      info4.alpha = 0;
    }

    function hook1 (player, aggrappo1) {
     if(Math.abs(aggrappo1.y+30 - player.y)<50) {
       if (cursors.up.isDown){
         player.body.velocity.y = 0;
         player.body.gravity.y = 0;
         aggrappo =1;
         jump=0;
         }
      }
    }

    function hook2 (player, aggrappo2) {
     if(Math.abs(aggrappo2.y+30 - player.y)<100) {
       if (cursors.up.isDown){
         player.body.velocity.y = 0;
         player.body.gravity.y = 0;
         aggrappo =1;
         jump=0;
          }
        }
      }

    function hook3 (player, aggrappo3) {
     if(Math.abs(aggrappo3.y+30 - player.y)<100) {
       if (cursors.up.isDown){
         player.body.velocity.y = 0;
         player.body.gravity.y = 0;
         aggrappo =1;
         jump=0;
          }
        }
      }

    function hook4 (player, aggrappo4) {
     if(Math.abs(aggrappo4.y+30 - player.y)<100) {
       if (cursors.up.isDown){
         player.body.velocity.y = 0;
         player.body.gravity.y = 0;
         aggrappo =1;
         jump=0;
          }
        }
      }

    function hook5 (player, aggrappo5) {
     if(Math.abs(aggrappo5.y+30 - player.y)<100) {
       if (cursors.up.isDown){
         player.body.velocity.y = 0;
         player.body.gravity.y = 0;
         aggrappo =1;
         jump=0;
          }
        }
      }

    function hook6 (player, aggrappo6) {
     if(Math.abs(aggrappo6.y+30 - player.y)<100) {
       if (cursors.up.isDown){
         player.body.velocity.y = 0;
         player.body.gravity.y = 0;
         aggrappo =1;
         jump=0;
          }
        }
      }

    function hook7 (player, aggrappo7) {
     if(Math.abs(aggrappo7.y+30 - player.y)<100) {
       if (cursors.up.isDown){
         player.body.velocity.y = 0;
         player.body.gravity.y = 0;
         aggrappo =1;
         jump=0;
          }
        }
      }

    function hook8 (player, aggrappo8) {
     if(Math.abs(aggrappo8.y+30 - player.y)<100) {
       if (cursors.up.isDown){
         player.body.velocity.y = 0;
         player.body.gravity.y = 0;
         aggrappo =1;
         jump=0;
          }
        }
      }

    function hook9 (player, aggrappo9) {
     if(Math.abs(aggrappo9.y+30 - player.y)<100) {
       if (cursors.up.isDown){
         player.body.velocity.y = 0;
         player.body.gravity.y = 0;
         aggrappo =1;
         jump=0;
          }
        }
      }

    function hook10 (player, aggrappo10) {
     if(Math.abs(aggrappo10.y+30 - player.y)<100) {
       if (cursors.up.isDown){
         player.body.velocity.y = 0;
         player.body.gravity.y = 0;
         aggrappo =1;
         jump=0;
          }
        }
      }

    function hook11 (player, aggrappo11) {
     if(Math.abs(aggrappo11.y+30 - player.y)<100) {
       if (cursors.up.isDown){
         player.body.velocity.y = 0;
         player.body.gravity.y = 0;
		 aggrappo=1;
         jump=0;
          }
        }
      }

    function hook12 (player, aggrappo12) {
     if(Math.abs(aggrappo12.y+30 - player.y)<100) {
       if (cursors.up.isDown){
         player.body.velocity.y = 0;
         player.body.gravity.y = 0;
         aggrappo=1;
         jump=0;
          }
        }
      }

    function hook13 (player, aggrappo13) {
     if(Math.abs(aggrappo13.y+30 - player.y)<100) {
       if (cursors.up.isDown){
         player.body.velocity.y = 0;
         player.body.gravity.y = 0;
         aggrappo=1;
         jump=0;
          }
        }
      }

    function hook14 (player, aggrappo14) {
     if(Math.abs(aggrappo14.y+30 - player.y)<100) {
       if (cursors.up.isDown){
         player.body.velocity.y = 0;
         player.body.gravity.y = 0;
         aggrappo=1;
         jump=0;
          }
        }
      }

    function restart4a (player, cagna4a){
        player.x = 28500;
        player.y = 2800;
    }
   function restart4b (player, cagna4b){
        player.x = 28500;
        player.y = 2800;
    }
	   function restart4c (player, cagna4c){
        player.x = 28500;
        player.y = 2800;
    }

	 function collect4 (player, fiammella4){
        fiammella4.alpha = 0;
	    fiammellaf4.alpha = 1;
		 pu4=1;
    }

    function collect5 (player, fiammella5){
        fiammella5.alpha = 0;
		fiammellaf5.alpha = 1;
		pu5=1;
    }

//****Livello 5****//

  //piattaforme sali/scendi
    var max = 2400;
    var min = 2730;

    if(platformMobile5a.y >= min){
      platformMobile5a.body.velocity.y = -80;
    }
    else if(platformMobile5a.y <= max){
      platformMobile5a.body.velocity.y = 80;
    }

    if(platformMobile5a2.y >= 1680){
      platformMobile5a2.body.velocity.y = -80;
    }
    else if(platformMobile5a2.y <= 1341){
      platformMobile5a2.body.velocity.y = 80;
    }

  //piattaforma destra/sinistra
    var dx = 36000;
    var sx = 36200;

    if(platformMobile5b.x <= dx){
      platformMobile5b.body.velocity.x = 80;
    }
    else if(platformMobile5b.x >= sx){
      platformMobile5b.body.velocity.x = -80;
    }

    function showInfo5 (player, tp5){
        level5 = true;
    }

 //box info5
  if((player.x >= 38900)&&(player.x <= 39200)){
      info5.alpha = 1;
    }
  else {
      info5.alpha = 0;
    }

  //visione nottura a tempo
    if ((Z.isDown) && (level5)){
      game.time.events.add (2000, showPlatform);
      platformcattiva5.alpha = 1;
      bgn5.alpha = 1;
    }

  function restart5 (player, platformbuona52){
      player.x = 38912;
      player.y = 700;
  }

  function collect6 (player, fiammella6){
      fiammella6.alpha = 0;
	    fiammellaf6.alpha = 1;
	  pu6=1;
	  console.log('punteggio');
  }
}

function onGround(){
  if (level4){
    console.log(Math.abs(ground4.y - player.y));
    if(Math.abs(ground4.y - player.y) <= 170) {
      return 1;
    }
    else {
      return 0;
    }
  }
  return 1;
}

function finali (player,fine) {
if (pu1 + pu2 + pu3 + pu4 + pu5 + pu6 >= 4){
    finale2.alpha=1;
	console.log('hai vinto');
	}

else {
     finale1.alpha=1;
	pu1=0;
	pu2=0;
	pu3=0;
	pu4=0;
	pu5=0;
	pu6=0;
	 bottonecopertinafinale.alpha =1;
	 bottonerestart.alpha=1;
	 console.log('hai perso')
	 fine.alpha=1;
	 if (bottonecopertinafinale.input.pointerOver() && game.input.activePointer.leftButton.isDown){
    console.log('perso');
    finale1.alpha=0;
		bottonerestart.alpha=0;
		bottonecopertinafinale.alpha = 0;
        player.x=0;
		player.y=2100;
		copertina.alpha=1;
		fiammella1.alpha=1;
		fiammella2.alpha=1;
		fiammella3.alpha=1;
		fiammella4.alpha=1;
		fiammella5.alpha=1;
		fiammella6.alpha=1;
		fiammellaf1.alpha=0;
		fiammellaf2.alpha=0;
		fiammellaf3.alpha=0;
		fiammellaf4.alpha=0;
		fiammellaf5.alpha=0;
		fiammellaf6.alpha=0;
		}
	 else if (bottonerestart.input.pointerOver() && game.input.activePointer.leftButton.isDown){
		finale1.alpha=0;
		bottonerestart.alpha=0;
		bottonecopertinafinale.alpha = 0;
		player.x=0;
		player.y=2100;
		fiammella1.alpha=1;
		fiammella2.alpha=1;
		fiammella3.alpha=1;
		fiammella4.alpha=1;
		fiammella5.alpha=1;
		fiammella6.alpha=1;
		fiammellaf1.alpha=0;
		fiammellaf2.alpha=0;
		fiammellaf3.alpha=0;
		fiammellaf4.alpha=0;
		fiammellaf5.alpha=0;
		fiammellaf6.alpha=0;
		}
	}
}
function render () {

}
