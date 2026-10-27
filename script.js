/*
  IMPORTANTE: cambia el número de WhatsApp por el tuyo, en formato internacional,
  solo números. Para Perú, normalmente comienza por 51. Ejemplo: 51987654321.
*/
const WHATSAPP_NUMBER = "51991674938";
const DEFAULT_MESSAGE = "Hola, vi su página Mi Mueble Ideal y quisiera información sobre sus roperos de melamina.";

function whatsappUrl(message = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll(".wa-link").forEach(link => {
  link.href = whatsappUrl();
});
document.querySelectorAll("[data-product]").forEach(link => {
  const product = link.dataset.product;
  link.href = whatsappUrl(`Hola, vi el modelo ${product} en Mi Mueble Ideal. ¿Me podrían informar el precio, las medidas y la disponibilidad?`);
});
const mainWa = document.getElementById("main-wa");
if (mainWa) mainWa.href = whatsappUrl("Hola, quisiera asesoría para elegir un ropero de melamina. ¿Me brindan información sobre modelos, precios y envíos?");
document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.textContent = isOpen ? "✕" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.textContent = "☰";
}));
