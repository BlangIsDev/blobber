document.addEventListener("DOMContentLoaded", ()=>{
  rBlocks();
})


let ismov = true;

const blobber = document.querySelector(".blobber-real");
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
  
  what.style.left = `${xpos}px`;
  what.style.top = `${ypos}px`;

  for(let block of blocks){
    if(checkCollision(blobber, block)){
      alert("You died! Press a key to continue.");
      ismov = false;
      document.addEventListener("keydown", ()=>{
        ismov = true;
        move(blobber);
      }, { once : true })
      return;
    }
  }
}

function rBlocks(){
  blockcontain.innerHTML = "";
  blocks = [];

  const blockcount = Math.floor(Math.random() * 21) + 80;

  for(let i = 0; i < blockcount; i++){
    let block = document.createElement("div");
    block.classList.add("block");

   const blockSize = 50;
   const maxX = window.innerWidth - blockSize;
   const maxY = window.innerHeight - blockSize;

   let randX = Math.floor(Math.random() * maxX);
   let randY = Math.floor(Math.random() * maxY);

    randX = Math.max(0, Math.min(randX, maxX));
    randY = Math.max(0, Math.min(randY, maxY));
  
   block.style.left = `${randX}px`;
   block.style.top = `${randY}px`;

   blockcontain.appendChild(block);
   blocks.push(block);
  }
}

function checkCollision(thingOne, thingTwo){
  const oneHit = thingOne.getBoundingClientRect();
  const twoHit = thingTwo.getBoundingClientRect();

  const collision = !(
    oneHit.right < twoHit.left||
    oneHit.left > twoHit.right||
    oneHit.bottom < twoHit.top||
    oneHit.top > twoHit.bottom
  );
    if(collision){{
      rBlocks();
    }
  
  return collision;
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
  move(blobber);
})
