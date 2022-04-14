let btn = document.querySelector('#verSenha')


let btnConfirm = document.querySelector('#confirmSenha')
let msgErro = document.querySelector('#msgErro')
let msgSucess = document.querySelector('#msgSucess')


let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false


let confirmaSenha = document.querySelector('#confirmaSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false


/* O keyup é para quando eu parar de digitar ele ja vai fazer o qeu a função pede
 * O innerHTML ele muda literalmente o HTML via js
 */
nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome *Insira no mínimo 3 caracteres'
        nome.setAttribute('style' , 'border-color: red')
        validNome = false //estamos vendo se o campo esta certo ao clicar no botão confirmar

    }else {
        labelNome.setAttribute('style', 'color:green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style' , 'border-color: green')
        validNome = true
    }
})

//aqui estamos validando os campos
usuario.addEventListener('keyup', () => {
    if(usuario.value.length <= 3) {
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = 'Usuario *Insira no mínimo 4 caracteres'
        usuario.setAttribute('style' , 'border-color: red')
        validUsuario = false

    }else {
        labelUsuario.setAttribute('style', 'color:green')
        labelUsuario.innerHTML = 'Usuario'
        usuario.setAttribute('style' , 'border-color: green')
        validUsuario = true

    }
})

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 7) {
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha *Insira no mínimo 8 caracteres'
        senha.setAttribute('style' , 'border-color: red')
        validSenha = false

    }else {
        labelSenha.setAttribute('style', 'color:green')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style' , 'border-color: green')
        validSenha = true

    }
})

confirmaSenha.addEventListener('keyup', () => {
    if(senha.value != confirmaSenha.value) {
        
        labelConfirmSenha.setAttribute('style', 'color: red')
        labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
        confirmaSenha.setAttribute('style' , 'border-color: red')
        validConfirmSenha = false

    }else {
        labelConfirmSenha.setAttribute('style', 'color:green')
        labelConfirmSenha.innerHTML = 'Confirmar Senha'
        confirmaSenha.setAttribute('style' , 'border-color: green')
        validConfirmSenha = true

    }
})


function cadastrar( ){

    if(validNome && validSenha && validUsuario && validConfirmSenha){

        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]') 
        // ou ele adiciona algo que ja tem ou pega um vazio
        listaUser.push(
            {
                nomeCad: nome.value,
                userCad: usuario.value,
                senhaCad: senha.value
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))
            
                
            
        


        msgSucess.setAttribute('style' , 'display: block')
        msgSucess.innerHTML = 'Cadastrando usuário!'
        msgErro.setAttribute('style' , 'display: none')
        msgErro.innerHTML = ''


        setTimeout(() =>{
            window.location.href = 'index.html'

        }, 3000)


    }else{
        msgErro.setAttribute('style' , 'display: block')
        msgErro.innerHTML = 'Preencha todos os campos corretamente para avançar!'
        msgSucess.setAttribute('style' , 'display: none')
        msgSucess.innerHTML = ''
    }

}




btn.addEventListener('click', ()=> {
    let inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text' ) 
    } else {
        inputSenha.setAttribute('type', 'password')
    }
} )



btnConfirm.addEventListener('click', ()=> {
    let inputConfirmSenha = document.querySelector('#confirmaSenha')

    if (inputConfirmSenha.getAttribute('type') == 'password'){
        inputConfirmSenha.setAttribute('type', 'text' ) 
    } else {
        inputConfirmSenha.setAttribute('type', 'password')
    }
} )

function entrar(){
    let usuario = document.querySelector('#usuario')
    let labelUsuario = document.querySelector('#labelUser')

    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')

    let msgErro = document.querySelector('#msgErro')
    let listaUser = []

    let userValid = {
        nome:'b',
        user:'1' ,
        senha:'31.500.000//*//'
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if (usuario.value == item.userCad && senha.value == item.senhaCad) {
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    })

    if(usuario.value == userValid.user && senha.value == userValid.senha){
        window.location.href='telaInicio.html'

    }else {
        labelUsuario.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        senhaLabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        msgErro.setAttribute('style', 'display: block')
        msgErro.innerHTML = 'Usuário ou senha incorreto'
        usuario.focus()
    }

}


