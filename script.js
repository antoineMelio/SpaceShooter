// inject all paper objects & functions globally
paper.install(window);

// initialize canvas ('canvas' is the id in the HTML)
paper.setup(canvas);

const ligne1 = [
  "meteor1",
  "meteor2",
  "ship1",
  "ship2",
  "ship3",
  "ship4",
  "ship5",
  ,
  "ship6",
  ,
  "ship7",
  ,
  "ship8",
  "meteor3",
  "meteor4",
];

console.log(ligne1.length); // affiche le nombre d'element

console.log(ligne1); // affiche ["Luke", "Leia", "Obi-wan", "Rey", "Yoda"]
// LIGNE 1 D'ELEMENT
const meteor = new Raster({
  source: "PNG/Meteors/meteorGrey_big1.png",
});
meteor.position = new Point(110, 100);
meteor.scale(0.7);

const meteor2 = new Raster({
  source: "PNG/Meteors/meteorGrey_big2.png",
});
meteor2.position = new Point(220, 100);
meteor2.scale(0.7);

const ship1 = new Raster({
  source: "PNG/Enemies/enemyBlack4.png",
});
ship1.position = new Point(330, 100);
ship1.scale(0.7);

const ship2 = new Raster({
  source: "PNG/Enemies/enemyBlack4.png",
});
ship2.position = new Point(440, 100);
ship2.scale(0.7);

const ship3 = new Raster({
  source: "PNG/Enemies/enemyBlack4.png",
});
ship3.position = new Point(550, 100);
ship3.scale(0.7);

const ship4 = new Raster({
  source: "PNG/Enemies/enemyBlack4.png",
});
ship4.position = new Point(660, 100);
ship4.scale(0.7);

const ship5 = new Raster({
  source: "PNG/Enemies/enemyBlack4.png",
});
ship5.position = new Point(770, 100);
ship5.scale(0.7);

const ship6 = new Raster({
  source: "PNG/Enemies/enemyBlack4.png",
});
ship6.position = new Point(880, 100);
ship6.scale(0.7);

const ship7 = new Raster({
  source: "PNG/Enemies/enemyBlack4.png",
});
ship7.position = new Point(990, 100);
ship7.scale(0.7);

const ship8 = new Raster({
  source: "PNG/Enemies/enemyBlack4.png",
});
ship8.position = new Point(1100, 100);
ship8.scale(0.7);

const meteor3 = new Raster({
  source: "PNG/Meteors/meteorGrey_big1.png",
});
meteor3.position = new Point(1210, 100);
meteor3.scale(0.7);

const meteor4 = new Raster({
  source: "PNG/Meteors/meteorGrey_big2.png",
});
meteor4.position = new Point(1320, 100);
meteor4.scale(0.7);

//////////// LIGNE 2 D'ELEMENT

const meteorb = new Raster({
  source: "PNG/Meteors/meteorGrey_big1.png",
});
meteorb.position = new Point(110, 200);
meteorb.scale(0.7);

const meteor2b = new Raster({
  source: "PNG/Meteors/meteorGrey_big2.png",
});
meteor2b.position = new Point(220, 200);
meteor2b.scale(0.7);

const ship1b = new Raster({
  source: "PNG/Enemies/enemyBlack4.png",
});
ship1b.position = new Point(330, 200);
ship1b.scale(0.7);

const ship2b = new Raster({
  source: "PNG/Enemies/enemyBlack4.png",
});
ship2b.position = new Point(440, 200);
ship2b.scale(0.7);

const ship3b = new Raster({
  source: "PNG/Enemies/enemyBlack4.png",
});
ship3b.position = new Point(550, 200);
ship3b.scale(0.7);

const ship5b = new Raster({
  source: "PNG/Enemies/enemyBlack4.png",
});
ship5b.position = new Point(770, 200);
ship5b.scale(0.7);

const ship6b = new Raster({
  source: "PNG/Enemies/enemyBlack4.png",
});
ship6b.position = new Point(880, 200);
ship6b.scale(0.7);

const ship7b = new Raster({
  source: "PNG/Enemies/enemyBlack4.png",
});
ship7b.position = new Point(990, 200);
ship7b.scale(0.7);

const ship8b = new Raster({
  source: "PNG/Enemies/enemyBlack4.png",
});
ship8b.position = new Point(1100, 200);
ship8b.scale(0.7);

const meteor3b = new Raster({
  source: "PNG/Meteors/meteorGrey_big1.png",
});
meteor3b.position = new Point(1210, 200);
meteor3b.scale(0.7);

const meteor4b = new Raster({
  source: "PNG/Meteors/meteorGrey_big2.png",
});
meteor4b.position = new Point(1320, 200);
meteor4b.scale(0.7);

// VIE DES JOUEURS

const live1 = new Raster({ source: "PNG/playerShip2_blue.png" });
live1.position = new Point(30, 670);
live1.scale(0.4);

