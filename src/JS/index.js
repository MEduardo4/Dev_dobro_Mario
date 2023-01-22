const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");
const LinkDoVideo  = video.src;

botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto");
    video.setAttribute("src", LinkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {

    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});
