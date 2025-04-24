
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const nav = document.getElementById("nav");
  
    menuToggle.addEventListener("click", function () {
      nav.classList.toggle("active");
  
      const isActive = nav.classList.contains("active");
      menuToggle.style.backgroundImage = isActive
        ? "url('assets/images/icon-menu-close.svg')"
        : "url('assets/images/icon-menu.svg')";
    });
  });
  