const blobber = document.querySelector(".blobber");
let xpos = 100;
let ypos= 100;

let targetX = xpos;
let targetY = ypos;

const speed = 10;

function move(){
  const dx = targetX-xpos;
  const dy = targetY-ypos;
  const dis = Math.sqrt(dx*dx+dy*dy);

  if(dis>1){
    xpos += (dx/dis) * speed;
    ypos += (dy/dis) * speed;
  }
  
  blobber.style.left =  `${xpos}px`;
  blobber.style.top =  `${ypos}px`;
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
    const speed = prompt("what speed?");
  }

  move();
})
