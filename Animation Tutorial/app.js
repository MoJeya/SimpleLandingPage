//alles auswählen 
const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const headline = document.querySelector('.headline');
const banner = document.querySelector('.banner');

const t1 = new TimelineMax();

t1.from(banner,1.2, {height: "0%"},{height: "100%"})
.fromTo(
    banner, 1,{width: "0%"}, {width:"100%", ease: Power2.easeInOut},
    
)