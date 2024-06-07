function toggleMenu() {
    const menu = document.querySelector(".cabecalho__menu");
    menu.classList.toggle("cabecalho__menu--aberto");
  
    // Ocultar/exibir elementos adicionais
    const botao = document.querySelector(".cabecalho__menu__imagem");
    const links = document.querySelectorAll(".cabecalho__menu__link");
    const loginLink = document.querySelector(".cabecalho__menu__link__login");
  
    botao.classList.toggle("cabecalho__menu__imagem--escondido");
    links.forEach((link) => link.classList.toggle("cabecalho__menu__link--escondido"));
    loginLink.classList.toggle("cabecalho__menu__link__login--escondido");
  }