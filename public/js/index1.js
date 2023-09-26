const boutonTog = document.querySelector(".boutonTog");
const boutonTogI = document.querySelector(".boutonTog i");
const dropMenu = document.querySelector(".dropMenu");

boutonTog.onclick = function () {
    dropMenu.classList.toggle("open");

    const isOpen = dropMenu.classList.contains("open");

    boutonTogI.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
