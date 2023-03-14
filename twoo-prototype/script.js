window.onresize = function(){ location.reload(); }

function changeView() {
    window.location.href = "works.html";
}

var tl = gsap.timeline();

tl.to(".loading", {
  "--width": "100%",
  "--color": "#000",
  ease: Circ. easeOut,
  duration: 1,
});

tl.to(".loading-bar", {
    "--color": "#979595",
  ease: Circ. easeOut,
  duration: 1,
}, "start");

tl.to('.ani-me',{
    yPercent: -100,
    ease: Power4. easeOut,
    duration: 1,
}, "start");

tl.to('.ani-me__d',{
    yPercent: 100,
    ease: Power4. easeOut,
    duration: 1,
}, "start");

tl.to('.bio',{
    opacity: 1,
    ease: Power4. easeOut,
    duration: 1,
}, "start");

document.getElementById("works").addEventListener("click", () => {
    var tl = gsap.timeline();
    tl.to('.ani-me',{
        yPercent: 0,
        ease: Power4. easeOut,
        duration: 1,
    }, "start");
    tl.to('.ani-me__d',{
        yPercent: 200,
        ease: Power4. easeOut,
        duration: 1,
    }, "start");
    
    tl.to('.bio',{
        opacity: 0,
        ease: Power4. easeOut,
        duration: 1,
    }, "start");
    tl.call(changeView);
});
   