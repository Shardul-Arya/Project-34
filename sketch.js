const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground
var hero, heroImage
var fly
var monster

var backgroundImage

var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20

function preload() {
  backgroundImage = loadImage("GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 700, 1200, 20);
  hero = new Hero(300, 400);
  fly = new Fly(hero.body, {x: 300, y: 400});

  monster = new Monster(1100, 400, 100);

  box1 = new Box(900, -400, 100, 100);
  box2 = new Box(900, -200, 100, 100);
  box3 = new Box(900, 0, 100, 100);
  box4 = new Box(900, 200, 100, 100);
  box5 = new Box(900, 400, 100, 100);
  box6 = new Box(800, -375, 100, 100);
  box7 = new Box(800, -175, 100, 100);
  box8 = new Box(800, 25, 100, 100);
  box9 = new Box(800, 225, 100, 100);
  box10 = new Box(800, 425, 100, 100);
  box11 = new Box(700, -350, 100, 100);
  box12 = new Box(700, -150, 100, 100);
  box13 = new Box(700, 50, 100, 100);
  box14 = new Box(700, 250, 100, 100);
  box15 = new Box(700, 450, 100, 100);
  box16 = new Box(600, -325, 100, 100);
  box17 = new Box(600, -125, 100, 100);
  box18 = new Box(600, 75, 100, 100);
  box19 = new Box(600, 275, 100, 100);
  box20 = new Box(600, 475, 100, 100);
}

function draw() {
  background(backgroundImage);
  Engine.update(engine);

  ground.display();
  hero.display();
  fly.display();

  monster.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
}

function mouseDragged(){
    Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  fly.fly();
}

function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(hero.body, {x: 300, y:400});
      fly.attach(hero.body);
  }
}