
function calculate(e) {
  e.preventDefault()


  const form = e.target
  const nome = form.nome.value
  const estado = form.estado.value
  const cidade = form.cidade.value
  const cep = form.cep.value

  const relatorio = {
    nome: nome,
    estado: estado,
    cidade: cidade,
    cep: cep,
  }

  const relatorioElement = document.getElementById('objeto')
  const json = document.getElementById('json')
  const resultDialog = document.getElementById('result')

  json.innerHTML = (`${JSON.stringify(relatorio, null, 2)}`)
  resultDialog.showModal()

  form.reset()
}

function fechar() {
  const resultDialog = document.getElementById('result')
  resultDialog.close()
}

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
