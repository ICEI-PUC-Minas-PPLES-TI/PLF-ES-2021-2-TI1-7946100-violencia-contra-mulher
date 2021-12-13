let usuarios_txt = localStorage.getItem("db_usuario");

if (usuarios_txt) {
    usuarios = JSON.parse(usuarios_txt)
}

function processaForm(evt) {
    evt.preventDefault();
    d_nome = window.document.getElementById('nome').value;
    d_senha = window.document.getElementById('senha').value;
    d_tel = window.document.getElementById('telefone').value;
    d_data = window.document.getElementById('data').value;
    d_cpf = window.document.getElementById('cpf').value;
    d_rua = window.document.getElementById('rua').value;
    d_bairro = window.document.getElementById('bairro').value;
    d_cidade = window.document.getElementById('cidade').value;
    d_comple = window.document.getElementById('comple').value;

    let usuario = {
        nome: d_nome,
        senha: d_senha,
        tel: d_tel,
        data: d_data,
        cpf: d_cpf,
        rua: d_rua,
        bairro: d_bairro,
        cidade: d_cidade,
        comple: d_comple,
    }

    // Verifica se ja existe algo no local storage
    let usuarios = []
    let usuarios_txt = localStorage.getItem("db_usuario");

    if (usuarios_txt) {
        usuarios = JSON.parse(usuarios_txt)
    }
    if (usuario.cpf === usuarios.cpf) {
        window.alert("CPF JÁ CADASTRADO!")
    } else {
        usuarios.push(usuario)
        localStorage.setItem("db_usuario", JSON.stringify(usuarios))
        window.alert("Dados enviados com sucesso!");
        window.location.href = "../pages/login.html";
    }


}
function updateContato(id, contato) {
    console.log(id)
    console.log(usuarios)
    let index = localStorage.getItem("contato");
    console.log(index)

    // Altera os dados do objeto no array
    contato[index].nome = usuario.nome,
        usuario[index].tel = contato.tel,
        usuario[index].data = contato.data,
        usuario[index].cidade = contato.cidade,
        usuario[index].cpf = contato.cpf,
        usuario[index].bairro = contato.bairro,
        usuario[index].comple = contato.comple,
        usuarios[index].rua = contato.rua

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_usuario', JSON.stringify(db));
}

function deleteContato(id) {
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_usuario', JSON.stringify(db));
}



