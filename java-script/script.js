function menushow() {
    let menumobile = document.querySelector('.mobile-menu')

    if (menumobile.classList.contains('open')) {
        menumobile.classList.remove('open')
        document.querySelector('.icon').src = "../imagens/menu_white_36dp.svg";
    } else {
        menumobile.classList.add('open')
        document.querySelector('.icon').src = "../imagens/close_white_36dp.svg";
    }
}


function entrar() {

    let usuario = window.document.getElementById('txtusuario')

    let senha = window.document.getElementById('txtsenha')

    if (usuario.value == 'Victor' && senha.value == 123){

        window.location = ('')

    } else {
        window.alert('Usuário ou senha incorreto!')
    }
}