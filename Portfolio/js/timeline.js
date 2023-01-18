let allbox = document.getElementsByClassName('box');
let allrond = document.getElementsByClassName('rond');
const controller = new ScrollMagic.Controller();

 console.log(allbox.length);
 console.log(allrond.length);
/* GSAP Timeline Animation */
 for(i=0;i < allrond.length;i++)
   {
      console.log(i);
      console.log(allrond[i]);
      console.log(allbox[i]);
     if(allrond[i].getAttribute('data-anim') === allbox[i].getAttribute('data-anim')){
        const t = gsap.timeline({defaults: {duration: 0.5}});
       t.from(allbox[i], {opacity: 0, scale: 0.5},)
        const scene1=new ScrollMagic.Scene({
        triggerElement: allrond[i],  
        // triggerHook: 0  
        })
        .setTween(t) // add gsap animation to scene
        .addIndicators()
        .addTo(controller)
       
     }
   }