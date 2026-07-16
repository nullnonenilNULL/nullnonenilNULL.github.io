/* ============================================================
   Academic Homepage — minimal vanilla JS enhancements.
   Content works without JS; this only adds convenience.
   ============================================================ */
(function () {
  "use strict";

  // 1) Footer year auto-fill
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2) Mobile navigation toggle
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    // close the menu after tapping a link (mobile)
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // 3) Highlight the nav item for the section currently in view.
  //    Only runs when in-page section anchors exist (homepage).
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll('.nav-menu a[href^="#"]')
  );

  if (sections.length && navLinks.length && "IntersectionObserver" in window) {
    var linkFor = {};
    navLinks.forEach(function (link) {
      var id = link.getAttribute("href").slice(1);
      if (id) linkFor[id] = link;
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var link = linkFor[entry.target.id];
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach(function (l) { l.classList.remove("active"); });
            link.classList.add("active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(function (section) { observer.observe(section); });
  }
})();
