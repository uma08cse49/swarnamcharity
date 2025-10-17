
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
