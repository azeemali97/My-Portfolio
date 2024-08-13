

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".myskills", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });




  function runOnMobile() {
    if (window.matchMedia("(max-width: 767px)").matches) {
  
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 30,
            freeMode: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });
    }
}




function runOnMobile() {
  if (window.matchMedia("(max-width: 767px)").matches) {

      var swiper = new Swiper(".myskills", {
          slidesPerView: 2,
          spaceBetween: 30,
          freeMode: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
  }
}



runOnMobile();


let dbtn =  document.querySelector(".cv-download");
let cv   =  document.querySelector(".cv");
let content = document.querySelector(".cv-content");
dbtn.addEventListener('mouseover',function chn() {

  cv.style.backgroundColor = "white";
  content.style.color = "black"; 
  
  
});
dbtn.addEventListener('mouseout',function chn2() {

  cv.style.backgroundColor = ""; 
  content.style.color = ""; 
  
  
});