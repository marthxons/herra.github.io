const translations = {
  lv: {
    heading: "SIEVIŠĶĪBA SLĒPJAS TEVĪ",
  heading3:"Par mums",
    heading4:"Kolekcija",
    nav_about: "Par mums",
    nav_collection: "Kolekcija",
    nav_video: "Video",
    nav_materials:"Materiāli",
    nav_subscribe:"Jaunumi",
    subscribe_heading: "Pieteikties jaunumiem",
    subscribe_text: "Ievadiet savu vārdu un e-pastu, lai saņemtu jaunākās ziņas.",
    subscribe_button: "Pieteikties"

  },
  rus: {
    heading: "Женственность скрывается в тебе",
   heading3:"О нас",
    heading4:"Коллекция",
    nav_about: "О нас",
    nav_collection: "Коллекция",
    nav_video: "Видео",
    nav_materials: "Материалы",
    nav_subscribe:"Новости",
    subscribe_heading: "Подписаться на новости",
    subscribe_text: "Введите свое имя и адрес электронной почты, чтобы получать последние новости.",
    subscribe_button: "Подписаться"
  }
};

// Function to apply translations
function applyTranslations(lang) {
  document.querySelectorAll("[data-lang-key]").forEach(el => {
    const key = el.getAttribute("data-lang-key");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// Load the selected language from localStorage or default to 'lv'
const selectedLang = localStorage.getItem("lang") || "lv";
applyTranslations(selectedLang);

// Update the selected language display
document.querySelector(".selected-lang").textContent = selectedLang.toUpperCase();

// Add event listeners for language selection
document.querySelectorAll(".lang-menu a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const lang = e.target.getAttribute("data-lang");

    // Save the selected language to localStorage
    localStorage.setItem("lang", lang);

    // Update the selected language display
    document.querySelector(".selected-lang").textContent = lang.toUpperCase();

    // Apply translations
    applyTranslations(lang);
  });
});
