const translations = {
    es: {
      "nav.inicio": "Inicio",
      "nav.servicios": "Servicios",
      "nav.precios": "Precios",
      "nav.politica": "Política",
      "nav.contacto": "Contacto",
      "hero.titulo": "Tu autoescuela de confianza en Granada",
      "hero.descripcion": "Ofrecemos clases teóricas y prácticas adaptadas a ti, con los mejores instructores.",
      "features.1.title": "Instructores Profesionales",
      "features.1.desc": "Contamos con un equipo altamente cualificado y con años de experiencia.",
      "features.2.title": "Vehículos Modernos",
      "features.2.desc": "Coches seguros, nuevos y adaptados para todos los niveles.",
      "features.3.title": "Preparación para el Éxito",
      "features.3.desc": "Te preparamos al 100% para superar el examen teórico y práctico.",
      "footer.todos": "Todos los derechos reservados."
    },
    en: {
      "nav.inicio": "Home",
      "nav.servicios": "Services",
      "nav.precios": "Prices",
      "nav.politica": "Policy",
      "nav.contacto": "Contact",
      "hero.titulo": "Your trusted driving school in Granada",
      "hero.descripcion": "We offer theory and practical classes tailored to you, with the best instructors.",
      "features.1.title": "Professional Instructors",
      "features.1.desc": "We have a highly qualified team with years of experience.",
      "features.2.title": "Modern Vehicles",
      "features.2.desc": "Safe, new cars adapted for all levels.",
      "features.3.title": "Preparation for Success",
      "features.3.desc": "We prepare you 100% to pass both theory and practical exams.",
      "footer.todos": "All rights reserved."
    },
    pt: {
      "nav.inicio": "Início",
      "nav.servicios": "Serviços",
      "nav.precios": "Preços",
      "nav.politica": "Política",
      "nav.contacto": "Contato",
      "hero.titulo": "Sua autoescola de confiança em Granada",
      "hero.descripcion": "Oferecemos aulas teóricas e práticas adaptadas a você, com os melhores instrutores.",
      "features.1.title": "Instrutores Profissionais",
      "features.1.desc": "Temos uma equipe altamente qualificada com anos de experiência.",
      "features.2.title": "Veículos Modernos",
      "features.2.desc": "Carros novos, seguros e adaptados para todos os níveis.",
      "features.3.title": "Preparação para o Sucesso",
      "features.3.desc": "Preparamos você 100% para passar nos exames teórico e prático.",
      "footer.todos": "Todos os direitos reservados."
    }
  };
  
  document.getElementById('language-switcher').addEventListener('change', (e) => {
    const lang = e.target.value;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  });
  