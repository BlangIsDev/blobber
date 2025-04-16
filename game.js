let ismov = true;

const blobber = document.querySelector(".blobber");
const blockcontain = document.querySelector(".block-contain");
let xpos = 100;
let ypos= 100;

let targetX = xpos;
let targetY = ypos;

let speed = 10;

function move(){
  if(!ismov)return;
  
  const dx = targetX-xpos;
  const dy = targetY-ypos;
  const dis = Math.sqrt(dx*dx+dy*dy);

  if(dis>1){
    xpos += (dx/dis) * speed;
    ypos += (dy/dis) * speed;
  }
  
  blobber.style.left =  `${xpos}px`;
  blobber.style.top =  `${ypos}px`;
  
  checkCollision()
}

function rBlocks(){
  blockcontain.innerHTML = "";
  blocks = [];

  for(let i = 0; i < blockcount; i++){    let block = document.createElement("div")
  block.classList.add("block")

   const blockSize = 50;
   const maxX = window.innerWidth - blockSize;   const maxY = window.innerHeight - blockSize;

   const randX = Math.floor(Math.random() * maxX);
   const randY = Math.floor(Math.random() * maxY);
  
   block.style.left = `${randX}px`;
   block.style.top = `${randY}px`;

   blockcontain.appendChild(block);
   block.push(block);
  }
}

function checkCollision(){
  const blobHit = blobber.getBoundingClientRect();
  const blockHit = block.getBoundingClientRect();

  const collision = !(
    blobHit.right < block.left||
    blobHit.left > block.right||
    blobHit.bottom < blockHit.top||
    blobHit.top > block.bottom
  );

  if(collision){
    alert("You died! press a key to continue.");
    ismov = false;
    addEventListener("keydown", ()=>{
      ismov = true;
      move();
    })
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
  }  else if(e.key === " "){
    const newSpeed = parseFloat(prompt("what speed?"));
    if(!isNaN(newSpeed)){
      speed = newSpeed;
    }
  }

  move();
})