const live2 = new Raster({ source: "PNG/playerShip2_blue.png" });
live2.position = new Point(80, 670);
live2.scale(0.4);

const live3 = new Raster({ source: "PNG/playerShip2_blue.png" });
live3.position = new Point(130, 670);
live3.scale(0.4);

// HITBOX + GROUP DE L'ENNEMI + LASER

// l'image du joueur
const ship4b = new Raster({ source: "PNG/Enemies/enemyBlack4.png" });
ship4b.position = new Point(660, 200);
ship4b.scale(0.7);

// la zone de collision du joueur
const ship4bHitCircle = new Path.Circle(new Point(660, 200), 40);
ship4bHitCircle.strokeColor = "red";
ship4bHitCircle.strokeWidth = 1;

// je crée le groupe
const ship4bGroup = new Group();

// j'ajoute mes deux éléments dans le groupe
ship4bGroup.addChild(ship4b);
ship4bGroup.addChild(ship4bHitCircle);

// et maintenant, si je change la position du groupe, ça bougera à la fois l'image et le cercle de collision !
ship4bGroup.position = new Point(660, 200);

// TIR ENNEMI TIMER + RANDOMIZER

const element = document.getElementById("test");
let time, previousTimeStamp;

timerConfig = {
  frequency: 1, // Seconds
  stopAt: 10, // Seconds,
};

function timer(timestamp) {
  if (time === undefined) time = timestamp;
  if (previousTimeStamp === undefined) previousTimeStamp = timestamp;
  const seconds = timerConfig.frequency * 1000;
  const tick = timestamp - previousTimeStamp;

  function trigger() {
    element.style.transform = "translateX(" + timerConfig.pos + "px)";
  }

  if (tick >= seconds) {
    trigger();
    previousTimeStamp = timestamp; // Updating The Timer each second
    timerConfig.updatePos();
  }
  if (timestamp < timerConfig.stopAt * 1000) requestAnimationFrame(timer); // 10 Seconds
}

requestAnimationFrame(timer);

getRndInteger(0, 2);
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

if ((Math.floor = 0)) {
}

if ((Math.floor = 1)) {
  const shootEnnemy = new Raster({ source: "PNG/Lasers/laserRed03.png" });
  shootEnnemy.position = new Point(ship4bGroup.x, ship4bGroup.y);

  const ennemyShootHitCircle = new Path.Circle(
    new Point(ship4bGroup.x, ship4bGroup.y),
    10
  );
  ennemyShootHitCircle.strokeColor = "red";
  ennemyShootHitCircle.strokeWidth = 1;

  const ennemyShootGroup = new Group();

  ennemyShootGroup.addChild(shootEnnemy);
  ennemyShootGroup.addChild(ennemyShootHitCircle);

  ennemyShootGroup.position = new Point(y--);
}

// HITBOX + GROUP DU JOUEUR + ZONE DE DEPLACEMENT + DEPLACEMENT + RESTRICTIONS BORDURE

const playerImg = new Raster({ source: "PNG/playerShip2_blue.png" });
playerImg.position = new Point(722, 650);

const playerHitCircle = new Path.Circle(new Point(722, 650), 50);
playerHitCircle.strokeColor = "blue";
playerHitCircle.strokeWidth = 1;

const playerGroup = new Group();

playerGroup.addChild(playerImg);
playerGroup.addChild(playerHitCircle);

playerGroup.position = new Point(650, 650);

const start = new Point(250, 700);
const end = new Point(1250, 450);
const rectangle = new Path.Rectangle(start, end);

rectangle.strokeColor = "green";
rectangle.strokeWidth = 3;

const playerZone = new Group();

playerZone.addChild(rectangle);

view.onKeyDown = function (event) {
  switch (event.key) {
    case "left":
      playerGroup.position.x -= 50;
      break;
    case "right":
      playerGroup.position.x += 50;
      break;
    case "up":
      playerGroup.position.y -= 50;
      break;
    case "down":
      playerGroup.position.y += 50;
      break;
    case "space":
      const shoot = new Raster({ source: "PNG/Lasers/laserBlue03.png" });
      shoot.position = new Point(playerGroup.x, playerGroup.y);

      const shootHitCircle = new Path.Circle(
        new Point(playerGroup.x, playerGroup.y),
        10
      );
      shootHitCircle.strokeColor = "blue";
      shootHitCircle.strokeWidth = 1;

      const shootGroup = new Group();

      shootGroup.addChild(shoot);
      shootGroup.addChild(shootHitCircle);

      shootGroup.position = new Point(y++);
      break;
  }
};

if (playerGroup.position.x > 1250) {
  playerGroup.position.x -= 50;
}

if (playerGroup.position.x < 250) {
  playerGroup.position.x += 50;
}

if (playerGroup.position.y > 700) {
  playerGroup.position.y -= 50;
}

if (playerGroup.position.y < 450) {
  playerGroup.position.y += 50;
}
