const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', () => {
    const inputTarefa = document.querySelector('[data-form-input]')
    const valor = inputTarefa.value
    console.log(valor)
})
