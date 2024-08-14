const nomePedro = document.querySelector(".main-title");
const aboutSection = document.querySelector(".aboutSection");
const scrollContainer = document.getElementById("scroll-container");

nomePedro.addEventListener("click", () => {
  aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
