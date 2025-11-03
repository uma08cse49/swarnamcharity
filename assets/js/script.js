
// script.js - reveal on scroll with staggered effect (one-time)
document.addEventListener('DOMContentLoaded', function(){
  const blocks = document.querySelectorAll('.service-block');
  let revealed = new Set();

  function reveal(){
    let delay = 0;
    blocks.forEach((block, index) => {
      if (revealed.has(block)) return;
      const rect = block.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100){
        setTimeout(()=>{
          block.classList.add('show');
          revealed.add(block);
        }, delay);
        delay += 180;
      }
    });
  }

  window.addEventListener('scroll', reveal);
  window.addEventListener('load', reveal);
  // initial call
  reveal();
});


// =========================================================================================

// Learn more button to funtion


// document.getElementById("learnMoreBtn").addEventListener("click", function() {
//   const moreContent = document.getElementById("moreContent");
//   if (moreContent.style.display === "block") {
//     moreContent.style.display = "none";
//     this.textContent = "Learn More";
//   } else {
//     moreContent.style.display = "block";
//     this.textContent = "Show Less";
//   }
// });


// document.addEventListener("DOMContentLoaded", function() {
//   const learnMoreBtn = document.getElementById("learnMoreBtn");
//   const moreContent = document.getElementById("moreContent");

//   if (learnMoreBtn && moreContent) {
//     learnMoreBtn.addEventListener("click", function() {
//       moreContent.classList.toggle("show");
//       learnMoreBtn.textContent = moreContent.classList.contains("show")
//         ? "Show Less"
//         : "Learn More";
//     });
//   }
// });


// ================================================================================================



// js for mulitple learn more button to function


document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".btn-learn-more");

  buttons.forEach(function(btn) {
    btn.addEventListener("click", function() {
      const hiddenContent = this.previousElementSibling; // get the <div class="hidden-content">

      if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
        hiddenContent.style.display = "block";
        this.textContent = "Show Less";
      } else {
        hiddenContent.style.display = "none";
        this.textContent = "Learn More";
      }
    });
  });
});


