const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var fix= document.querySelector("#fixed-img")
var elmC=document.querySelector("#elem-cont")

elmC.addEventListener("mouseenter",function(){
  fix.style.display="block"
})
elmC.addEventListener("mouseleave",function(){
  fix.style.display="none"
})

var elems=document.querySelectorAll(".elem")
elems.forEach(function(e){
  e.addEventListener("mouseenter",function(){
    var image= e.getAttribute("data-img")
    fix.style.backgroundImage=`url(${image})`
  })
})
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
});

var menu = document.querySelector("nav h4")
var full = document.querySelector("#full-scr")
var navimg = document.querySelector("nav img")
var flag = 0
menu.addEventListener("click", function () {
    if (flag == 0) {
        full.style.top = 0
        navimg.style.opacity = 0
        flag = 1
    } else {
        full.style.top = "-100%"
        navimg.style.opacity = 1
        flag = 0
    }
})

var loader = document.querySelector("#loader")
setTimeout(function () {
    loader.style.top = "-100%"
}, 4200)

var para = document.querySelector("#left p");
var head1 = document.querySelector("#head1");
var head2 = document.querySelector("#head2");
var head3 = document.querySelector("#head3");
var img = document.querySelector("#ryt img");


head2.addEventListener("click", function() {
  head2.style.color = "white";
  head1.style.color = "#504A45";
  head3.style.color = "#504A45";
  para.textContent = "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."; 
  head2.style.borderLeft="4px solid #FE330A"
  head1.style.borderLeft="4px solid #504A45"
    head3.style.borderLeft="4px solid #504A45"
  img.src="big2.webp"
});

head3.addEventListener("click", function() {
  head3.style.color = "white";
  head1.style.color = "#504A45";
  head2.style.color = "#504A45";
  para.textContent = "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."; 
  head3.style.borderLeft="4px solid #FE330A"
  head1.style.borderLeft="4px solid #504A45"
    head2.style.borderLeft="4px solid #504A45"
  img.src="big3.webp"
});

head1.addEventListener("click", function() {
  head1.style.color = "white";
  head3.style.color = "#504A45";
  head2.style.color = "#504A45";
  para.textContent = "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."; 
  head1.style.borderLeft="4px solid #FE330A"
  head3.style.borderLeft="4px solid #504A45"
    head2.style.borderLeft="4px solid #504A45"
  img.src="big.webp"
});