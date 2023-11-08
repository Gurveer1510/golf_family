let crscr = document.querySelector("#cursor")
let blur = document.querySelector("#cursor-blur")


document.addEventListener("mouseleave",function(){
    crscr.style.display="none"
})
document.addEventListener("mousemove",function(dets){
    crscr.style.display="block"
    blur.style.display="block"
    crscr.style.top = dets.y+"px"
    crscr.style.left = dets.x+"px"
    blur.style.top = dets.y - 200 + "px"
    blur.style.left = dets.x - 200 + "px"
})

var h4All = document.querySelectorAll("#nav h4")
h4All.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        crscr.style.scale = 3
        crscr.style.border = "0.1px solid #fff"
        crscr.style.backgroundColor = "transparent"
    })

    val.addEventListener("mouseleave",function(){
        crscr.style.scale = 1
        crscr.style.border = "0px solid #95C11E"
        crscr.style.backgroundColor = "#95C11E"
    })

    
})



gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:"true",
        start:"top -10%",
        end:"top -10%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        scroller:"body",
        trigger:"#main",
        // markers:"true",
        start:"top -25%",
        end:"top -70%",
        scrub:3
    },
})

gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1,
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 47%",
        scrub:2
    }
})



gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 47%",
        scrub:2
    }
})

VanillaTilt.init(document.querySelectorAll(".card ,#about-us-in"), {
    max: 25,
    speed: 400
});


gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 85%",
        end:"top 95%",
        scrub:1
    }
})