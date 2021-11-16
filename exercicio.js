function processaForm(evt){
    evt.preventDefault ();

    if (Form.submit.value == "Salvar") {
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
            nome : d_nome,
            senha : d_senha,
            tel : d_tel,
            data : d_data,
            cpf : d_cpf,
            rua : d_rua,
            bairro : d_bairro,
            cidade : d_cidade,
            comple : d_comple,
        }
        
        // Verifica se ja existe algo no local storage
        let usuarios = []
        let usuarios_txt = localStorage.getItem("db_usuario");
        if (usuarios_txt) {
            usuarios = JSON.parse(usuarios_txt)
        }
        usuarios.push(usuario)
        localStorage.setItem("db_usuario", JSON.stringify(usuarios))
        $("#table-contatos").html("");

            // Popula a tabela com os registros do banco de dados
            for (i = 0; i < db.data.length; i++) {
                let contato = db.data[i];    
                $("#table-contatos").append(`<tr><td scope="row">${contato.nome}</td>
                                                <td>${contato.telefone}</td>
                                                <td>${contato.cpf}</td>
                                                <td>${contato.data}</td>
                                                <td>${contato.rua}</td>
                                                <td>${contato.bairro}</td>
                                                <td>${contato.cidade}</td>
                                                <td>${contato.comple}</td>
                                                <td>${contato.id}</td>
                                                
                                            </tr>`);
            }
        }

        function init() {
            // Adiciona funções para tratar os eventos 
            $("#btnInsert").click(function () {
                // Verfica se o formulário está preenchido corretamente
                if (!$('#form-contato')[0].checkValidity()) {
                    displayMessage("Preencha o formulário corretamente.");
                    return;
                }

                // Obtem os valores dos campos do formulário
                let campoNome = $("#nome").val();
                let campoTelefone = $("#telefone").val();
                let campoCpf = $('#cpf').val();
                let campoData = $("#data").val();
                let campoRua = $('#rua').val();
                let campoBairro= $('#bairro').val();
                let campoCidade = $('#cidade').val();
                let campoComple = $('#comple').val();
                let contato = { nome: campoNome, 
                    telefone: campoTelefone, 
                    cpf: campoCpf, 
                    data: campoData, 
                    rua: campoRua,
                    bairro: campoBairro,
                    cidade: campoCidade,
                    comple: campoComple };

                insertContato(contato);

                // Reexibe os contatos
                exibeContatos();
            })
        }
    }

 

