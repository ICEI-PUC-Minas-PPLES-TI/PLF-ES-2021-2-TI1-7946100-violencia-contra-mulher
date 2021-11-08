// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [  
        {
            "id": 1,
            "nome": "Clementina",
            "apelido": "Cle",
            "categoria": "amigos",
            "telefone": "(31) 99648-3994",
        },
        {
            "id": 2,
            "nome": "Ana Luíza",
            "apelido": "Ana",
            "categoria": "amigos",
            "telefone": "(31) 99568-3804",
        },
        {
            "id": 3,
            "nome": "Juliana",
            "apelido": "Ju",
            "categoria": "amigos",
            "telefone": "(31) 99648-3804",
        },
        {
            "id": 4,
            "nome": "Daniel",
            "apelido": "Dani",
            "categoria": "amigos",
            "telefone": "(31) 99648-3800",
        },
        {
            "id": 5,
            "nome": "Paula",
            "apelido": "Paulinha",
            "categoria": "amigos",
            "telefone": "(31) 99999-3804",
        },
        {
            "id": 6,
            "nome": "Ana Diniz",
            "apelido": "Diniz",
            "categoria": "Familía",
            "telefone": "(31) 99669-3804",
        },
        {
            "id": 7,
            "nome": "Douglas",
            "apelido": "Dô",
            "categoria": "Familía",
            "telefone": "(31) 99689-3804",
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "telefone": contato.telefone,
        "apelido" : contato.apelido,
        "categoria": contato.categoria,
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = contato.nome,
    db.data[index].email = contato.email,
    db.data[index].telefone = contato.telefone,
    db.data[index].apelido = contato.apelido,
    db.data[index].categoria = contato.categoria,

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

