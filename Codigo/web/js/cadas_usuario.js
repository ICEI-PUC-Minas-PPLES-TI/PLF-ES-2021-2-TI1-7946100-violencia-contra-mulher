function processaForm(evt){
    evt.preventDefault ();
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
        window.alert("Dados enviados com sucesso!");
    }

 

