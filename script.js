const translations = {
  lv: {
    heading: "SIEVIŠĶĪBA SLĒPJAS TEVĪ",
   heading3:"Par mums",
   heading4:"Kolekcija \"Nakts krāsas\"",
   text:"Mūsu zīmola identitāte ir sievišķība, mēs ražojam kvalitatīvus apģērbus, ko var atļauties katrs, bet liekam tam izskatīties kā luksa precei, akcentējot uz sievietes skaistākajām iezīmēm, lai izceltu tās skaistumu. Ražoti tiek vairāki apģērba gabali, sākot no kleitām, svārkiem, biksēm, līdz ar apaviem, blūzēm, krekliem un citiem augšējā seguma apģērbiem. Mūsu mērķis ir palīdzēt sievietēm vairāk iepazīt sevi, un nevis slēpt to, kam trūkst pārliecība, bet iejusties savā daiļākajā lomā un iziet no mājas ar paaugstinātu pašpārliecību. Katra sieviete ir spējīga kam vairāk, katrā sievietē ir milzīgs potenciāls un vara, tāpēc mēs esam šeit, lai to atrastu. Atrodi sev piemērotāko, ērtāko, skaistāko apģērbu, ar mums, ar HERRA. Sievišķība slēpjas Tevī!",
   nav_about: "Par mums",
    nav_collection: "Kolekcija",
    nav_video: "Video",
    nav_materials:"Materiāli",
    nav_subscribe:"Jaunumi",
    subscribe_heading: "Pieteikties jaunumiem",
    subscribe_text: "Ievadiet savu vārdu un e-pastu, lai saņemtu jaunākās ziņas.",
    subscribe_button: "Pieteikties",
    outfit1: 'Savvaļas dvēsele - 80€ ',
    outfit2: 'Mistiskais aptumsums - 70€',
    outfit3: 'Tumšā pantēra - 90€',
    outfit4: 'Pusnakts maigums - 90€',
    outfit5: 'Sarkanā zvaigzne - 60€',
    outfit6: 'Sapņu viļņi - 75€',
    outfit7: 'Nakts zieds - 70€',
    outfit8: 'Zīda mēness - 70€',
    

  },
  rus: {
    heading: "Женственность скрывается в тебе",
   heading3:"О нас",
   heading4:"Коллекция \"Цвета ночи\"",
  text:"Наш фирменный стиль – женственность, мы производим качественную одежду, которую может себе позволить каждая, но делаем ее похожей на предмет роскоши, подчеркивая самые красивые черты женщины, подчеркивая ее красоту. Выпускается несколько предметов одежды: от платьев, юбок, брюк до туфель, блузок, рубашек и другой верхней одежды. Наша цель – помочь женщинам лучше узнать себя, и не скрывать себя, а вжился в самую прекрасную роль и выйти из дома с повышенной уверенностью в себе. Каждая женщина способна на большее, каждая женщина обладает огромным потенциалом и силой, поэтому мы здесь, чтобы ее найти. Найдите для себя самую подходящую, самую удобную, самую красивую одежду у нас HERRA. Женственность скрыта в тебе!",
    nav_about: "О нас",
    nav_collection: "Коллекция",
    nav_video: "Видео",
    nav_materials: "Материалы",
    nav_subscribe:"Новости",
    subscribe_heading: "Подписаться на новости",
    subscribe_text: "Введите свое имя и адрес электронной почты, чтобы получать последние новости.",
    subscribe_button: "Подписаться",
    outfit1: 'Дикая душа - 80€',
    outfit2: 'Мистическое затмение - 70€',
    outfit3: 'Тёмная пантера - 90€',
    outfit4: 'Полуночная нежность - 90€',
    outfit5: 'Красная звезда - 60€',
    outfit6: 'Волны снов - 75€',
    outfit7: 'Ночной цветок - 70€',
    outfit8: 'Шёлковая луна - 70€'
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