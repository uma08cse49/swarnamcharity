
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


// document.addEventListener("DOMContentLoaded", function() {
//   const buttons = document.querySelectorAll(".btn-learn-more");

//   buttons.forEach(function(btn) {
//     btn.addEventListener("click", function() {
//       const hiddenContent = this.previousElementSibling; // get the <div class="hidden-content">

//       if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
//         hiddenContent.style.display = "block";
//         this.textContent = "Show Less";
//       } else {
//         hiddenContent.style.display = "none";
//         this.textContent = "Learn More";
//       }
//     });
//   });
// });

// console.log("Script loaded!");
// document.addEventListener("DOMContentLoaded", () => {
//   const buttons = document.querySelectorAll(".learn-more-btn");

//   buttons.forEach(button => {
//     button.addEventListener("click", (e) => {
//       e.preventDefault(); // Stop any form submission or reload

//       const serviceBlock = button.closest(".service-block");
//       const hiddenContent = serviceBlock.querySelector(".hidden-content");

//       if (hiddenContent.style.display === "block") {
//         hiddenContent.style.display = "none";
//         button.textContent = "Learn More";
//       } else {
//         hiddenContent.style.display = "block";
//         button.textContent = "Show Less";
//       }
//     });
//   });
// });


// document.addEventListener("DOMContentLoaded", () => {
//   console.log("Script loaded successfully");

//   const buttons = document.querySelectorAll(".learn-more-btn");

//   buttons.forEach(button => {
//     button.addEventListener("click", (e) => {
//       e.preventDefault(); // Stop any page reload

//       const serviceBlock = button.closest(".service-block");
//       const hiddenContent = serviceBlock.querySelector(".hidden-content");
//       console.log("Current display:", hiddenContent.style.display);
//       console.log("Computed display:", window.getComputedStyle(hiddenContent).display);


//       if (hiddenContent.style.display === "block") {
//         hiddenContent.style.display = "none";
//         button.textContent = "Learn More";
//       } else {
//         hiddenContent.style.display = "block";
//         button.textContent = "Show Less";
//       }
//     });
//   });
// });



// ======working script==============

// document.addEventListener("DOMContentLoaded", () => {
//   console.log("Learn More Fix Initialized ✅");

//   const buttons = document.querySelectorAll(".learn-more-btn");
//   console.log("Found", buttons.length, "buttons");

//   buttons.forEach((button, index) => {

//         button.addEventListener("click", (event) => {
//           console.log("Button clicked!");
//           const serviceBlock = event.target.closest(".service-block");
//           const hiddenContent = serviceBlock?.querySelector(".hidden-content");

//           if (!hiddenContent) {
//             console.warn("❌ No hidden-content found for this button");
//             return;
//           }

//           // Force visibility, ignoring CSS transitions or overrides
//           const current = window.getComputedStyle(hiddenContent).display;
//           console.log("Before toggle -> Computed display:", current);

//           if (current === "none") {
//             hiddenContent.style.setProperty("display", "block", "important");
//             hiddenContent.style.setProperty("visibility", "visible", "important");
//             hiddenContent.style.setProperty("opacity", "1", "important");
//             hiddenContent.style.setProperty("max-height", "none", "important");
//             console.log("✅ Expanded");
//           } else {
//             hiddenContent.style.setProperty("display", "none", "important");
//             console.log("🔽 Collapsed");
//           }

//           console.log("After toggle -> Computed display:", window.getComputedStyle(hiddenContent).display);
//         });

//       })
// });




// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelectorAll(".learn-more-btn").forEach((btn) => {
//     btn.addEventListener("click", () => {
//       const block = btn.closest(".service-block");
//       block.classList.toggle("expanded");

//       btn.textContent = block.classList.contains("expanded")
//         ? "Show Less"
//         : "Learn More";
//     });
//   });
// });

// ========== Toggle logic for each expandable card ==========
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("impact-sections");

  root.querySelectorAll("[data-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card  = btn.closest(".l-card");
      const panel = document.getElementById(btn.getAttribute("aria-controls"));
      const isOpen = card.getAttribute("data-open") === "true";

      if (!isOpen) {
        // open
        card.setAttribute("data-open", "true");
        btn.setAttribute("aria-expanded", "true");
        panel.setAttribute("aria-hidden", "false");
        panel.style.maxHeight = panel.scrollHeight + "px";
        btn.textContent = "Show Less"; // ✅ change button text


        panel.addEventListener(
          "transitionend",
          () => (panel.style.maxHeight = "2000px"),
          { once: true }
        );
      } else {
        // close
        panel.style.maxHeight = panel.scrollHeight + "px";
        requestAnimationFrame(() => (panel.style.maxHeight = "0px"));
        card.setAttribute("data-open", "false");
        btn.setAttribute("aria-expanded", "false");
        panel.setAttribute("aria-hidden", "true");
        btn.textContent = "Learn More"; // ✅ change back
      }
    });
  });
});

