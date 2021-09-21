const inputCEP = document.querySelector('#inputCEP')
const inputLOGA = document.querySelector('#inputLOGA')
const inputBAIRRO = document.querySelector('#inputBAIRRO')
const inputESTADO = document.querySelector('#inputESTADO')
const inputCIDADE = document.querySelector('#inputCIDADE')
const buttonProx = document.querySelector('.prosseguir')
const buttonAcess = document.querySelector('.button-acess')
const modalOptionsAcess = document.querySelector('.modal-options')
const alterFonts = document.querySelector('.alter-font')


const searchCEP = async(cep) => {
    if(inputCEP.value == false) {
        alert('Insira seu CEP!')
    }
    else {
        cep = inputCEP.value
        url = `https://viacep.com.br/ws/${cep}/json/`
    
        const dados = await fetch(url)
        const endereco = await dados.json()
        
        inputLOGA.value = endereco.logradouro
        inputBAIRRO.value = endereco.bairro
        inputESTADO.value = endereco.uf
        inputCIDADE.value = endereco.localidade
    }
}

buttonProx.addEventListener('click', searchCEP)

function ativaAcess() {
    modalOptionsAcess.classList.toggle('active')
}

function alterFont() {
    console.log('ok')
    document.body.classList.toggle('acess')
}

buttonAcess.addEventListener('click', ativaAcess)
alterFonts.addEventListener('click', alterFont)