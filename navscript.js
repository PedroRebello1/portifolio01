const nomePedro = document.querySelector(".main-title");
const aboutSection = document.querySelector(".aboutSection"); // Assuming this is the class for your "about" section

nomePedro.addEventListener("click", () => {
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});
