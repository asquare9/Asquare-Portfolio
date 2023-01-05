
//jshint esversion:6

//========For sticky Navbar on scrolling===========
const header = document.querySelector("header");
window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 100);
});

//==========Typing Animation========
var typed = new Typed(".typing",{
    strings:["a Web Developer.", "a Competitive Programmer.", "a Designer.", "a Musician.", "an IITian."],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
});


//=========Menu-Icon For small width screen (Responsive)=========
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};