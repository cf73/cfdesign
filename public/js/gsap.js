import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* The following plugin is a Club GSAP perk */
import { ScrollSmoother } from "gsap/ScrollSmoother";


gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

ScrollSmoother.create({
    smooth: 1,
    effects: true,
  });