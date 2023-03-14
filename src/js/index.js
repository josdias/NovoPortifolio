const menu = document.getElementById("menu");
const main = document.querySelector("main");

function abrirMenu() {
  if (menu.classList.contains("ativa")) {
    menu.classList.remove("ativa");
    menu.classList.remove("animacao")
    document.querySelector(".botao-icone").src = "src/img/icon/menu.svg";
    main.classList.remove("blur")
    /* main.classList.add("reverso") */
  } else {
    menu.classList.add("ativa");
    menu.classList.add("animacao")
    document.querySelector(".botao-icone").src = "src/img/icon/menu-scale.svg";
    main.classList.add("blur")
   /*  main.classList.remove("reverso") */
  }
}
