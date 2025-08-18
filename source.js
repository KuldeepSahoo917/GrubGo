let nav=document.querySelector(".navigation-wrap");
window.onscroll=function(){
    if(document.documentElement.scrollTop>20){
        nav.classList.add("scroll-on");
    }
    else{
        nav.classList.remove("scroll-on");
    }
}

//nav hide
let navBar=document.querySelectorAll('.nav-link');
let navCollapse=document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show"); 
    })
})

const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

const cards = document.querySelectorAll(".testimonial_card");
const dotsContainer = document.getElementById("dots");
let currentIndex = 0;

cards.forEach((_, idx) => {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => showSlide(idx));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll("#dots span");

function showSlide(index){
    cards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    cards[index].classList.add('active');
    dots[index].classList.add('active');
    currentIndex = index;
}

function autoSlide(){
    currentIndex = (currentIndex + 1) % cards.length;
    showSlide(currentIndex);
}

showSlide(currentIndex);
setInterval(autoSlide, 5000);

