var crsr = document.getElementById("cursor");
var crsrblur = document.getElementById("cursorblur");
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+15+"px";
    crsr.style.top = dets.y+15+"px";
    crsrblur.style.left = dets.x-120+"px";
    crsrblur.style.top = dets.y-120+"px";
})



gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav", scroller:"body", start:"top -10%", end:"top -11%", scrub:1}
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -50%",
        end:"top -70%",
        scrub:1.2
    },

})
const h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 5;
        crsr.style.border ="1px solid #fff"
        crsr.style.backgroundColor = "transparent"
        crsr.style.transition = "all 0.5s ease"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border = "none"
        crsr.style.backgroundColor = "#91B508"
    })
})
gsap.from("#aboutUs img",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#aboutUs",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 51%",
        scrub:3
    }
})
gsap.from("#about-Us-in",{
    y:50,
    opacity:0,
    duration:1.5,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#aboutUs",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 51%",
        scrub:3
    }
})
gsap.from(".cards",{
    scale:0.8,
    duration:0.5,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:3
    }
})
gsap.from("#colon-1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon-1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 47%",
        scrub:4
    }
})
gsap.from("#colon-2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon-1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 47%",
        scrub:4
    }
})
``
