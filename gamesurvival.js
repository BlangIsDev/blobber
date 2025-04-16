document.addEventListener("DOMContentLoaded", ()=>{
  rBlocks();
})

let ismov = true;

const blobber = document.querySelector(".blobber");
const blockcontain = document.querySelector(".block-contain");
let xpos = 100;
let ypos= 100;

let targetX = xpos;
let targetY = ypos;

let speed = 4;

let blocks = [];

function move(what){
  if(!ismov) return;
  
  const dx = targetX-xpos;
  const dy = targetY-ypos;
  const dis = Math.sqrt(dx*dx+dy*dy);

  if(dis>1){
    xpos += (dx/dis) * speed;
    ypos += (dy/dis) * speed;
  }
  
  what.style.left =  `${xpos}px`;
  what.style.top =  `${ypos}px`;
  
  checkCollision(blobber);
}

function rBlocks(){
  blockcontain.innerHTML = "";
  blocks = [];

  const blockcount = Math.floor(Math.random() * 81) + 20;

  for(let i = 0; i < blockcount; i++){
    let block = document.createElement("div");
    block.classList.add("block");

   const blockSize = 50;
   const maxX = window.innerWidth - blockSize;
   const maxY = window.innerHeight - blockSize;

   const randX = Math.floor(Math.random() * maxX);
   const randY = Math.floor(Math.random() * maxY);
  
   block.style.left = `${randX}px`;
   block.style.top = `${randY}px`;

   blockcontain.appendChild(block);
   blocks.push(block);
  }
}

function checkCollision(thingOne){
  const oneHit = thingOne.getBoundingClientRect();

  for(let block of blocks){
  const twoHit = block.getBoundingClientRect();

  const collision = !(
    oneHit.right < twoHit.left||
    thingHit.left > twoHit.right||
    oneHit.bottom < twoHit.top||
    oneHit.top > twoHit.bottom
  );

  if(collision){
    alert("You died! press a key to ok.");
    ismov = false;
    addEventListener("keydown", ()=>{
      ismov = true;
      rBlocks();
      move();
    }, { once : true });
    break;
   }
  }
}

document.addEventListener("keydown", (e)=>{
  const step = 10;

  if (e.key === "w") {
    targetY -= step;
  } else if (e.key === "s") {
    targetY += step;
  } else if (e.key === "a") {
    targetX -= step;
  } else if (e.key === "d") {
    targetX += step;
  } else if (e.key === "ArrowUp") {
    targetY -= step;
  } else if (e.key === "ArrowDown") {
    targetY += step;
  } else if (e.key === "ArrowLeft") {
    targetX -= step;
  } else if (e.key === "ArrowRight") {
    targetX += step;
  }
  move();
})
