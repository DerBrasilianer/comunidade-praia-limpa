let history = [] // Array para armazenar o histórico de resultados do BMI

function calculate(e) {
  e.preventDefault() // Evita que o formulário seja submetido
  const form = e.target // Obtém o formulário que acionou o evento
  const height = Number(form.height.value) // Obtém a altura do formulário e converte para número
  const weight = Number(form.weight.value) // Obtém o peso do formulário e converte para número

  const bmi = weight / (height * height) // Calcula o índice de massa corporal (BMI)

  const bmiResult = { // Cria um objeto com os resultados do BMI
    height: height,
    weight: weight,
    bmi: bmi
  }

  const bmiResultElement = document.getElementById('bmi') // Elemento HTML para exibir o resultado do BMI
  const json = document.getElementById('json') // Elemento HTML para exibir os resultados em formato JSON
  const resultDialog = document.getElementById('result') // Diálogo para exibir o resultado
  bmiResultElement.innerHTML = `${bmi.toFixed(2)}kg/m²` // Exibe o resultado do BMI com duas casas decimais
  json.innerHTML = `${JSON.stringify(bmiResult, null, 2)}` // Exibe o objeto de resultados como JSON formatado
  history.push(bmiResult) // Adiciona o resultado atual ao histórico
  renderHistory() // Renderiza o histórico na página
  resultDialog.showModal() // Mostra o diálogo de resultado

  form.reset() // Limpa o formulário após o cálculo
}

function resetAll() {
  const form = document.querySelector('form') // Obtém o formulário
  const bmi = document.getElementById('bmi') // Elemento HTML para exibir o resultado do BMI
  const json = document.getElementById('json') // Elemento HTML para exibir os resultados em formato JSON
  const historyElement = document.getElementById('history') // Elemento HTML para exibir o histórico
  bmi.innerHTML = '' // Limpa o resultado do BMI
  json.innerHTML = '' // Limpa os resultados em formato JSON
  history = [] // Reseta o histórico
  form.reset() // Limpa o formulário
  renderHistory() // Renderiza o histórico vazio
  historyElement.innerHTML = '<li>Empty</li>' // Exibe uma mensagem de histórico vazio
}

function closeResult() {
  const resultDialog = document.getElementById('result') // Diálogo de resultado
  resultDialog.close() // Fecha o diálogo
}

function renderHistory() {
  const historyElement = document.getElementById('history') // Elemento HTML para exibir o histórico
  historyElement.innerHTML = '' // Limpa o conteúdo atual do histórico
  history.forEach((item, index) => { // Itera sobre cada item no histórico
    const listItem = document.createElement('li') // Cria um elemento de lista
    listItem.innerHTML = `<h6>#${index + 1}: ${item.bmi.toFixed(2)}kg/m²</h6>` // Adiciona o resultado do BMI como título
    listItem.innerHTML += `<pre>${JSON.stringify(item, null, 2)}</pre>` // Adiciona o objeto de resultados como texto formatado
    historyElement.appendChild(listItem) // Adiciona o item à lista de histórico
  })
}
