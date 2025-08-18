document.addEventListener("DOMContentLoaded", () => {
  console.log("Migrant Mother and Child Foundation site loaded.");
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('.report-section section');
  const scrollPosition = window.scrollY;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      document.querySelector(`.toc a[href="#${sectionId}"]`).classList.add('active');
    } else {
      document.querySelector(`.toc a[href="#${sectionId}"]`).classList.remove('active');
    }
  });
});

document.getElementById("menuToggle").addEventListener("click", function () {
  document.getElementById("navMenu").classList.toggle("active");
});

const video = document.getElementById("heroVideo");
const muteBtn = document.getElementById("muteToggle");

muteBtn.addEventListener("click", () => {
  video.muted = !video.muted;
  muteBtn.innerHTML = video.muted
    ? '<i class="fas fa-volume-mute"></i>'
    : '<i class="fas fa-volume-up"></i>';
});