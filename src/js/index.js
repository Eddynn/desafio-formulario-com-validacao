const button = document.getElementById("button")
const inputs = document.querySelectorAll(".formu")
const mensagemDeErro = document.querySelectorAll(".requeridos")

button.addEventListener('click', (event) => {
    event.preventDefault()

    inputs.forEach((input, indice) => {
        if (input.value === '') {
            input.classList.add("borda-vermelha")
            mensagemDeErro[indice].classList.add('mostrar')
        } else {
            input.classList.remove('borda-vermelha')
            input.classList.add('borda-verde')
            mensagemDeErro[indice].classList.remove('mostrar')
        }
    })
})
