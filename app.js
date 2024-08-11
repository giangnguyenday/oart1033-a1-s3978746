/*-----------reveal-image-untold-story--------*/

const unresolved = document.querySelector(".unresolved");
const unresolvedWHalf = unresolved.offsetWidth / 1.3;
const untold = document.querySelector("#untold");

untold.addEventListener("mousemove", (e) => {
    console.log(e.clientX);
      unresolved.style.left = e.clientX - untold.getBoundingClientRect().left - unresolved.getBoundingClientRect().width/2 + "px";
      unresolved.style.top = e.clientY - untold.getBoundingClientRect().top - unresolved.getBoundingClientRect().height/2 + "px";
      unresolved.style.opacity = "1";
  });

  /*-----------play-video-sound-on-click--------*/

  const ellipse = document.querySelector('.ellipse');
  const video = document.getElementById('video');
  const audio = document.getElementById('audio');
  let isPlaying = false;
  
  ellipse.addEventListener('click', () => { 
      video.play();
      audio.play();
      isPlaying = true;  
  });
  
  
/*-----------memory-intact-temporary-hover--------*/

const towerIntact = document.querySelector('.tower-intact');
const poem31 = document.getElementById('poem-31');
const poem32 = document.getElementById('poem-32');

const NOGAPSEXISTED = poem31.textContent;
const ITSTOODCOMPLETE = poem32.textContent;
const hoverText1 = "DIDN'T FORESEE THAT";
const hoverText2 = 'IT WAS TEMPORARY';

towerIntact.addEventListener('mouseover', () => {
  poem31.textContent = hoverText1;
  poem32.textContent = hoverText2;
});

towerIntact.addEventListener('mouseout', () => {
  poem31.textContent = NOGAPSEXISTED;
  poem32.textContent = ITSTOODCOMPLETE;
});



