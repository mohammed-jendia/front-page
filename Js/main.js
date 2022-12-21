var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// كتابة النص تلقائي //

var i=0 ,text;
text = "Your Brand' Solution Partne in Digital Marketing"

function typing(){
  if(i<text.length){
    document.getElementById("text").textContent += text.charAt(i);
    i++;
    setTimeout(typing,50);
  }
}
typing();