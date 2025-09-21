// Site interactions for dyu's personal site

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for internal nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Subscribe form handling
  const form = document.getElementById("subscribe-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("subscribe-email");
      const email = (input?.value || "").trim();
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!isValid) {
        alert("请输入有效的邮箱地址。");
        input?.focus();
        return;
      }
      // Demo-only: local confirmation. (Hook your email service/API here.)
      alert("订阅成功！后续更新将通过邮件通知你。");
      form.reset();
    });
  }

  // Simple header shadow on scroll for better depth
  const header = document.querySelector(".site-header");
  const toggleShadow = () => {
    if (!header) return;
    if (window.scrollY > 4) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };
  toggleShadow();
  window.addEventListener("scroll", toggleShadow);
});


// --- Sticky header fix: keep header visible and avoid layout jump ---
(function(){
  const header = document.querySelector(".site-header");
  if(!header) return;
  const applyBodyOffset = () => {
    const h = header.getBoundingClientRect().height;
    document.body.style.paddingTop = h + "px";
  };
  // Run on load/resize to keep spacing correct
  window.addEventListener("load", applyBodyOffset);
  window.addEventListener("resize", applyBodyOffset);
  // Also update after fonts render
  setTimeout(applyBodyOffset, 150);
})();
