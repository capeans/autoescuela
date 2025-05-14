
const translations = window.translations || {};

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Campos del formulario
  const form = document.querySelector("form");
  if (form) {
    const inputs = form.querySelectorAll("input, textarea, button");
    inputs.forEach(input => {
      if (input.name === "name") input.placeholder = translations[lang].nombre;
      if (input.name === "email") input.placeholder = translations[lang].correo;
      if (input.name === "message") input.placeholder = translations[lang].mensaje;
      if (input.type === "submit") input.textContent = translations[lang].enviar;
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("languageSwitcher");
  const savedLang = localStorage.getItem("lang") || "es";
  selector.value = savedLang;
  setLanguage(savedLang);

  selector.addEventListener("change", () => {
    const lang = selector.value;
    setLanguage(lang);
  });
});
