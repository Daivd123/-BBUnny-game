const Engine = Matter.Engibne;
const Render = Matter.Render;
const World =  Matter.World;
const Bodies = Matter.Bodies;
const Constraint = MatterConstraint;
const Body = Matter.Body;
const composites = Matter.Composites;
const composite = Matter.Composite ;


let engine;
let world ;
var rope, fruit,ground;
var fruit_con;
var fruit_con_2;
  
var bg_img;
var food;
var rabbit;

var buttons;
var bunny
var blink, eat, sad;

function preload(){
  bg_img = loadImage ('background.png')
  food = loadImage('melon.png') 
  rabbit = loadImage('rabbit-01.png');;
  blink = loadAnimation("blink_1.png", "blink_2.png", "blink_3.png");
  eat = loadAnimation("eat_0.png", "eat_1.png", "eat_2.png", "eat_3.png", "eat_4.png");
  sad = loadAnimation("sad_1.png","sad_2.png", "sad_3.png");

  blink.playing = true;
  eat.playing = true;
sad.playing = true;
sad.looping = false;
eat.looping = false;
}

function setup(){
  createCanvas(500,700);
  framrate(80);

  engine = Engine.create();
  world = engine.world;

  button = createImg('cut_btn.png');
  button.position(220,30);
  button.size(50, 50);
  button.mousClicked(drop);

  rope = new Rope (7, {x:245,y:30});
  ground = new Ground(200,690,600,20);

  blink.frameDelay = 20;
  eat.frameDelay = 20;
  sad.frameDelay = 20;

bunny = createSprite(230, 620, 100, 100);
bunny.scale = 0.2;
bunny.addAnimation('blinking', blink);
bunny.addAnimation('eating', eat);
bunny.addAnimation("crying", sad);
buhnny.addAnimation('blinking');
fruit = Bodies.circle(300,300,20);
Matter.Composite.add(rope.body,fruit);
fruit_con = new Link(rope, fruit);
}

