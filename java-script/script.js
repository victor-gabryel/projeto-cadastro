function menu(){

}


function entrar(){

    let usuario = window.document.getElementById('txtusuario')

    let senha = window.document.getElementById('txtsenha')

    if (usuario.value == 'Victor' && senha.value == 123){

        window.location = ('')

    } else {
        window.alert('Usuário ou senha incorreto!')
    }
}