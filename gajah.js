//https://dribbble.com/shots/9508242-Mother-and-Baby-Elephant-2020


var tl1 = new TimelineMax({ repeat: 3, repeatDelay: 0.30, yoyo: true });
var tl2 = new TimelineMax({ repeat: 3, repeatDelay: 0.50, yoyo: true });

tl1.to('.cloud__one', { duration: 10, ease: "power1.inOut", x: -100 });
tl2.to('.cloud__two', { duration: 8, ease: "power1.inOut", x: 100 });