function esqueceu (){
    window.prompt("DIGITE SEU NÚMERO DE TELEFONE PARA ENVIARMOS SUA NOVA SENHA:");
}
function processaForm(evt){
    console.log("entrei")
    evt.preventDefault ();
        d_senha = window.document.getElementById('senha').value;
        d_cpf = window.document.getElementById('cpf').value;
    
        let usuario = {
            senha : d_senha,
            cpf : d_cpf,
        }
        
        // Verifica se ja existe algo no local storage
        let usuarios = []
        let usuarios_txt = localStorage.getItem("db_usuario");
        if (usuarios_txt) {
            usuarios = JSON.parse(usuarios_txt)
        } 
        let usuariofiltrado = usuarios.filter(u => u.cpf === usuario.cpf)
        if (usuariofiltrado.length == 1){
            if (usuario.senha == usuariofiltrado[0].senha){
                alert("usuario logado!")
                window.location.href = "/cadas_usuario.html";
            } else {
                alert("SENHA INVALIDA")
            }
        } else {
            alert("USUARIO NÃO ENCONTRADO!")
        }

    }