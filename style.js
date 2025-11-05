gsap.registerPlugin(ScrollTrigger);

gsap.to("#para", {
  backgroundColor: "#000",
  color: "#fff",
  delay:3,
  scrollTrigger: {
    trigger: "#para",
    start: "top 10%",     // animation starts when #para hits top of viewport
    end: "top 30%", 
       // ends when #para leaves top
    scrub: 2           // links animation to scroll position
  }
})




gsap.to("#we",{
    x:-230,
    duration:2,
    
    scrollTrigger:{
        trigger:"#we",
        scroller:"body",
        
        start:"top 60%",
        end:"top 30%",
        scrub:2
    }
})

gsap.to("#rule",{
    x:-200,
    duration:2,
   
    scrollTrigger:{
        trigger:"#rule",
        scroller:"body",
        
        start:"top 60%",
        end:"top 30%",
        scrub:2
    }
})


gsap.to("#per",{
    x:400,
    duration:2,
   
    scrollTrigger:{
        trigger:"#per",
        scroller:"body",
        
        start:"top 60%",
        end:"top 30%",
        scrub:2
    }
})
gsap.to("#prob",{
    x:-200,
    duration:2,
   
    scrollTrigger:{
        trigger:"#prob",
        scroller:"body",
        
        start:"top 60%",
        end:"top 30%",
        scrub:2
    }
})

gsap.to("#prob2",{
    x:-200,
    duration:2,
   
    scrollTrigger:{
        trigger:"#prob2",
        scroller:"body",
        
        start:"top 10%",
        end:"top 30%",
        scrub:2
    }
})

gsap.to("#prob3",{
    x:200,
    duration:2,
   
    scrollTrigger:{
        trigger:"#prob3",
        scroller:"body",
        
        start:"top 60%",
        end:"top 30%",
        scrub:2
    }
})



gsap.to("#top",{
    x:50,
    duration:1,
    
})


gsap.to("#bottom",{
    x:-50,
    duration:1,
    
})


gsap.to("#left",{
    x:20,
    duration:1,
    
})

gsap.to("#right",{
    x:20,
    duration:1,
    
})

gsap.to("#navbar .logo",{
    y:2,
    duration:1,
    delay:2    
})
gsap.to(".card1", {
    scale: 0.7,
    opacity: 0,
    scrollTrigger: {
        trigger: ".card1",
        start: "top 15%",
        end: "bottom 15%",
        
        scrub: true
    }
})

gsap.to(".card2", {
    scale: 0.7,
    opacity: 0,
    scrollTrigger: {
        trigger: ".card2",
        start: "top 15%",
        end: "bottom 15%",
       
        scrub: true
    }
})

gsap.to(".card3", {
    scale: 0.7,
    opacity: 0,
    scrollTrigger: {
        trigger: ".card3",
        start: "top 25%",
        end: "bottom 15%",
      
        scrub: true
    }
})
gsap.to(".card4", {
    scale: 0.7,
    opacity: 0,
    scrollTrigger: {
        trigger: ".card4",
        start: "top 15%",
        end: "bottom 15%",
        
        scrub: true
    }
})
gsap.to(".card5", {
    scale: 0.7,
    opacity: 0,
    scrollTrigger: {
        trigger: ".card5",
        start: "top 15%",
        end: "bottom 15%",
        
        scrub: true
    }
})