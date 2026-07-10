(function () {
  "use strict";

  // ── Sticky Header ──────────────────────────────────────────
  var header = document.getElementById("header");
  var backToTop = document.getElementById("back-to-top");
  // ── Synchronise la hauteur du header avec le CSS ────────────
  function setHeaderHeightVar() {
    document.documentElement.style.setProperty(
      "--header-h",
      header.offsetHeight + "px",
    );
  }
  setHeaderHeightVar();
  window.addEventListener("resize", setHeaderHeightVar);

  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 20);
    backToTop.classList.toggle("visible", window.scrollY > 400);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ── Mobile Menu ────────────────────────────────────────────
  var hamburger = document.getElementById("hamburger");
  var mobileMenu = document.getElementById("mobile-menu");

  hamburger.addEventListener("click", function () {
    var isOpen = mobileMenu.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen);
  });

  mobileMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  // ── Scroll fade-in ─────────────────────────────────────────
  var fadeEls = document.querySelectorAll(".fade-in");

  // Stagger cards
  [".services__grid", ".portfolio__grid", ".testimonials__grid"].forEach(
    function (sel) {
      var grid = document.querySelector(sel);
      if (!grid) return;
      grid.querySelectorAll(".fade-in").forEach(function (el, i) {
        el.style.transitionDelay = i * 0.1 + "s";
      });
    },
  );

  var fadeObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -30px 0px" },
  );

  fadeEls.forEach(function (el) {
    fadeObserver.observe(el);
  });

  // ── Counters ───────────────────────────────────────────────
  var counterEls = document.querySelectorAll(".stat__number[data-target]");
  var countersStarted = false;

  function animateCounter(el, target) {
    var start = performance.now();
    function update(now) {
      var progress = Math.min((now - start) / 1800, 1);
      var eased = 1 - Math.pow(2, -10 * progress);
      el.textContent = Math.round(target * eased);
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target;
    }
    requestAnimationFrame(update);
  }

  if (counterEls.length > 0) {
    var statsBox = counterEls[0].closest(".hero__stats");
    function startCounters() {
      if (countersStarted) return;
      countersStarted = true;
      counterEls.forEach(function (el) {
        animateCounter(el, parseInt(el.dataset.target, 10));
      });
    }

    if (statsBox) {
      // Lancement immédiat si déjà visible au chargement
      var rect = statsBox.getBoundingClientRect();
      var viewportH =
        window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < viewportH && rect.bottom > 0) startCounters();

      new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) startCounters();
          });
        },
        { threshold: 0.1 },
      ).observe(statsBox);
    }
  }

  // ── Back to top ────────────────────────────────────────────
  backToTop.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "auto" });
  });

  // ── Smooth scroll for anchors ──────────────────────────────
  // Après
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var href = this.getAttribute("href");
      if (href === "#") return;
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "auto", block: "start" });
    });
  });

  // ── Form Validation ────────────────────────────────────────
  var form = document.getElementById("contact-form");
  if (form) {
    var required = form.querySelectorAll("[required]");
    var status = document.getElementById("form-status");
    var submitBtn = document.getElementById("form-submit");
    var btnText = document.getElementById("btn-text");
    var isSubmitting = false;

    function t(key) {
      if (window.DigitechI18n && window.DigitechI18n.t) {
        return window.DigitechI18n.t(key);
      }
      var fallback = {
        "form.requiredFirst": "Le prénom est requis.",
        "form.requiredLast": "Le nom est requis.",
        "form.requiredMessage": "Le message est requis.",
        "form.requiredDefault": "Ce champ est requis.",
        "form.invalidEmail": "Veuillez entrer un email valide.",
        "form.submit": "Envoyer ma demande",
        "form.sending": "Envoi...",
        "form.success":
          "Message envoyé avec succès, nous vous répondrons rapidement.",
        "form.error":
          "Une erreur est survenue pendant l’envoi. Veuillez réessayer ou nous écrire directement par email.",
      };
      return fallback[key] || "";
    }

    var errorKeys = {
      prenom: "form.requiredFirst",
      nom: "form.requiredLast",
      message: "form.requiredMessage",
    };

    function showError(input, msg) {
      var err = input.parentElement.querySelector(".form-error");
      input.classList.add("error");
      if (err) err.textContent = msg;
    }
    function clearError(input) {
      var err = input.parentElement.querySelector(".form-error");
      input.classList.remove("error");
      if (err) err.textContent = "";
    }
    function validateInput(input) {
      if (input.type === "email") {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
          showError(input, t("form.invalidEmail"));
          return false;
        }
      } else if (!input.value.trim()) {
        showError(input, t(errorKeys[input.name] || "form.requiredDefault"));
        return false;
      }
      clearError(input);
      return true;
    }
    function setStatus(message, type) {
      if (!status) return;
      status.textContent = message;
      status.classList.remove("success", "error");
      if (type) status.classList.add(type);
    }
    function setSubmitting(isSubmitting) {
      if (!submitBtn || !btnText) return;
      submitBtn.disabled = isSubmitting;
      btnText.textContent = isSubmitting ? t("form.sending") : t("form.submit");
    }

    window.addEventListener("digitech:languagechange", function () {
      setSubmitting(isSubmitting);
      required.forEach(function (input) {
        if (input.classList.contains("error")) validateInput(input);
      });
    });

    required.forEach(function (input) {
      input.addEventListener("blur", function () {
        validateInput(input);
      });
      input.addEventListener("input", function () {
        if (input.classList.contains("error")) validateInput(input);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      setStatus("", "");
      var valid = true;
      required.forEach(function (input) {
        if (!validateInput(input)) valid = false;
      });
      if (!valid) {
        var first = form.querySelector(".error");
        if (first) first.focus();
        return;
      }

      isSubmitting = true;
      setSubmitting(true);

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
        .then(function (response) {
          if (!response.ok) throw new Error("formspree-error");
          form.reset();
          setStatus(t("form.success"), "success");
        })
        .catch(function () {
          setStatus(t("form.error"), "error");
        })
        .finally(function () {
          isSubmitting = false;
          setSubmitting(false);
        });
    });
  }

  // ── Active nav ─────────────────────────────────────────────
  var sections = document.querySelectorAll("section[id]");
  var navLinks = document.querySelectorAll(".header__nav .nav__link");
  new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          navLinks.forEach(function (link) {
            link.classList.toggle(
              "nav__link--active",
              link.getAttribute("href") === "#" + id,
            );
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" },
  ).observe !== undefined &&
    sections.forEach(function (s) {
      new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              navLinks.forEach(function (link) {
                link.classList.toggle(
                  "nav__link--active",
                  link.getAttribute("href") === "#" + entry.target.id,
                );
              });
            }
          });
        },
        { rootMargin: "-40% 0px -55% 0px" },
      ).observe(s);
    });
})();
