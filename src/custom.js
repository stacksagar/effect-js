// navbar scroll effect
(function () {
  const nav = document.querySelector(".nav");
  window.addEventListener("scroll", () => {
    const scroll = Math.floor(window.scrollY);
    if (scroll > 20) {
      nav.classList.add("navEffect");
    } else {
      nav.classList.remove("navEffect");
    }
  });

  // all effectJs name array
  const effectName = [
    "fade",
    "fade-up",
    "fade-down",
    "fade-left",
    "fade-right",
    "fade-up-right",
    "fade-up-left",
    "fade-down-right",
    "fade-down-left",
    "flip-up",
    "flip-down",
    "flip-left",
    "flip-right",
    "slide-up",
    "slide-down",
    "slide-left",
    "slide-right",
    "zoom-in",
    "zoom-in-up",
    "zoom-in-down",
    "zoom-in-left",
    "zoom-in-right",
    "zoom-out",
    "zoom-out-up",
    "zoom-out-down",
    "zoom-out-left",
    "zoom-out-right",
  ];

  // create all effect html div
  const allEffect = document.getElementById("allEffect");
  document.addEventListener("DOMContentLoaded", () => {
    let efct = "";
    effectName.map((effect) => {
      efct += `
  <div class="1500 effect" data-effectJs="${effect}">
   <span class="dataEffectText">data-effectJs="${effect}"</span>
  </div> 
  `;
    });
    allEffect.innerHTML += efct;
  });

  const cssSelect = document.querySelector(".cssSelect");
  const cssLink = document.querySelector(".cssLink");
  const jsLink = document.querySelector(".jsLink");
  const jsSelect = document.querySelector(".jsSelect");
  function linkCopy(select, link) {
    link.select();
    document.execCommand("copy");
    select.classList.add("useSelect");
    setTimeout(() => {
      select.classList.remove("useSelect");
    }, 500);
  }
  function cssCopy() {
    linkCopy(cssSelect, cssLink);
  }
  function jsCopy() {
    linkCopy(jsSelect, jsLink);
  }
})();
