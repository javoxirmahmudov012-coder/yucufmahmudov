/* Muhammadyusuf Mahmudov Portfolio JavaScript (Exact Panda Coders / Habib style) */

document.addEventListener("DOMContentLoaded", () => {
  /* 1. Home Split Text Animation with Anime.js */
  try {
    if (typeof anime !== "undefined" && anime.text && anime.animate) {
      const { animate, text, stagger } = anime;

      const prof1El = document.querySelector(".home__profession-1");
      const prof2El = document.querySelector(".home__profession-2");

      if (prof1El && prof2El) {
        const { chars: chars1 } = text.split(".home__profession-1", { chars: true });
        const { chars: chars2 } = text.split(".home__profession-2", { chars: true });

        animate(chars1, {
          y: [{ to: ["100%", "0%"] }, { to: "-100%", delay: 4000, ease: "in(3)" }],
          duration: 900,
          ease: "out(3)",
          delay: stagger(80),
          loop: true,
        });

        animate(chars2, {
          y: [{ to: ["100%", "0%"] }, { to: "-100%", delay: 4000, ease: "in(3)" }],
          duration: 900,
          ease: "out(3)",
          delay: stagger(80),
          loop: true,
        });
      }
    }
  } catch (err) {
    console.log("Anime split effect handled:", err);
  }

  /* 2. Swiper Projects */
  try {
    if (typeof Swiper !== "undefined") {
      new Swiper(".projects__swiper", {
        loop: true,
        spaceBetween: 24,
        slidesPerView: "auto",
        grabCursor: true,
        speed: 600,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
      });
    }
  } catch (err) {
    console.error("Swiper error:", err);
  }

  /* 3. Work Tabs */
  const tabs = document.querySelectorAll("[data-target]"),
    tabContents = document.querySelectorAll("[data-content]");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetSelector = tab.dataset.target,
        targetContent = document.querySelector(targetSelector);

      if (!targetContent) return;

      tabContents.forEach((content) => content.classList.remove("work-active"));
      tabs.forEach((t) => t.classList.remove("work-active"));

      tab.classList.add("work-active");
      targetContent.classList.add("work-active");
    });
  });

  /* 4. Services Accordion */
  const buttons = document.querySelectorAll(".services__button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const cards = document.querySelectorAll(".services__card");
      const card = button.closest(".services__card");
      const info = card.querySelector(".services__info");

      const isOpen = card.classList.contains("services__open");

      cards.forEach((c) => {
        c.classList.remove("services__open");
        c.classList.add("services__close");

        const i = c.querySelector(".services__info");
        if (i) i.style.height = "0px";
      });

      if (!isOpen && info) {
        info.style.height = "auto";
        let height = info.scrollHeight + "px";

        card.classList.remove("services__close");
        card.classList.add("services__open");

        info.style.height = height;
      }
    });
  });

  /* 5. Testimonials Infinite Duplicate */
  const tracks = document.querySelectorAll(".testimonials__content");
  tracks.forEach((track) => {
    const cards = [...track.children];
    for (const card of cards) {
      track.appendChild(card.cloneNode(true));
    }
  });

  /* 6. Copy Phone / Email Button */
  const copyBtn = document.getElementById("contact-btn");
  const copyValue = document.getElementById("contact-copy-val");

  if (copyBtn && copyValue) {
    copyBtn.addEventListener("click", () => {
      const textToCopy = copyValue.textContent.trim();
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalHTML = copyBtn.innerHTML;
        copyBtn.innerHTML = 'Nusxa Olindi! <i class="ri-check-line"></i>';
        setTimeout(() => {
          copyBtn.innerHTML = originalHTML;
        }, 2000);
      });
    });
  }

  /* 7. Current Year in Footer */
  const textYear = document.getElementById("footer-year");
  if (textYear) {
    textYear.textContent = new Date().getFullYear();
  }

  /* 8. Scroll Section Active Link */
  const sections = document.querySelectorAll("section[id]");
  const scrollActive = () => {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
      const id = section.id,
        top = section.offsetTop - 80,
        height = section.offsetHeight,
        link = document.querySelector(".nav__menu a[href*=" + id + "]");

      if (!link) return;
      if (scrollY > top && scrollY <= top + height) {
        link.classList.add("active-link");
      } else {
        link.classList.remove("active-link");
      }
    });
  };
  window.addEventListener("scroll", scrollActive);

  /* 9. Custom Cursor */
  const cursor = document.querySelector(".cursor");
  if (cursor) {
    let mouseX = 0,
      mouseY = 0;

    const cursorMove = () => {
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
      cursor.style.transform = "translate(-50%, -50%)";
      requestAnimationFrame(cursorMove);
    };

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    cursorMove();

    const interactiveLinks = document.querySelectorAll("a, button, input, textarea, select");
    interactiveLinks.forEach((item) => {
      item.addEventListener("mouseover", () => {
        cursor.classList.add("hide-cursor");
      });
      item.addEventListener("mouseleave", () => {
        cursor.classList.remove("hide-cursor");
      });
    });
  }

  /* 10. Scroll Reveal Animation */
  if (typeof ScrollReveal !== "undefined") {
    try {
      const sr = ScrollReveal({
        origin: "top",
        distance: "60px",
        duration: 1800,
        delay: 200,
        reset: false,
      });

      sr.reveal(".home__image, .projects__container, .work__container, .testimonials__container, .contact__container");
      sr.reveal(".home__data", { delay: 400, origin: "bottom" });
      sr.reveal(".home__info", { delay: 600, origin: "bottom" });
      sr.reveal(".home__social, .home__cv", { delay: 700 });
      sr.reveal(".about__data", { origin: "left" });
      sr.reveal(".about__image", { origin: "right" });
      sr.reveal(".services__card", { interval: 150 });
    } catch (e) {
      console.log("ScrollReveal error handled:", e);
    }
  }

  /* 11. Interactive Contact Form Submission */
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const btn = contactForm.querySelector("button[type='submit']");
      const origBtnHtml = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = 'Yuborilmoqda... <i class="ri-loader-4-line ri-spin"></i>';

      const formData = {
        name: document.getElementById("form-name").value.trim(),
        contact: document.getElementById("form-contact").value.trim(),
        service: document.getElementById("form-service") ? document.getElementById("form-service").value : "Konsultatsiya",
        message: document.getElementById("form-message").value.trim()
      };

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          const res = await response.json();
          if (res.success) {
            if (formStatus) {
              formStatus.innerHTML = `<span style="color: #4ade80;">✔ ${res.message}</span>`;
            }
            contactForm.reset();
            return;
          }
        }
        throw new Error("Fallback to direct contact");
      } catch (err) {
        // Fallback for static hosting (Vercel / GitHub Pages): open Telegram directly with pre-filled message
        const tgText = `Assalomu alaykum Muhammadyusuf!\n\nIsmim: ${formData.name}\nKontakt: ${formData.contact}\nYo'nalish: ${formData.service}\nXabar: ${formData.message || "Konsultatsiya kerak"}`;
        const tgUrl = `https://t.me/muhammadyucufmm?text=${encodeURIComponent(tgText)}`;
        if (formStatus) {
          formStatus.innerHTML = `<span style="color: #4ade80;">✔ Xabar tayyorlandi! Telegram ochilmoqda...</span>`;
        }
        window.open(tgUrl, "_blank");
        contactForm.reset();
      } finally {
        btn.disabled = false;
        btn.innerHTML = origBtnHtml;
        setTimeout(() => {
          if (formStatus) formStatus.innerHTML = "";
        }, 7000);
      }
    });
  }
});
