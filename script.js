document.addEventListener("DOMContentLoaded", function () {
  const aboutLink = document.getElementById("about-link");
  const contactLink = document.getElementById("contact-link");

  function smoothScroll(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  }

  aboutLink.addEventListener("click", function (e) {
    e.preventDefault();
    smoothScroll("about-section");
  });

  contactLink.addEventListener("click", function (e) {
    e.preventDefault();
    smoothScroll("contact-section");
  });
});
