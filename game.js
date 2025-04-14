const blobber = document.querySelector(".blobber");
let xpos = 100;
let ypos= 100;

function move(){
  blobbber.style.left =  `${xpos}px`;
  blobbler.style.top =  `${ypos}px`;
}

document.addEventLister("keydoown", (e)=>{
  const step = 10;

  if (e.key === "ArrowUp") {
    y -= step;
  } else if (e.key === "ArrowDown") {
    y += step;
  } else if (e.key === "ArrowLeft") {
    x -= step;
  } else if (e.key === "ArrowRight") {
    x += step;
  }

  move();
}
