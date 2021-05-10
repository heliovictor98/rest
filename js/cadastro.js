function cadastrarPessoa(){
    let email = document.getElementById("email").value
    let nome = document.getElementById("nome").value
    let senha = document.getElementById("password").value
    let confirma = document.getElementById("confirmasenha").value

    if(senha == "" || senha.lenght <= 5){
        alert('A senha deve conter minimo 6 caracteres')
        senha.focus()
        return false
    }
    if(confirma == "" || confirma.lenght <= 5){
        alert('A senha deve conter minimo 6 caracteres')
        confirma.focus()
        return false
    }
    if(senha != confirma){
        alert('Senha Diferente')
        senha.focus()
        return false
    }else{
        alert('Cadastrado com sucesso')
    }
}