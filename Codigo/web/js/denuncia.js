// declara um conjunto inicial de contatos


var db_denuncias_inicial = {
    "data": [{
            "id": 1,
            "nome": "Leanne Graham",
            "email": "Sincere@april.biz",
            "telefone": "1-770-736-8031",
            "telefone2": "1-770-736-9999",
            "cidade": "Belo Horizonte",
            "bairro": "Savassi",
            "uf": "MG",
            "detalhes": "quero denunciar o meu marido por x motivo",
        },
        {
            "id": 2,
            "nome": "Ervin Howell",
            "email": "Sincere2@april.biz",
            "telefone": "1-770-736-8031",
            "telefone2": "1-770-736-9999",
            "cidade": "Betim",
            "bairro": "Bandeirinhas",
            "uf": "MG",
            "detalhes": "quero denunciar o meu tio por x motivo",
        },
        {
            "id": 3,
            "nome": "Clementine Bauch",
            "email": "Sincere3@april.biz",
            "telefone": "1-770-736-8031",
            "telefone2": "33554466",
            "cidade": "Belo Horizonte",
            "bairro": "Savassi",
            "uf": "MG",
            "detalhes": "quero denunciar o meu tio por x motivo"
        },
        {
            "id": 4,
            "nome": "Joselina",
            "email": "Sincere4@april.biz",
            "telefone": "1-770-888-8031",
            "telefone2": "33664466",
            "cidade": "Belo Horizonte",
            "bairro": "Savassi",
            "uf": "MG",
            "detalhes": "quero denunciar o meu cunhado por x motivo"
        },
        {
            "id": 5,
            "nome": "Silvana",
            "email": "Sincere5@april.biz",
            "telefone": "1-330-888-8031",
            "telefone2": "33699466",
            "cidade": "Contagem",
            "bairro": "Eldorado",
            "uf": "MG",
            "detalhes": "quero denunciar o meu colega de trabalho por x motivo"
        },
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_denuncia'));
if (!db) {
    db = db_denuncias_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertDenuncia(denuncia) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    previewFile();
    if (db.data.length != 0)
        novoId = db.data[db.data.length - 1].id + 1;
    let novaDenuncia = {
        "id": novoId,
        "nome": denuncia.nome,
        "telefone": denuncia.telefone,
        "telefone2": denuncia.telefone2,
        "email": denuncia.email,
        "cidade": denuncia.cidade,
        "bairro": denuncia.bairro,
        "uf": denuncia.uf,
        "detalhes": denuncia.detalhes,
        "img": imgAsDataURL,
    };

    // Insere o novo objeto no array
    db.data.push(novaDenuncia);
    displayMessage("Denuncia inserida com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_denuncia', JSON.stringify(db));
}

function updateDenuncia(id, denuncia) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = denuncia.nome,
        db.data[index].telefone = denuncia.telefone,
        db.data[index].telefone2 = denuncia.telefone2,
        db.data[index].email = denuncia.email,
        db.data[index].cidade = denuncia.cidade,
        db.data[index].bairro = denuncia.bairro,
        db.data[index].uf = denuncia.uf,
        db.data[index].detalhes = denuncia.detalhes

    displayMessage("Denuncia alterada com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_denuncia', JSON.stringify(db));
}

function deleteDenuncia(id) {
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function(element) { return element.id != id });

    displayMessage("Denuncia removida com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_denuncia', JSON.stringify(db));
}

//Função que faz o preview das imagens

function previewFile() {
    const preview = document.querySelector('img');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function() {
        // Converte para base64 ou daraURL
        preview.src = reader.result;
        imgAsDataURL = preview.src;
    }, false);

    if (file) {
        reader.readAsDataURL(file);

    }
    $("img").show();
}

function saveData() {
    //Declaração das variaveis
    let name, tel, tel2, email, city, district, uf, details, img;
    //as variaveis recebem os elementos baseados no id criados no formulario 
    name = document.getElementById("inputName").value;
    tel = document.getElementById("inputTel").value;
    tel2 = document.getElementById("inputTel2").value;
    email = document.getElementById("inputEmail").value;
    city = document.getElementById("inputCity").value;
    district = document.getElementById("inputDistrict").value;
    uf = document.getElementById("inputUf").value;
    details = document.getElementById("subject").value;
    img = document.getElementById("formFile").value;
    //Chama a função que converte imagem para dataURL
    previewFile();

    //cria novo array []
    let registroDenuncias = new Array();
    //verifica se ja existe uma key com o nome denuncias, se existir, o registroDenuncias vai fazer o push de um novo objeto, se não cria um novo array com essa key 
    registroDenuncias = JSON.parse(localStorage.getItem("denuncias")) ? JSON.parse(localStorage.getItem("denuncias")) : []
        //envia a denuncia para o array
    registroDenuncias.push({
        "name": name,
        "telephone": tel,
        "telephone2": tel2,
        "email": email,
        "city": city,
        "district": district,
        "uf": uf,
        "details": details,
        "img": imgAsDataURL,
    });
    //transforma em string 
    localStorage.setItem("denuncias", JSON.stringify(registroDenuncias));
}