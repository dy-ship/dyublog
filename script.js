// --- Smooth scroll for internal links ---
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const nav = document.querySelector(".site-nav");
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelectorAll('.site-nav a[href^="#"]');

  // Keep body offset equal to header height
  const setBodyOffset = () => {
    const h = header?.getBoundingClientRect().height || 64;
    document.body.style.paddingTop = h + "px";
  };
  setBodyOffset();
  window.addEventListener("resize", setBodyOffset);
  setTimeout(setBodyOffset, 150);

  // Mobile toggle
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open", !expanded);
    });
    // Close menu on link click (mobile)
    links.forEach(a => a.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("open");
    }));
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        const y = target.getBoundingClientRect().top + window.scrollY - (header?.offsetHeight || 64) + 1;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    });
  });

  // Active link spy (intersection observer)
  const sections = document.querySelectorAll("main section[id]");
  const spy = (entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute("id");
      const navLink = document.querySelector('.site-nav a[href="#' + id + '"]');
      if (navLink) {
        if (entry.isIntersecting) {
          document.querySelectorAll(".site-nav a").forEach(l => l.classList.remove("is-active"));
          navLink.classList.add("is-active");
        }
      }
    });
  };
  const observer = new IntersectionObserver(spy, { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 });
  sections.forEach(sec => observer.observe(sec));

  // Elevate header shadow on scroll
  const onScroll = () => {
    if (window.scrollY > 8) header?.classList.add("is-scrolled");
    else header?.classList.remove("is-scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll);
});
