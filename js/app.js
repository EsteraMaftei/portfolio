const links = document.querySelectorAll('.navbar-nav a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', ()=>{
    let current = '';
    sections.forEach(section =>{
        let sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight / 4)){
            current = section.getAttribute('id')
        }
    })

    links.forEach( a => {
        a.classList.remove('active')
        if(a.classList.contains(current)){
            a.classList.add('active')
        }
    })
})


const controller = new ScrollMagic.Controller();

 new ScrollMagic.Scene({
    triggerElement:'.title',
    triggerHook: 0.4,
    reverse: false
})// .addIndicators({ colorStart: 'white'})
    .setClassToggle('.esteraName', 'colorTransition')
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement:'.aboutTitle',
    triggerHook: 0.6
})  .setClassToggle('.aboutTitle', 'colorTransition')
    .addTo(controller)

new ScrollMagic.Scene({
    triggerElement:'.portfolioTitle',
    triggerHook: 0.6
})  .setClassToggle('.portfolioTitle', 'colorTransition')
    .addTo(controller)

new ScrollMagic.Scene({
    triggerElement:'.contactTitle',
    triggerHook: 0.6
})  .setClassToggle('.contactTitle', 'colorTransition')
    .addTo(controller)


const navLinks = document.querySelector(".navbar-nav");
const aNavigation = document.querySelectorAll(".navbar-nav a");

document.querySelector('.hamburger-button').addEventListener('click', ()=> {
        navLinks.classList.toggle("open");
        aNavigation.forEach(a => {
            a.addEventListener('click', ()=>{
               navLinks.classList.remove("open");
            })
        });
})


document.querySelector('.footer-btn').addEventListener('click', ()=> {
    document.querySelector('.modal').classList.toggle('show-modal')
})

document.querySelector(".close-button").addEventListener("click", e => {
    document.querySelector('.modal').classList.toggle("show-modal");
});