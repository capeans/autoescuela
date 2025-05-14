window.translations = 
const translations = {
  es: {
    inicio: "Inicio",
    servicios: "Servicios",
    precios: "Precios",
    politica: "Política",
    contacto: "Contacto",
    contactoTitulo: "Contacto",
    telefono: "Teléfono",
    email: "Correo electrónico",
    horas: "Horario de apertura",
    formTitulo: "Formulario de reserva",
    enviado: "¡Mensaje enviado con éxito!",
    error: "Hubo un error al enviar tu mensaje.",
    nombre: "Tu Nombre",
    correo: "Tu Correo",
    mensaje: "Tu Mensaje",
    enviar: "Enviar"
  },
  en: {
    inicio: "Home",
    servicios: "Services",
    precios: "Prices",
    politica: "Policy",
    contacto: "Contact",
    contactoTitulo: "Contact",
    telefono: "Phone",
    email: "Email",
    horas: "Opening Hours",
    formTitulo: "Booking Form",
    enviado: "Message sent successfully!",
    error: "There was an error sending your message.",
    nombre: "Your Name",
    correo: "Your Email",
    mensaje: "Your Message",
    enviar: "Send"
  },
  pt: {
    inicio: "Início",
    servicios: "Serviços",
    precios: "Preços",
    politica: "Política",
    contacto: "Contato",
    contactoTitulo: "Contato",
    telefono: "Telefone",
    email: "Email",
    horas: "Horário de funcionamento",
    formTitulo: "Formulário de reserva",
    enviado: "Mensagem enviada com sucesso!",
    error: "Houve um erro ao enviar sua mensagem.",
    nombre: "Seu Nome",
    correo: "Seu Email",
    mensaje: "Sua Mensagem",
    enviar: "Enviar"
  },
  it: {
    inicio: "Home",
    servicios: "Servizi",
    precios: "Prezzi",
    politica: "Politica",
    contacto: "Contatto",
    contactoTitulo: "Contatto",
    telefono: "Telefono",
    email: "Email",
    horas: "Orari di apertura",
    formTitulo: "Modulo di prenotazione",
    enviado: "Messaggio inviato con successo!",
    error: "Si è verificato un errore nell'invio del messaggio.",
    nombre: "Il tuo nome",
    correo: "La tua email",
    mensaje: "Il tuo messaggio",
    enviar: "Invia"
  },
  fr: {
    inicio: "Accueil",
    servicios: "Services",
    precios: "Tarifs",
    politica: "Politique",
    contacto: "Contact",
    contactoTitulo: "Contact",
    telefono: "Téléphone",
    email: "Email",
    horas: "Heures d'ouverture",
    formTitulo: "Formulaire de réservation",
    enviado: "Message envoyé avec succès !",
    error: "Une erreur s'est produite lors de l'envoi du message.",
    nombre: "Votre nom",
    correo: "Votre email",
    mensaje: "Votre message",
    enviar: "Envoyer"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelector("input[name='name']").placeholder = translations[lang].nombre;
  document.querySelector("input[name='email']").placeholder = translations[lang].correo;
  document.querySelector("textarea[name='message']").placeholder = translations[lang].mensaje;
  document.querySelector("button[type='submit']").innerText = translations[lang].enviar;
}

document.getElementById("languageSwitcher").addEventListener("change", function () {
  setLanguage(this.value);
});

window.addEventListener("DOMContentLoaded", () => {
  setLanguage(document.getElementById("languageSwitcher").value);
});

translations.es = Object.assign(translations.es, {
  servicios1: "Clases de inglés, español, portugués e italiano.",
  servicios2: "Manual y automático.",
  servicios3: "10% de descuento para reservas en bloque.",
  servicios4: "Instructores altamente experimentados y amables.",
  servicios5: "Servicio de recogida gratuito dentro de nuestras zonas de acción.",
  servicios6: "Pruebas prácticas de simulación.",
  servicios7: "Precios competitivos.",
  servicios8: "Pass Plus disponible.",

  duracion: "Duración",
  manual: "Manual",
  automatico: "Automático",
  prueba1h: "Clase de prueba de 1 hora",
  cincoh: "5 Horas",
  diezh: "10 Horas",
  extras: "Extras",
  cocheExamen: "Alquiler coche examen desde £150 (incluye clase de 1½ hora previa)",
  autopista: "Clases en autopista - £35",
  passplus: "Pass Plus - £210 - 6h",
  centros: "Centros de Examen",
  centrosDescripcion: "£150 por los centros con recogida 1½h antes",
  centro1: "Greenford Horsenden Lane",
  centro2: "Southall",
  centro3: "Mill Hill",
  centro4: "Hendon",

  politica1: "Los instructores de Granada son autónomos con franquicia.",
  politica2: "Una vez asignado el instructor, todo trato es entre el alumno y el instructor.",
  politica3: "No existe relación contractual con Granada Driving School.",
  politica4: "Si pagas por hora, una debe estar abonada en todo momento.",
  politica5: "Cancelaciones con menos de 48h conllevan el coste completo.",
  politica6: "No se pueden cancelar clases en fin de semana.",
  politica7: "Los pagos se hacen directamente al instructor en efectivo o cheque.",
  politica8: "Reembolsos solo dentro del año desde el pago, solicitados al instructor.",
  politica9: "Las ofertas pueden cambiar sin previo aviso.",
  politica10: "El instructor puede negar el coche si considera que hay riesgo público.",
  politica11: "Alquiler de coche solo tras una clase de al menos 1 hora."
});

translations.en = Object.assign(translations.en, {
  servicios1: "English, Spanish, Portuguese and Italian lessons.",
  servicios2: "Manual and automatic.",
  servicios3: "10% discount for block bookings.",
  servicios4: "Highly experienced and friendly instructors.",
  servicios5: "Free pick-up within our operating areas.",
  servicios6: "Mock driving tests.",
  servicios7: "Competitive pricing.",
  servicios8: "Pass Plus available.",

  duracion: "Duration",
  manual: "Manual",
  automatico: "Automatic",
  prueba1h: "1 Hour Trial Lesson",
  cincoh: "5 Hours",
  diezh: "10 Hours",
  extras: "Extras",
  cocheExamen: "Driving test car hire from £150 (includes 1½ hour lesson)",
  autopista: "Motorway Lessons - £35",
  passplus: "Pass Plus - £210 - 6 hrs",
  centros: "Test Centres Car Hire Price List",
  centrosDescripcion: "£150 for the test centres below (pick up 1½ hr before the test)",
  centro1: "Greenford Horsenden Lane",
  centro2: "Southall",
  centro3: "Mill Hill",
  centro4: "Hendon",

  politica1: "Granada driving instructors are self-employed franchisees.",
  politica2: "Once assigned, all tuition is between pupil & instructor.",
  politica3: "No contractual liability arises with Granada Driving School.",
  politica4: "Hourly payers must always have one lesson paid in advance.",
  politica5: "Less than 48h cancellation incurs full charge.",
  politica6: "Weekend lessons cannot be cancelled.",
  politica7: "Payments directly to instructor by cash or cheque.",
  politica8: "Refunds within one year of payment, requested to instructor.",
  politica9: "Offers subject to change without notice.",
  politica10: "Instructor may refuse use of vehicle if safety risk.",
  politica11: "Test car hire only after minimum 1 hour lesson."
});

// Traducciones para pt, it y fr se agregarán en siguiente paso
