/**
 * ==========================================================================
 * ARYA TEJO PRAWIRAYUDA - PERSONAL LANDING PAGE SCRIPT
 * Features:
 * 1. Bilingual System (ID / EN) with LocalStorage persistence
 * 2. WhatsApp Click-to-Chat with dynamic URL encoding
 * 3. Intersection Observer Scroll Reveal
 * 4. Active Navigation Tracking
 * 5. Mobile Navigation Drawer
 * 6. Dynamic Copyright Year
 * ==========================================================================
 */

(function () {
  'use strict';

  // ------------------------------------------------------------------------
  // 1. TRANSLATION DICTIONARY
  // ------------------------------------------------------------------------
  const translations = {
    id: {
      meta_title: "Arya Tejo Prawirayuda | Personal Portfolio",
      nav_home: "Beranda",
      nav_about: "Tentang Saya",
      nav_skills: "Keahlian",
      nav_portfolio: "Portofolio",
      nav_contact: "Kontak",

      // Hero
      hero_badge: "Web Developer Enthusiast",
      hero_title_first: "ARYA",
      hero_title_last: "TEJO",
      hero_alias: "YUDA",
      hero_tagline: "Learning. Building. Leveling Up.",
      hero_desc: "Saya adalah mahasiswa D3 Teknologi Informasi yang memiliki ketertarikan dalam pengembangan website dan teknologi. Saya senang mempelajari cara membangun sebuah sistem dari ide sederhana menjadi aplikasi yang dapat digunakan, sambil terus mengembangkan kemampuan melalui proyek, pengalaman magang, dan eksplorasi teknologi baru.",
      hero_cta_portfolio: "Lihat Portofolio",
      hero_cta_contact: "Hubungi Saya",
      hero_status: "TERSEDIA UNTUK KOLABORASI & PROYEK",

      // About
      about_tag: "[ 02 // DOSSIER ]",
      about_title: "TENTANG SAYA",
      about_subtitle: "Perjalanan, Dedikasi, & Filosofi",
      about_p1: "Saya adalah mahasiswa D3 Teknologi Informasi di Politeknik Negeri Madiun yang sedang terus mengembangkan kemampuan di bidang teknologi, khususnya pengembangan aplikasi dan website. Saya tertarik untuk memahami bagaimana sebuah sistem bekerja, mulai dari perancangan hingga implementasi.",
      about_p2: "Bagi saya, coding bukan hanya tentang menulis kode, tetapi juga tentang memecahkan masalah dan membangun sesuatu yang bisa memberikan manfaat. Di luar dunia teknologi, saya juga menikmati bermain game dan mengikuti perkembangan teknologi sebagai bagian dari proses belajar dan eksplorasi.",
      about_edu_title: "Pendidikan Formal",
      about_edu_inst: "Politeknik Negeri Madiun",
      about_edu_dept: "Program Studi D3 Teknologi Informasi",
      about_focus_label: "Fokus Utama:",

      // Skills
      skills_tag: "[ 03 // ARSENAL ]",
      skills_title: "KEAHLIAN",
      skills_desc: "Saya terus mengembangkan kemampuan melalui proses belajar dan pengalaman mengerjakan berbagai proyek. Fokus utama saya saat ini adalah pengembangan web dan aplikasi.",
      skills_cat1: "Web Development",
      skills_cat2: "Frontend & Application",
      skills_cat3: "Database & Tools",

      // Portfolio
      portfolio_tag: "[ 04 // RECON ]",
      portfolio_title: "PORTOFOLIO",
      portfolio_subtitle: "Proyek & Pengalaman Pilihan",
      project1_title: "Simple POS System",
      project1_desc: "Sistem Point of Sale sederhana yang dikembangkan untuk membantu pengelolaan produk dan transaksi. Proyek ini menjadi bagian dari proses belajar dalam membangun aplikasi web dengan pemisahan antara sisi backend dan frontend.",
      project1_btn: "Lihat Repositori",
      project2_title: "Baca Novel",
      project2_desc: "Aplikasi yang dikembangkan sebagai bagian dari eksplorasi pengembangan aplikasi mobile. Proyek ini menjadi salah satu pengalaman dalam mempelajari struktur aplikasi dan implementasi fitur menggunakan teknologi mobile.",
      project2_btn: "Lihat Repositori",
      project3_tag: "Internship Project / Magang",
      project3_title: "Sistem Informasi Usulan Kegiatan Desa",
      project3_desc: "Pengalaman pengembangan modul usulan kegiatan desa dalam mendukung proses digitalisasi musyawarah dan pengelolaan aspirasi masyarakat. Proyek ini dikerjakan sebagai bagian dari pengalaman magang dan berfokus pada pengembangan sistem berbasis web.",
      project3_btn: "Kunjungi Platform",
      project3_notice: "Modul proyek magang — Informasi kode internal dilindungi.",

      // Contact
      contact_tag: "[ 05 // TRANSMISSION ]",
      contact_title: "Punya sesuatu yang ingin dibicarakan?",
      contact_subtitle: "Mari terhubung dan mulai percakapan.",
      contact_btn: "Hubungi Saya via WhatsApp",
      contact_direct: "Respon Cepat via WhatsApp",
      contact_location: "Madiun, Jawa Timur, Indonesia",

      // Footer
      footer_text: "Dibangun dan terus dikembangkan oleh Arya Tejo Prawirayuda.",
      back_to_top: "KEMBALI KE ATAS ↑",

      // WhatsApp Prefilled Message
      wa_message: "Halo Yuda! Saya melihat landing page portofolio Anda dan ingin menghubungi Anda."
    },

    en: {
      meta_title: "Arya Tejo Prawirayuda | Personal Portfolio",
      nav_home: "Home",
      nav_about: "About",
      nav_skills: "Skills",
      nav_portfolio: "Portfolio",
      nav_contact: "Contact",

      // Hero
      hero_badge: "Web Developer Enthusiast",
      hero_title_first: "ARYA",
      hero_title_last: "TEJO",
      hero_alias: "YUDA",
      hero_tagline: "Learning. Building. Leveling Up.",
      hero_desc: "I am a Diploma student in Information Technology with a strong interest in web development and technology. I enjoy learning how to turn simple ideas into functional applications while continuously improving my skills through projects, internships, and exploring new technologies.",
      hero_cta_portfolio: "View Portfolio",
      hero_cta_contact: "Get In Touch",
      hero_status: "AVAILABLE FOR COLLABORATION & PROJECTS",

      // About
      about_tag: "[ 02 // DOSSIER ]",
      about_title: "ABOUT ME",
      about_subtitle: "Journey, Dedication, & Philosophy",
      about_p1: "I am a Diploma student in Information Technology at Politeknik Negeri Madiun, continuously developing my skills in technology, especially in web and application development. I am interested in understanding how a system works, from the initial design process to implementation.",
      about_p2: "For me, coding is not just about writing code. It is also about solving problems and building something useful. Outside of technology, I enjoy gaming and exploring new technologies as part of my learning journey.",
      about_edu_title: "Formal Education",
      about_edu_inst: "Politeknik Negeri Madiun",
      about_edu_dept: "Diploma in Information Technology",
      about_focus_label: "Core Focus:",

      // Skills
      skills_tag: "[ 03 // ARSENAL ]",
      skills_title: "SKILLS",
      skills_desc: "I continuously develop my skills through learning and hands-on project experience. My current focus is web and application development.",
      skills_cat1: "Web Development",
      skills_cat2: "Frontend & Application",
      skills_cat3: "Database & Tools",

      // Portfolio
      portfolio_tag: "[ 04 // RECON ]",
      portfolio_title: "PORTFOLIO",
      portfolio_subtitle: "Featured Projects & Experience",
      project1_title: "Simple POS System",
      project1_desc: "A simple Point of Sale system developed to help manage products and transactions. This project is part of my learning journey in building web applications with separated backend and frontend architecture.",
      project1_btn: "View Repository",
      project2_title: "Baca Novel",
      project2_desc: "An application developed as part of my exploration of mobile application development. This project represents one of my experiences in learning application structure and feature implementation using mobile technologies.",
      project2_btn: "View Repository",
      project3_tag: "Internship Project / Magang",
      project3_title: "Sistem Informasi Usulan Kegiatan Desa",
      project3_desc: "An experience in developing a village activity proposal module to support the digitalization of community discussions and aspiration management. This project was developed as part of an internship experience and focused on web-based system development.",
      project3_btn: "Visit Platform",
      project3_notice: "Internship project module — Internal proprietary code protected.",

      // Contact
      contact_tag: "[ 05 // TRANSMISSION ]",
      contact_title: "Got something to talk about?",
      contact_subtitle: "Let's connect and start a conversation.",
      contact_btn: "Message Me on WhatsApp",
      contact_direct: "Fast response via WhatsApp",
      contact_location: "Madiun, East Java, Indonesia",

      // Footer
      footer_text: "Built and continuously developed by Arya Tejo Prawirayuda.",
      back_to_top: "BACK TO TOP ↑",

      // WhatsApp Prefilled Message
      wa_message: "Hi Yuda! I visited your portfolio website and would like to get in touch with you."
    }
  };

  // WhatsApp Configuration
  const WA_PHONE_NUMBER = "6283845334844";

  // ------------------------------------------------------------------------
  // 2. DOM ELEMENTS
  // ------------------------------------------------------------------------
  const langButtons = document.querySelectorAll(".lang-btn");
  const whatsappCtaBtn = document.getElementById("whatsappCtaBtn");
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");
  const siteHeader = document.querySelector(".site-header");
  const currentYearSpan = document.getElementById("currentYear");
  const sections = document.querySelectorAll("section[id]");

  // ------------------------------------------------------------------------
  // 3. LANGUAGE SWITCHER IMPLEMENTATION
  // ------------------------------------------------------------------------
  function setLanguage(lang) {
    if (!translations[lang]) {
      lang = "id";
    }

    // Update html tag attribute
    document.documentElement.lang = lang;

    // Apply translations to data-i18n elements
    const elementsToTranslate = document.querySelectorAll("[data-i18n]");
    elementsToTranslate.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const translation = translations[lang][key];

      if (translation !== undefined) {
        // Special case: buttons with nested SVGs
        const nestedSvg = el.querySelector("svg");
        if (nestedSvg) {
          const textSpan = el.querySelector("span");
          if (textSpan) {
            textSpan.textContent = translation;
          } else {
            // Keep SVG intact
            el.childNodes.forEach((node) => {
              if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== "") {
                node.nodeValue = ` ${translation} `;
              }
            });
          }
        } else {
          el.textContent = translation;
        }
      }
    });

    // Update document title
    if (translations[lang].meta_title) {
      document.title = translations[lang].meta_title;
    }

    // Update WhatsApp CTA Link with correctly encoded message
    if (whatsappCtaBtn) {
      const message = translations[lang].wa_message;
      const encodedMsg = encodeURIComponent(message);
      whatsappCtaBtn.href = `https://wa.me/${WA_PHONE_NUMBER}?text=${encodedMsg}`;
    }

    // Update Button Active States
    langButtons.forEach((btn) => {
      const isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    // Persist user selection
    try {
      localStorage.setItem("user_preferred_lang", lang);
    } catch (e) {
      // Handle private browsing or disabled storage gracefully
    }
  }

  // Bind click handlers to language switch buttons
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      setLanguage(selectedLang);
    });
  });

  // Determine initial language (saved preference -> browser default -> 'id')
  function getInitialLanguage() {
    try {
      const savedLang = localStorage.getItem("user_preferred_lang");
      if (savedLang && translations[savedLang]) {
        return savedLang;
      }
    } catch (e) {}

    return "id"; // Default per instructions
  }

  // ------------------------------------------------------------------------
  // 4. MOBILE NAVIGATION DRAWER
  // ------------------------------------------------------------------------
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.contains("open");
      toggleMobileMenu(!isOpen);
    });

    // Close mobile menu when a nav link is clicked
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (navMenu.classList.contains("open")) {
          toggleMobileMenu(false);
        }
      });
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (
        navMenu.classList.contains("open") &&
        !navMenu.contains(e.target) &&
        !mobileToggle.contains(e.target)
      ) {
        toggleMobileMenu(false);
      }
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navMenu.classList.contains("open")) {
        toggleMobileMenu(false);
      }
    });
  }

  function toggleMobileMenu(open) {
    if (!mobileToggle || !navMenu) return;
    mobileToggle.classList.toggle("open", open);
    navMenu.classList.toggle("open", open);
    mobileToggle.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.style.overflow = open ? "hidden" : "";
  }

  // ------------------------------------------------------------------------
  // 5. HEADER SCROLL & ACTIVE LINK HIGHLIGHTER
  // ------------------------------------------------------------------------
  function handleScroll() {
    // Header shadow on scroll
    if (siteHeader) {
      if (window.scrollY > 24) {
        siteHeader.classList.add("scrolled");
      } else {
        siteHeader.classList.remove("scrolled");
      }
    }

    // Active link highlighting
    let currentSectionId = "";
    const scrollPos = window.scrollY + 140;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = section.getAttribute("id");
      }
    });

    if (currentSectionId) {
      navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        if (href === `#${currentSectionId}`) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  }

  window.addEventListener("scroll", handleScroll, { passive: true });

  // ------------------------------------------------------------------------
  // 6. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
  // ------------------------------------------------------------------------
  const reveals = document.querySelectorAll(".reveal-on-scroll");

  if ("IntersectionObserver" in window) {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -60px 0px",
      threshold: 0.12
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    reveals.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver not supported
    reveals.forEach((el) => el.classList.add("revealed"));
  }

  // ------------------------------------------------------------------------
  // 7. DYNAMIC YEAR & DESK FLAT-LAY SUBTLE INTERACTION
  // ------------------------------------------------------------------------
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Subtle physical depth on desk workspace (desktop only, respectful of reduced motion)
  const flatlay = document.querySelector(".flatlay-workspace");
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (flatlay && !prefersReduced && window.innerWidth > 992) {
    let ticking = false;
    window.addEventListener("mousemove", (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const xFactor = (e.clientX / window.innerWidth - 0.5) * 10;
          const yFactor = (e.clientY / window.innerHeight - 0.5) * 10;
          const soap = flatlay.querySelector(".item-soap");
          const glasses = flatlay.querySelector(".item-glasses");
          const floppy = flatlay.querySelector(".item-floppy");

          if (soap) soap.style.transform = `rotate(-6deg) translate(${-xFactor * 0.5}px, ${-yFactor * 0.5}px)`;
          if (glasses) glasses.style.transform = `rotate(8deg) translate(${xFactor * 0.7}px, ${yFactor * 0.7}px)`;
          if (floppy) floppy.style.transform = `rotate(12deg) translate(${xFactor * 0.4}px, ${yFactor * 0.4}px)`;

          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ------------------------------------------------------------------------
  // 8. INITIALIZATION
  // ------------------------------------------------------------------------
  const initialLang = getInitialLanguage();
  setLanguage(initialLang);
  handleScroll();

})();

