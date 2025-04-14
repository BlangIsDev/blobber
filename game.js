const blobber = document.querySelector(".blobber");
let xpos = 100;
let ypos= 100;

function move(){
  blobber.style.left =  `${xpos}px`;
  blobbler.style.top =  `${ypos}px`;
}

document.addEventListener("keydown", (e)=>{
  const step = 10;

  if (e.key === "ArrowUp") {
    ypos -= step;
  } else if (e.key === "ArrowDown") {
    ypos += step;
  } else if (e.key === "ArrowLeft") {
    xpos -= step;
  } else if (e.key === "ArrowRight") {
    xpos += step;
  }

  move();
}
