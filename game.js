const blobber = document.querySelector(".blobber");
let xpos = 100;
let ypos= 100;

function move(){
  blobber.style.left =  `${xpos}px`;
  blobber.style.top =  `${ypos}px`;
}

document.addEventListener("keydown", (e)=>{
  const step = 10;

  if (e.key === "w") {
    ypos -= step;
  } else if (e.key === "s") {
    ypos += step;
  } else if (e.key === "d") {
    xpos -= step;
  } else if (e.key === "a") {
    xpos += step;
  }

  move();
})
