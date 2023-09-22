function fallingText() {
  const target = document.querySelector("#target");
  const results = Splitting({ target: target, by: "chars" });
  gsap.set("#target", { perspective: 400 });
  gsap.from(".char", {
    duration: .8,
    opacity: 0,    
    x: gsap.utils.random(-100, 100, true),
    y: gsap.utils.random(-50, -100, true),
    z: gsap.utils.random(0, 200, true),
    rotate: gsap.utils.random(-90,90, true),
    stagger:{
        amount:3
    },
    repeat:-1,
    repeatDelay:2,
    yoyo:true       
  });
}
fallingText()