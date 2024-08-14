document.addEventListener('DOMContentLoaded', () => {
  const nomePedro = document.querySelector(".main-title");
  const aboutSection = document.querySelector(".aboutSection");

  nomePedro.addEventListener("click", () => {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
