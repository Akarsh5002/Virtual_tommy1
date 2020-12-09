var dog, happyDog, database, foodS, foodStock
var gg,ff;


function preload()
{
  dogImg = loadImage("dogImg.png");
  dogHappyImg = loadImage("dogImg1.png");
  
  

}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.15;

 
  
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  foodStock.set(50);
 


 


}



function draw() {  
  background("yellow")

  




  
 
  
    if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(dogHappyImg);
      
  
     
    }
  
  
  




  drawSprites();
  textSize(17);
  text("Food remaining:"+foodS,170,200);
  fill("black");
  text("Long Press up arrow key to feed your pet Dog Muku",50,50);
  
}

function readStock(data)
{
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x = 0;
  }else{
    x=x-1
  }

  database.ref('/').update({
    food:x
  })
}
